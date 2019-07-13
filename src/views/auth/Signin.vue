<template>
    <div id="signin" class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
        <div class="uk-width-1-1">
            <div class="uk-container">
                <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                    <div class="uk-width-1-1@m">
                        <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                            <h3 class="uk-card-title uk-text-center">Signin</h3>

                            <button @click="signInWithGoogle" class="uk-button uk-button-danger uk-width-1-1 uk-margin-medium-bottom">
                                <span uk-icon="icon: google"></span> Sign in with Google
                            </button>

                            <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-medium-bottom">
                                <span uk-icon="icon: twitter"></span> Sign in with Twitter
                            </button>

                            <button @click="signInWithGithub" class="uk-button uk-button-secondary uk-width-1-1">
                                <span uk-icon="icon: github"></span> Sign in with Github
                            </button>

                            <hr class="uk-divider-icon">

                            <form v-on:submit.prevent="signInWithEmailAndPassword">
                                <div class="uk-margin">

                                    <div class="uk-inline uk-width-1-1">
                                        <span class="uk-form-icon" uk-icon="icon: mail"></span>
                                        <input :class="{'uk-input': true, 'uk-form-large': true, 'uk-form-danger': isAction && (!validation().username.required || !validation().username.format)}"
                                            type="text" placeholder="Mail Address" v-model="username">
                                    </div>
                                    <div v-if="!validation().username.required && isAction" class="uk-text-danger">Email address is required</div>
                                    <div v-if="!validation().username.format && isAction" class="uk-text-danger">Email address format is invalid</div>

                                </div>
                                <div class="uk-margin">

                                    <div class="uk-inline uk-width-1-1">
                                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                        <input :class="{'uk-input': true, 'uk-form-large': true, 'uk-form-danger': isAction && (!validation().password.required || !validation().password.weakPassword)}"
                                            type="password" placeholder="Password" v-model="password">
                                    </div>
                                    <div v-if="!validation().password.required && isAction" class="uk-text-danger">Password is required</div>
                                    <div v-if="!validation().password.weakPassword && isAction" class="uk-text-danger">Password should be at least 6 characters</div>

                                </div>

                                <div class="uk-margin">
                                    <button class="uk-button uk-custome-button-color-green uk-button-large uk-width-1-1" type="submit">Signin</button>
                                </div>
                                <div class="uk-text-small uk-text-center">
                                    Not registered? <router-link to="/signup">Create an account</router-link>
                                </div>

                                <div v-show="isLoading">
                                    <div class="uk-overlay-default uk-position-cover"></div>
                                    <div class="ui-margin uk-overlay uk-position-center uk-dark">
                                        <span uk-spinner="ratio: 4.5"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import auth from '@/firebase/auth';
import store from '@/store';
import { AuthsState } from '@/store/auths/types';
import VueRouter from 'vue-router';
import Base from '@/components/Base';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

// interface
interface UsernameValidation {
    [key: string]: boolean;
    required: boolean;
    format: boolean;
}

interface PasswordValidation {
    [key: string]: boolean;
    required: boolean;
    weakPassword: boolean;
}

interface Validation {
    username: UsernameValidation;
    password: PasswordValidation;
}

const regexs = [
    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])',
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
];
const REGEX_EMAIL = new RegExp(regexs.join(''));
const required = (val: string) => !!val.trim();
const format = (val: string) => !val || REGEX_EMAIL.test(val);
const weakPassword = (val: string) => val.length >= 6;

/**
 * ログインに関するコンポーネントです.
 */
@Component
export default class Signin extends Base {
    private username: string = '';
    private password: string = '';
    private isAction: boolean = false;
    private isLoading: boolean = false;

    /**
     * フィールドに対するバリデーションチェック結果を返します.
     */
    private validation(): Validation {
        return {
            username: {
                required: required(this.username),
                format: format(this.username),
            },
            password: {
                required: required(this.password),
                weakPassword: weakPassword(this.password),
            },
        };
    }

    /**
     * バリデーションチェックの結果から、全て問題ないかを判定します.
     */
    private isValid(): boolean {
        const { username, password } = this.validation();

        for　(const validation of [ username, password ]) {
            const valid: boolean = Object.keys(validation).every((key: string) => validation[key]);
            if (!valid) {
                return false;
            }
        }

        return true;
    }

    /**
     * バリデーションチェックが問題ないか判定します.
     */
    private disableLoginAction(): boolean {
        return !this.isValid();
    }

    /**
     * Eメール・パスワードでの認証を行います.
     */
    private async signInWithEmailAndPassword(): Promise<any> {
        this.isAction = true;

        if (this.disableLoginAction()) {
            return ;
        }

        this.isAction = false;
        this.isLoading = true;

        const [authErr, result] = await auth.signInWithEmailAndPassword(this.username, this.password);
        if (authErr) {
            UIkit.notification({message: authErr, status: 'danger'});
            this.isLoading = false;
            return ;
        }

        await auth.onAuth();

        this.getUserIdAndSaveUserInfo();
        this.isLoading = false;
        this.$router.push({name: 'home'});
    }

    private async signInWithGoogle(): Promise<any> {
        this.isLoading = true;

        try {
            await auth.loginWithGoogle();
            await auth.onAuth();

            this.getUserIdAndSaveUserInfo();
            this.$router.push({ name: 'home' });
        } catch (error) {
            UIkit.notification({...error, status: 'danger'});
        } finally {
            this.isLoading = false;
        }
    }

    private async signInWithGithub(): Promise<any> {
        this.isLoading = true;

        try {
            await auth.loginWithGithub();
            await auth.onAuth();

            this.getUserIdAndSaveUserInfo();
            this.$router.push({ name: 'home' });
        } catch (error) {
            UIkit.notification({...error, status: 'danger'});
        } finally {
            this.isLoading = false;
        }
    }

    private getUserIdAndSaveUserInfo(): void {
        store.dispatch(`${this.config.vuex.namespace.auths}/saveToken`);
    }
}
</script>

<style scoped>
#signin {
    background-color: darkgrey;
}
</style>