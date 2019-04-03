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

                        <div class="uk-width-1-4@s">
                            <label class="uk-form-label" for="form-stacked-station-name">Station name</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-station-name"
                                :class="{'uk-input': true, 'uk-form-danger': brandValidators.stationName.validate}"
                                type="text"
                                autocomplete="on"
                                list="auto_station"
                                v-model="brandDto.stationName"
                                >
                                <span v-show="brandValidators.stationName.validate" class="uk-text-danger">{{ brandValidators.stationName.errorMessage }}</span>
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
                                <input id="form-stacked-address"
                                :class="{'uk-input': true, 'uk-form-danger': brandValidators.address.validate}"
                                type="text"
                                v-model="brandDto.address"
                                >
                                <span v-show="brandValidators.address.validate" class="uk-text-danger">{{ brandValidators.address.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-business-hours">Business hours</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-business-hours"
                                :class="{'uk-input': true, 'uk-form-danger': brandValidators.businessHours.validate}"
                                type="text"
                                v-model="brandDto.businessHours"
                                >
                                <span v-show="brandValidators.businessHours.validate" class="uk-text-danger">{{ brandValidators.businessHours.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-tel">Tel</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-tel"
                                :class="{'uk-input': true, 'uk-form-danger': brandValidators.tel.validate}"
                                type="text"
                                v-model="brandDto.tel"
                                >
                                <span v-show="brandValidators.tel.validate" class="uk-text-danger">{{ brandValidators.tel.errorMessage }}</span>
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
import ValidateCheck from '@/type/brand/validator/ValidateCheck';
import BrandValidators from '@/type/brand/validator/BrandValidators';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component
export default class BrandEditModal extends Vue {
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
        stationName: {
            validate: false,
            errorMessage: '',
        },
        address: {
            validate: false,
            errorMessage: '',
        },
        businessHours: {
            validate: false,
            errorMessage: '',
        },
        tel: {
            validate: false,
            errorMessage: '',
        },
    };

    public inputAllCheck(): void {
        this.onBrandNameChange(this.brandDto.name, '');
        this.onStationNameChange(this.brandDto.stationName, '');
        this.onAddressChange(this.brandDto.address, '');
        this.onBusinessHours(this.brandDto.businessHours, '');
        this.onTelChange(this.brandDto.tel, '');
    }

    @Watch('brandDto.name')
    private onBrandNameChange(newBrandName: string, oldBrandName: string): void {
        this.brandValidators.name = this.validateCheck.required(newBrandName);

        if (!this.brandValidators.name.validate) {
            this.brandValidators.name = this.validateCheck.lessEqual(newBrandName, 30);
        }
    }

    @Watch('brandDto.stationName')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        this.brandValidators.stationName = this.validateCheck.required(newStationName);

        if (!this.brandValidators.stationName.validate) {
            this.brandValidators.stationName = this.validateCheck.lessEqual(newStationName, 15);
        }
    }

    @Watch('brandDto.address')
    private onAddressChange(newAddress: string, oldAddress: string): void {
        this.brandValidators.address = this.validateCheck.required(newAddress);

        if (!this.brandValidators.address.validate) {
            this.brandValidators.address = this.validateCheck.lessEqual(newAddress, 100);
        }
    }

    @Watch('brandDto.businessHours')
    private onBusinessHours(newBusinessHours: string, oldBusinessHours: string): void {
        this.brandValidators.businessHours = this.validateCheck.required(newBusinessHours);

        if (!this.brandValidators.businessHours.validate) {
            this.brandValidators.businessHours = this.validateCheck.lessEqual(newBusinessHours, 30);
        }
    }

    @Watch('brandDto.tel')
    private onTelChange(newTel: string, oldTel: string): void {
        this.brandValidators.tel = this.validateCheck.formatTelephone(newTel);
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