<template>
  <div>
    <h1 class="uk-heading-line uk-text-center"><span>Login Page</span></h1>

    <div class="uk-column-1-2 uk-column-divider uk-margin-xlarge-top">

      <external-api-login-input />

      <login-input-form />

    </div>

    <create-account-modal-form />

    <button @click="modalShow" class="uk-align-center uk-button uk-button-link">Create new account.</button>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LoginInputForm from '@/components/form/input/LoginInputForm.vue';
import ExternalApiLoginInput from '@/components/form/input/ExternalApiLoginInput.vue';
import CreateAccountModalForm from '@/components/form/edit/CreateAccountModalForm.vue';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

@Component({
  components: {
    LoginInputForm,
    ExternalApiLoginInput,
    CreateAccountModalForm,
  },
})
export default class Login extends Vue {
  private modalShow(): void {
    UIkit.modal('.create-account-modal-form').show();
  }
}
</script>