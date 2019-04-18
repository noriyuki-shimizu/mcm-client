<template>
    <div class="shop-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid　v-on:submit.prevent="search">

                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-shop-name">Shop name</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-shop-name"
                            :class="{'uk-input': true, 'uk-form-danger': shopValidators.name.validate}"
                            type="text"
                            v-model="shopDto.name"
                            >
                            <span v-show="shopValidators.name.validate" class="uk-text-danger">{{ shopValidators.name.errorMessage }}</span>
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
                            v-model="shopDto.stationName"
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
                            v-model="shopDto.address"
                            >
                            <span v-show="shopValidators.address.validate" class="uk-text-danger">{{ shopValidators.address.errorMessage }}</span>
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-delete-flg">Delete flg</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-delete-flg" v-model="shopDto.deleteFlag">
                                <option value="true">Deleted</option>
                                <option value="false">Not deleted</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-1">
                        <p class="uk-align-right">
                            <button class="uk-button uk-custome-button-color-green" type="submit">Search</button>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

import ShopDto from '@/type/dto/ShopDto';
import ValidateCheck from '@/type/validator/ValidateCheck';
import ShopValidators from '@/type/validator/shop/ShopValidators';
import MaxCharts from '@/type/validator/shop/MaxChars';

@Component
export default class ShopSearchForm extends Vue {

    private shopDto: ShopDto = {
        id: -1,
        name: '',
        link: '',
        stationName: '',
        image: {
            name: '',
            path: '',
            file: null,
        },
        address: '',
        businessHours: '',
        tel: '',
        deleteFlag: false,
    };

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

    @Watch('shopDto.name')
    private onBrandNameChange(newShopName: string, oldShopName: string): void {
        this.shopValidators.name = this.validateCheck.lessEqualText(newShopName, MaxCharts.NAME);
    }

    @Watch('shopDto.stationName')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        this.shopValidators.stationName = this.validateCheck.lessEqualText(newStationName, MaxCharts.STATION_NAME);
    }

    @Watch('shopDto.address')
    private onAddressChange(newAddress: string, oldAddress: string): void {
        this.shopValidators.address = this.validateCheck.lessEqualText(newAddress, MaxCharts.ADDRESS);
    }

    private search(): void {
        console.log('search event!');
        // TODO: 検索処理
    }
}
</script>