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

                        <div class="uk-width-1-2@s">
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

                        <div class="uk-width-1-1" uk-margin>
                            <label class="uk-form-label" for="form-stacked-image-path">Image</label>
                            <div class="uk-form-controls">
                                <div uk-form-custom="target: true" class="js-upload uk-width-1-1">
                                    <input type="file" accept="image/*" @change="imageChange">
                                    <input class="uk-input uk-width-1-2@s"
                                    type="text"
                                    :placeholder="brandDto.image.name ? brandDto.image.name : 'Select file'"
                                    disabled
                                    tabindex="-1"
                                    >
                                    <button class="uk-button uk-button-default uk-custome-button-color-green" type="button" tabindex="-1">Select</button>
                                </div>
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
import * as Filebase from 'firebase/app';
import 'firebase/storage';

import BrandDto from '@/type/domain/dto/BrandDto';
import ValidateCheck from '@/type/validator/ValidateCheck';
import BrandValidators from '@/type/validator/brand/BrandValidators';
import MaxChars from '@/type/validator/brand/MaxChars';
import Storage from '@/type/domain/repository/firebase/Storage';
import ImageStorage from '@/type/domain/repository/firebase/ImageStorage';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;
type CallbackType = () => void;

@Component
export default class BrandEditModalForm extends Vue {
    @Prop({type: Object as CustomProp<BrandDto>})
    private brandDto!: BrandDto;

    @Prop({type: Boolean})
    private addFlag!: boolean;

    private validateCheck: ValidateCheck | null = new ValidateCheck();

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

    private beforeDestroy(): void {
        this.validateCheck = null;
    }

    private inputAllCheck(): void {
        this.onBrandNameChange(this.brandDto.name, '');
    }

    @Watch('brandDto.name')
    private onBrandNameChange(newBrandName: string, oldBrandName: string): void {
        if (this.validateCheck !== null) {
            this.brandValidators.name = this.validateCheck.required(newBrandName);

            if (!this.brandValidators.name.validate) {
                this.brandValidators.name = this.validateCheck.lessEqualText(newBrandName, MaxChars.NAME);
            }
        }
    }

    @Watch('brandDto.country')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        if (this.validateCheck !== null) {
            this.brandValidators.stationName = this.validateCheck.lessEqualText(newStationName, MaxChars.COUNTRY);
        }
    }

    private imageChange(ev: any): void {
        const file: File = ev.target.files[0];

        if (file === undefined) {
            this.brandDto.image = {
                name: '',
                path: '',
                file: null,
                deleteFlag: false,
            };
            return ;
        }

        this.brandDto.image.name = file.name;
        this.brandDto.image.file = file;
    }

    private registration(): void {
        console.log(this.brandDto);

        UIkit.modal.confirm('I will register. Is it OK?').then(() => {
            // TODO: 登録処理
            console.log('Confirmed.');

            const storage: Storage = new ImageStorage(this.brandDto.image);
            storage.upload(function(this: BrandDto, downloadURL: string) {
                this.image.path = downloadURL;
                console.log(this.image.path);
            }.bind(this.brandDto));
        }, () => {
            UIkit.modal('#brand_edit_modal').show();
        });
    }
}
</script>
