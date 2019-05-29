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
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (!user) {
                store.commit(`${namespace}/onAuthStateChanged`, {});
                store.commit(`${namespace}/onUserStatusChanged`, false);
            } else {
                store.commit(`${namespace}/onAuthStateChanged`, user);
                store.commit(`${namespace}/onUserStatusChanged`, user.uid ? true : false);
            }
        });
    },
};
