<template>
    <div id="brand_edit_modal" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="uk-modal-title">Brand input</h2>
            
            <div class="uk-section uk-section-muted">
                <div class="uk-container">
                    <h3>Input form</h3>
                    <form class="uk-grid-small" uk-grid v-on:submit.prevent="registration">

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-brand-name">Brand name</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-brand-name"
                                :class="{'uk-input': true, 'uk-form-danger': brandValidators.name.validate}"
                                type="text"
                                v-model="brandDto.name"
                                >
                                <span v-show="brandValidators.name.validate" class="uk-text-danger">{{ brandValidators.name.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-link">Site link</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-link" class="uk-input" type="text" v-model="brandDto.link">
                            </div>
                        </div>

                        <div class="uk-width-1-1">
                            <label class="uk-form-label" for="form-stacked-country">Country</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-country"
                                :class="{'uk-input': true, 'uk-form-danger': brandValidators.country.validate}"
                                type="text"
                                v-model="brandDto.country"
                                >
                                <span v-show="brandValidators.country.validate" class="uk-text-danger">{{ brandValidators.country.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-4@s">
                            <label class="uk-form-label" for="form-stacked-delete-flg">Delete flg</label>
                            <div class="uk-form-controls">
                                <select class="uk-select" id="form-stacked-delete-flg" v-model="brandDto.deleteFlag" :disabled="addFlag">
                                    <option value="true">Deleted</option>
                                    <option value="false">Not deleted</option>
                                </select>
                            </div>
                        </div>

                        <div class="uk-width-1-1">
                            <p class="uk-align-right">
                                <button class="uk-button uk-button-primary uk-button-large" :disabled="validateCheck.hasError(brandValidators)" type="submit">Entry</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

import BrandDto from '@/type/brand/dto/BrandDto';
import ValidateCheck from '@/type/validator/ValidateCheck';
import BrandValidators from '@/type/brand/validator/BrandValidators';
import MaxChars from '@/type/brand/validator/MaxChars';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component
export default class BrandEditModalForm extends Vue {
    @Prop({type: Object as CustomProp<BrandDto>})
    private brandDto!: BrandDto;

    @Prop({type: Boolean})
    private addFlag!: boolean;

    private validateCheck: ValidateCheck = new ValidateCheck();

    private brandValidators: BrandValidators = {
        name: {
            validate: false,
            errorMessage: '',
        },
        country: {
            validate: false,
            errorMessage: '',
        },
    };

    public inputAllCheck(): void {
        this.onBrandNameChange(this.brandDto.name, '');
    }

    @Watch('brandDto.name')
    private onBrandNameChange(newBrandName: string, oldBrandName: string): void {
        this.brandValidators.name = this.validateCheck.required(newBrandName);

        if (!this.brandValidators.name.validate) {
            this.brandValidators.name = this.validateCheck.lessEqual(newBrandName, MaxChars.NAME);
        }
    }

    @Watch('brandDto.country')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        this.brandValidators.stationName = this.validateCheck.lessEqual(newStationName, MaxChars.COUNTRY);
    }

    private registration(): void {
        console.log(this.brandDto);

        UIkit.modal.confirm('I will register. Is it OK?').then(() => {
            // TODO: 登録処理
            console.log('Confirmed.');
        }, () => {
            UIkit.modal('#brand_edit_modal').show();
        });
    }
}
</script>