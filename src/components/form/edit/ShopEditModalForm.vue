<template>
    <div id="shop_edit_modal" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="uk-modal-title">Shop input</h2>
            
            <div class="uk-section uk-section-muted">
                <div class="uk-container">
                    <h3>Input form</h3>
                    <form class="uk-grid-small" uk-grid v-on:submit.prevent="registration">

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-shop-name">Shop name</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-shop-name"
                                :class="{'uk-input': true, 'uk-form-danger': shopValidators.name.validate}"
                                type="text"
                                v-model="shopData.name"
                                >
                                <span v-show="shopValidators.name.validate" class="uk-text-danger">{{ shopValidators.name.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-link">Site link</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-link" class="uk-input" type="text" v-model="shopData.link">
                            </div>
                        </div>

                        <div class="uk-width-1-4@s">
                            <label class="uk-form-label" for="form-stacked-station-name">Station name</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-station-name"
                                :class="{'uk-input': true, 'uk-form-danger': shopValidators.stationName.validate}"
                                type="text"
                                autocomplete="on"
                                list="auto_station"
                                v-model="shopData.stationName"
                                >
                                <span v-show="shopValidators.stationName.validate" class="uk-text-danger">{{ shopValidators.stationName.errorMessage }}</span>
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
                                :class="{'uk-input': true, 'uk-form-danger': shopValidators.address.validate}"
                                type="text"
                                v-model="shopData.address"
                                >
                                <span v-show="shopValidators.address.validate" class="uk-text-danger">{{ shopValidators.address.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-business-hours">Business hours</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-business-hours"
                                :class="{'uk-input': true, 'uk-form-danger': shopValidators.businessHours.validate}"
                                type="text"
                                v-model="shopData.businessHours"
                                >
                                <span v-show="shopValidators.businessHours.validate" class="uk-text-danger">{{ shopValidators.businessHours.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-tel">Tel</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-tel"
                                :class="{'uk-input': true, 'uk-form-danger': shopValidators.tel.validate}"
                                type="text"
                                v-model="shopData.tel"
                                >
                                <span v-show="shopValidators.tel.validate" class="uk-text-danger">{{ shopValidators.tel.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-1" uk-margin>
                            <label class="uk-form-label" for="form-stacked-image-path">Image</label>
                            <div class="uk-form-controls">
                                <div uk-form-custom="target: true" class="js-upload uk-width-1-1">
                                    <input type="file" accept="image/*" @change="imageChange">
                                    <input class="uk-input uk-width-1-2@s"
                                    type="text"
                                    :placeholder="shopData.image.name ? shopData.image.name : 'Select file'"
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
                                <select class="uk-select" id="form-stacked-delete-flg" v-model="shopData.deleteFlag" :disabled="addFlag">
                                    <option value="true">Deleted</option>
                                    <option value="false">Not deleted</option>
                                </select>
                            </div>
                        </div>

                        <div class="uk-width-1-1">
                            <p class="uk-align-right">
                                <button class="uk-button uk-button-primary uk-button-large" :disabled="validateCheck.hasError(shopValidators)" type="submit">Entry</button>
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

import ShopData from '@/type/domain/dto/ShopData';
import ValidateCheck from '@/type/validator/ValidateCheck';
import ShopValidators from '@/type/validator/shop/ShopValidators';
import MaxChars from '@/type/validator/shop/MaxChars';
import Storage from '@/type/domain/repository/firebase/storage/Storage';
import ImageStorage from '@/type/domain/repository/firebase/storage/ImageStorage';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component
export default class ShopEditModalForm extends Vue {
    @Prop({type: Object as CustomProp<ShopData>})
    private shopData!: ShopData;

    @Prop({type: Boolean})
    private addFlag!: boolean;

    private file?: File;

    private validateCheck: ValidateCheck = new ValidateCheck();

    private shopValidators: ShopValidators = {
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
        this.onShopNameChange(this.shopData.name, '');
        this.onStationNameChange(this.shopData.stationName, '');
        this.onAddressChange(this.shopData.address, '');
        this.onBusinessHours(this.shopData.businessHours, '');
        this.onTelChange(this.shopData.tel, '');
    }

    @Watch('shopData.name')
    private onShopNameChange(newShopName: string, oldShopName: string): void {
        this.shopValidators.name = this.validateCheck.required(newShopName);

        if (!this.shopValidators.name.validate) {
            this.shopValidators.name = this.validateCheck.lessEqualText(newShopName, MaxChars.NAME);
        }
    }

    @Watch('shopData.stationName')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        this.shopValidators.stationName = this.validateCheck.required(newStationName);

        if (!this.shopValidators.stationName.validate) {
            this.shopValidators.stationName = this.validateCheck.lessEqualText(newStationName, MaxChars.STATION_NAME);
        }
    }

    @Watch('shopData.address')
    private onAddressChange(newAddress: string, oldAddress: string): void {
        this.shopValidators.address = this.validateCheck.required(newAddress);

        if (!this.shopValidators.address.validate) {
            this.shopValidators.address = this.validateCheck.lessEqualText(newAddress, MaxChars.ADDRESS);
        }
    }

    @Watch('shopData.businessHours')
    private onBusinessHours(newBusinessHours: string, oldBusinessHours: string): void {
        this.shopValidators.businessHours = this.validateCheck.required(newBusinessHours);

        if (!this.shopValidators.businessHours.validate) {
            this.shopValidators.businessHours = this.validateCheck.lessEqualText(
                newBusinessHours,
                MaxChars.BUSINESS_HOURS,
            );
        }
    }

    @Watch('shopData.tel')
    private onTelChange(newTel: string, oldTel: string): void {
        this.shopValidators.tel = this.validateCheck.formatTelephone(newTel);
    }

    private imageChange(ev: any): void {
        this.file = ev.target.files[0];

        if (this.file === undefined) {
            this.shopData.image = {
                id: null,
                name: '',
                path: '',
                deleteFlag: false,
            };
            return ;
        }

        this.shopData.image.name = this.file.name;
    }

    private registration(): void {
        console.log(this.shopData);

        UIkit.modal.confirm('I will register. Is it OK?').then(() => {
            // TODO: 登録処理
            console.log('Confirmed.');

            const storage: Storage = new ImageStorage(this.shopData.image.name, this.file);
            storage.upload(function(this: ShopEditModalForm, downloadURL: string) {
                this.shopData.image.path = downloadURL;
                console.log(this.shopData.image.path);
            }.bind(this));
        }, () => {
            UIkit.modal('#shop_edit_modal').show();
        });
    }
}
</script>