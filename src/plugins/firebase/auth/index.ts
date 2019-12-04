import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'config';
import store from '@/store';

export default {
    init(): void {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },

    async createUserWithEmailAndPassword(
        username: string,
        password: string
    ): Promise<any> {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(username, password);
    },

    async signInWithEmailAndPassword(
        username: string,
        password: string
    ): Promise<any> {
        return firebase
            .auth()
            .signInWithEmailAndPassword(username, password);
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
        return firebase.auth().signOut();
    },

    async onAuth(): Promise<any> {
        const user = firebase.auth().currentUser;

        const { authState, userStatus, token } = user
            ? {
                  authState: user,
                  userStatus: !!user.uid,
                  token: await user.getIdToken(true)
              }
            : {
                  authState: {},
                  userStatus: false,
                  token: ''
              };

        console.info('login user : ', user);

        store.commit(
            `${config.vuex.namespace.auths}/onAuthStateChanged`,
            authState
        );
        store.commit(
            `${config.vuex.namespace.auths}/onUserStatusChanged`,
            userStatus
        );
        store.commit(
            `${config.vuex.namespace.auths}/onTokenStateChanged`,
            token
        );
    }
};
