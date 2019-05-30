import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'config';
import store from '@/store';

const namespace: string = 'auths';

export default {
    init(): void {
        firebase.initializeApp(config.firebase);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },

    loginWithGoogle(): void {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    },

    loginWithGithub(): void {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider);
    },

    logout(): void {
        firebase.auth().signOut();
    },

    onAuth(): void {
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

            console.log(user);

            store.commit(`${namespace}/onAuthStateChanged`, authState);
            store.commit(`${namespace}/onUserStatusChanged`, userStatus);
            store.commit(`${namespace}/onTokenStateChanged`, token);
        });
    },
};
