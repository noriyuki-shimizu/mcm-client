<template>
    <div class="external-api-login-input">

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

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import auth from '@/firebase/auth';

@Component
export default class ExternalApiLoginInput extends Vue {
    private authGoogle(): void {
      auth.loginWithGoogle();
      auth.onAuth();
    }

    private authGithub(): void {
      auth.loginWithGithub();
      auth.onAuth();
    }
}
</script>