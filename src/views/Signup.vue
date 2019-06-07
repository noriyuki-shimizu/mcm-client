<template>
    <div id="signup" class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
        <div class="uk-width-1-1">
            <div class="uk-container">
                <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                    <div class="uk-width-1-1@m">
                        <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                            <h3 class="uk-card-title uk-text-center">Signup!</h3>
                            <form v-on:submit.prevent="signUp">
                                <div class="uk-margin">

                                    <div class="uk-inline uk-width-1-1">
                                        <span class="uk-form-icon" uk-icon="icon: mail"></span>
                                        <input :class="{'uk-input': true, 'uk-form-large': true, 'uk-form-danger': isAction && !validation().username.required || !validation().username.format}"
                                            type="text" placeholder="Mail Address" v-model="username">
                                    </div>
                                    <div v-if="!validation().username.required && isAction" class="uk-text-danger">Email address is required</div>
                                    <div v-if="!validation().username.format && isAction" class="uk-text-danger">Email address format is invalid</div>

                                </div>
                                <div class="uk-margin">

                                    <div class="uk-inline uk-width-1-1">
                                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                        <input :class="{'uk-input': true, 'uk-form-large': true, 'uk-form-danger': isAction && !validation().password.required}"
                                            type="password" placeholder="Password" v-model="password">
                                    </div>
                                    <span v-if="!validation().password.required && isAction" class="uk-text-danger">Password is required</span>

                                </div>
                                <div class="uk-margin">
                                    <button class="uk-button uk-button-primary uk-button-large uk-width-1-1" type="submit">Register</button>
                                </div>
                                <div class="uk-text-small uk-text-center">
                                    Do you have an account? <router-link to="/signin">sign in now!!</router-link>
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
import { Vue, Component } from 'vue-property-decorator';
import auth from '@/firebase/auth';

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
}

interface Validation {
    username: UsernameValidation;
    password: PasswordValidation;
}

const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const required = (val: string) => !!val.trim();
const format = (val: string) => !val || REGEX_EMAIL.test(val);

@Component
export default class Signup extends Vue {
    private username: string = '';
    private password: string = '';
    private isAction: boolean = false;
    private progress: boolean = false;

    private validation(): Validation {
        return {
            username: {
                required: required(this.username),
                format: format(this.username),
            },
            password: {
                required: required(this.password),
            },
        };
    }

    private valid(): boolean {
        const { username, password } = this.validation();

        for　(const validation of [ username, password ]) {
            const valid: boolean = Object.keys(validation).every((key: string) => validation[key]);
            if (!valid) {
                return false;
            }
        }

        return true;
    }

    private disableLoginAction(): boolean {
        return !this.valid() || this.progress;
    }

    private async signUp(): Promise<any> {
        this.isAction = true;

        if (this.disableLoginAction()) {
            return ;
        }

        this.isAction = false;
        this.progress = true;

        const [createErr, result] = await auth.createUserWithEmailAndPassword(this.username, this.password);
        if (createErr) {
            UIkit.notification({message: createErr, status: 'danger'});
            return ;
        }

        this.username = '';
        this.password = '';
        this.progress = false;

        UIkit.notification({message: 'Register User Success!', status: 'success'});
    }
}
</script>

<style scoped>
#signup {
    background-color: darkgrey;
}
</style>
