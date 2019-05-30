<template>
    <div class="login-input-form">
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

          <div class="uk-margin-medium-top">
            <button class="uk-button uk-custome-button-color-green uk-width-1-1" type="submit">Login</button>
          </div>

        </form>

      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoginInputForm extends Vue {
    private login(): void {
      console.log('login!!');
    }
}
</script>
