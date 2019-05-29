<template>
  <div>
    <h1 class="uk-heading-line uk-text-center"><span>Login Page</span></h1>

    <div class="uk-column-1-2 uk-column-divider uk-margin-xlarge-top">

      <div class="uk-margin-xlarge-left uk-margin-xlarge-bottom uk-margin-medium-top">

        <button @click="authGoogle" class="uk-button uk-button-danger uk-width-1-1 uk-margin-medium-bottom">
          <span uk-icon="icon: google"></span> Sign in with Google
        </button>

        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-medium-bottom">
          <span uk-icon="icon: twitter"></span> Sign in with Twitter
        </button>

        <button @click="authGithub" class="uk-button uk-button-secondary uk-width-1-1 uk-margin-medium-bottom">
          <span uk-icon="icon: github"></span> Sign in with Github
        </button>

      </div>

      <div class="uk-margin-xlarge-right">

        <form class="uk-form-stacked" v-on:submit.prevent="login">

          <div class="uk-margin">
            <label class="uk-form-label" for="user-name">User Name</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="user-name" type="text" placeholder="Input user name here...">
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="password">Password</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="password" type="password" placeholder="Input password here...">
            </div>
          </div>

          <!-- <p class="uk-align-right">
            <button class="uk-button uk-custome-button-color-green" type="submit">Login</button>
          </p> -->
          <div class="uk-margin-medium-top">
            <button class="uk-button uk-custome-button-color-green uk-width-1-1" type="submit">Login</button>
          </div>

        </form>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import firebase from '@/firebase';

@Component
export default class Login extends Vue {
    private authGoogle(): void {
      firebase.loginWithGoogle();
      firebase.onAuth();
    }

    private authGithub(): void {
      firebase.loginWithGithub();
      firebase.onAuth();
    }

    private login(): void {
      console.log('login!!');
    }
}
</script>