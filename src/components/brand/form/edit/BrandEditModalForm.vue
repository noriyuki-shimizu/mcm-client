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
                                <input id="form-stacked-brand-name" :change="inputCheckByText('name')" :class="{'uk-input': true, 'uk-form-danger': validator.name}" type="text" v-model="brandDto.name">
                                <span v-show="validator.name" class="uk-text-danger">Required</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-link">Site link</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-link" class="uk-input" type="text" v-model="brandDto.link">
                            </div>
                        </div>

                        <div class="uk-width-1-4@s">
                            <label class="uk-form-label" for="form-stacked-station-name">Station name</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-station-name" :change="inputCheckByText('stationName')" :class="{'uk-input': true, 'uk-form-danger': validator.stationName}" type="text" autocomplete="on" list="auto_station" v-model="brandDto.stationName">
                                <span v-show="validator.stationName" class="uk-text-danger">Required</span>
                                <datalist id="auto_station">
                                    <option value="渋谷" />
                                    <option value="代官山" />
                                    <option value="恵比寿" />
                                </datalist>
                            </div>
                        </div>

                        <div class="uk-width-1-1">
                            <label class="uk-form-label" for="form-stacked-address">Address</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-address" :change="inputCheckByText('address')" :class="{'uk-input': true, 'uk-form-danger': validator.address}" type="text" v-model="brandDto.address">
                                <span v-show="validator.address" class="uk-text-danger">Required</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-business-hours">Business hours</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-business-hours" :change="inputCheckByText('businessHours')" :class="{'uk-input': true, 'uk-form-danger': validator.businessHours}" type="text" v-model="brandDto.businessHours">
                                <span v-show="validator.businessHours" class="uk-text-danger">Required</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-tel">Tel</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-tel" :change="inputCheckByTelephone()" :class="{'uk-input': true, 'uk-form-danger': validator.tel}" type="text" v-model="brandDto.tel">
                                <span v-show="validator.tel" class="uk-text-danger">Invalid phone number format</span>
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
                                <button class="uk-button uk-button-primary uk-button-large" :disabled="hasError()" type="submit">Entry</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import BrandDto from '@/type/BrandDto';

interface Validator {
    [key: string]: boolean;
    name: boolean;
    stationName: boolean;
    address: boolean;
    businessHours: boolean;
    tel: boolean;
}

type CustomProp<T> = () => T;

@Component
export default class BrandEditModal extends Vue {
    @Prop({type: Object as CustomProp<BrandDto>})
    private brandDto!: BrandDto;

    @Prop({type: Boolean})
    private addFlag!: boolean;

    private validator: Validator = {
        name: false,
        stationName: false,
        address: false,
        businessHours: false,
        tel: false,
    };

    public inputAllCheck(): void {
        this.inputCheckByText('name');
        this.inputCheckByText('stationName');
        this.inputCheckByText('address');
        this.inputCheckByText('businessHours');
        this.inputCheckByTelephone();
    }

    private inputCheckByText(key: string): void {
        if (this.brandDto[key] === undefined || this.brandDto[key] === '') {
            this.validator[key] = true;

            return ;
        }
        this.validator[key] = false;
    }

    private inputCheckByTelephone(): void {
        if (this.brandDto.tel === undefined || this.brandDto.tel === '') {
            this.validator.tel = false;

            return ;
        }

        const telephoneNumber: string = this.brandDto.tel.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, '');

        this.validator.tel = !telephoneNumber.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/) ? true : false;
    }

    private hasError(): boolean {
        const keys: string[] = Object.keys(this.validator);

        return keys.some(function(this: BrandEditModal, key: string) {
            return this.validator[key];
        }, this);
    }

    private registration(): void {
        console.log(this.brandDto);
        // TODO: 登録処理
    }
}
</script>