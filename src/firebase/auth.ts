import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'config';
import store from '@/store';

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

    async loginWithGoogle(): Promise<any> {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    },

    async loginWithGithub(): Promise<any> {
        const provider = new firebase.auth.GithubAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    },

    async logout(): Promise<any> {
        return await firebase.auth().signOut();
    },

    async onAuth(): Promise<any> {
        const user = firebase.auth().currentUser;

        const { authState, userStatus, token } = user ? ({
            authState: user,
            userStatus: user.uid ? true : false,
            token: await user.getIdToken(true),
        }) : ({
            authState: {},
            userStatus: false,
            token: '',
        });

        console.log(user);
        console.log(token);

        store.commit(`${config.vuex.namespace.auths}/onAuthStateChanged`, authState);
        store.commit(`${config.vuex.namespace.auths}/onUserStatusChanged`, userStatus);
        store.commit(`${config.vuex.namespace.auths}/onTokenStateChanged`, token);
    },
};
