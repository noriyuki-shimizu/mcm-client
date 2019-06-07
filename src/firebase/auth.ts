import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'config';
import store from '@/store';

const namespace: string = 'auths';

type CallbackType = () => void;

export default {
    init(): void {
        firebase.initializeApp(config.firebase);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },

    async createUserWithEmailAndPassword(username: string, password: string): Promise<any> {
        return await firebase.auth().createUserWithEmailAndPassword(username, password)
            .then(() => [null, arguments])
            .catch((error) => [error, null]);
    },

    async signInWithEmailAndPassword(username: string, password: string): Promise<any> {
        return await firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => [null, arguments])
            .catch((error) => [error, null]);
    },

    loginWithGoogle(): void {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    },

    loginWithGithub(): void {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider);
    },

    async logout(): Promise<any> {
        return await firebase.auth().signOut();
    },

    onAuth(callback: CallbackType): void {
        firebase.auth().onAuthStateChanged(async (user) => {

            const { authState, userStatus, token } = user ? ({
                authState: user,
                userStatus: user.uid ? true : false,
                token: await user.getIdToken(true),
            }) : ({
                authState: {},
                userStatus: false,
                token: '',
            });

            // console.log(user);
            // console.log(token);

            store.commit(`${namespace}/onAuthStateChanged`, authState);
            store.commit(`${namespace}/onUserStatusChanged`, userStatus);
            store.commit(`${namespace}/onTokenStateChanged`, token);

            callback();
        });
    },
};
