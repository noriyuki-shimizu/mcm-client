<template>
    <div class="create-account-modal-form uk-modal-container" uk-modal>

        <div class="uk-modal-dialog uk-modal-body">

            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="uk-modal-title">Create NEW Account.</h2>
            
            <div class="uk-container">
                <h3>Input form</h3>
                <form v-on:submit.prevent="registration">

                    <div class="uk-margin">
                        <label class="uk-form-label" for="new-user-name">User Name</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" id="new-user-name" type="text" placeholder="Input user name here...">
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="new-password">Password</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" id="new-password" type="password" placeholder="Input password here...">
                        </div>
                    </div>

                    <div class="uk-width-1-1">
                        <p class="uk-align-right">
                            <!-- <button class="uk-button uk-button-primary uk-button-large" :disabled="validateCheck.hasError(brandValidators)" type="submit">Entry</button> -->
                            <button class="uk-button uk-button-primary uk-button-large" type="submit">Entry</button>
                        </p>
                    </div>

                </form>

            </div>

        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CreateAccountModalForm extends Vue {
}
</script>
