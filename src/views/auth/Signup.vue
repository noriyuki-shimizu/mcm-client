<template>
  <div
    id="signup"
    class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
    uk-height-viewport
  >
    <div class="uk-width-1-1">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m">
            <div
              class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"
            >
              <h3 class="uk-card-title uk-text-center">
                Signup!
              </h3>
              <form v-on:submit.prevent="signUp" class="uk-overlay">
                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="icon: mail" />
                    <input
                      :class="{
                        'uk-input': true,
                        'uk-form-large': true,
                        'uk-form-danger':
                          isAction &&
                          (!validation().username.required || !validation().username.format),
                      }"
                      v-model="username"
                      type="text"
                      placeholder="Mail Address"
                    >
                  </div>
                  <div v-if="!validation().username.required && isAction" class="uk-text-danger">
                    Email address is required
                  </div>
                  <div v-if="!validation().username.format && isAction" class="uk-text-danger">
                    Email address format is invalid
                  </div>
                </div>
                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="icon: lock" />
                    <input
                      :class="{
                        'uk-input': true,
                        'uk-form-large': true,
                        'uk-form-danger':
                          isAction &&
                          (!validation().password.required || !validation().password.weakPassword),
                      }"
                      v-model="password"
                      type="password"
                      placeholder="Password"
                    >
                  </div>
                  <div v-if="!validation().password.required && isAction" class="uk-text-danger">
                    Password is required
                  </div>
                  <div
                    v-if="!validation().password.weakPassword && isAction"
                    class="uk-text-danger"
                  >
                    Password should be at least 6 characters
                  </div>
                </div>
                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="icon: lock" />
                    <input
:class="{'uk-input': true, 'uk-form-large': true, 'uk-form-danger':
                      isAction && (!validation().confirmPassword.required ||
                      !validation().confirmPassword.match)}"
                           }"
                           type="password"
                           v-model="confirmPassword"
                           placeholder="Confirm
                    password"
                    >
                  </div>
                  <div
                    v-if="!validation().confirmPassword.required && isAction"
                    class="uk-text-danger"
                  >
                    Confirm password is required
                  </div>
                  <div
                    v-if="!validation().confirmPassword.match && isAction"
                    class="uk-text-danger"
                  >
                    Password is mismatch the confirm password
                  </div>
                </div>

                <div class="uk-margin">
                  <button
                    class="uk-button uk-button-primary uk-button-large uk-width-1-1"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div class="uk-text-small uk-text-center">
                  Do you have an account?
                  <router-link to="/signin">
                    sign in now!!
                  </router-link>
                </div>

                <div v-show="isLoading">
                  <div class="uk-overlay-default uk-position-cover" />
                  <div class="ui-margin uk-overlay uk-position-center uk-dark">
                    <span uk-spinner="ratio: 4.5" />
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
  weakPassword: boolean;
}

interface ConfirmPasswordValidation {
  [key: string]: boolean;
  required: boolean;
  match: boolean;
}

interface Validation {
  username: UsernameValidation;
  password: PasswordValidation;
  confirmPassword: ConfirmPasswordValidation;
}

const emailRegexs = [
  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)',
  '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])',
  '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
];
const REGEX_EMAIL = new RegExp(emailRegexs.join(''));
const required = (val: string) => !!val.trim();
const format = (val: string) => !val || REGEX_EMAIL.test(val);
const match = (target: string, val: string) => target === val;
const weakPassword = (val: string) => val.length >= 6;

@Component
export default class Signup extends Vue {
  private username: string = '';

  private password: string = '';

  private confirmPassword: string = '';

  private isAction: boolean = false;

  private progress: boolean = false;

  private isLoading: boolean = false;

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
      confirmPassword: {
        required: required(this.confirmPassword),
        match: match(this.password, this.confirmPassword),
      },
    };
  }

  private valid(): boolean {
    const { username, password, confirmPassword } = this.validation();

    for (const validation of [username, password, confirmPassword]) {
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
      return;
    }

    this.isAction = false;
    this.progress = true;
    this.isLoading = true;

    const [createErr, result] = await auth.createUserWithEmailAndPassword(
      this.username,
      this.password,
    );
    if (createErr) {
      console.log(createErr);
      UIkit.notification({ message: createErr, status: 'danger' });
      this.isLoading = false;
      return;
    }

    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.progress = false;
    this.isLoading = false;

    UIkit.notification({ message: 'Register User Success!', status: 'success' });
  }
}
</script>

<style scoped>
#signup {
  background-color: darkgrey;
}
</style>
