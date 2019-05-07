<template>
    <div class="clothes-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid　v-on:submit.prevent="search">
                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-brand">Brand</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-brand" v-model="inputData.brandId">
                                <option v-for="assistBrand in assistBrandList" :key="assistBrand.id" :value="assistBrand.id">{{ assistBrand.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-shop">Shop</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-shop" v-model="inputData.shopId">
                                <option v-for="assistShop in assistShopList" :key="assistShop.id" :value="assistShop.id">{{ assistShop.name }</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-price">Price</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-price">
                                <option v-for="assistPrice in assistPriceList" :key="assistPrice.id">{{ assistPrice.value }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label"> Price option</label>
                        <div class="uk-margin-small-top uk-grid-small uk-child-width-auto uk-grid">
                            <label><input class="uk-radio" type="radio" name="radio1" checked> level</label>
                            <label><input class="uk-radio" type="radio" name="radio1"> more</label>
                            <label><input class="uk-radio" type="radio" name="radio1"> less</label>
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-search-date">Buy date</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" id="form-stacked-search-date" placeholder="YYYY/MM/DD">
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-delete-flg">Delete flg</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-delete-flg">
                                <option>Deleted</option>
                                <option>Not deleted</option>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import Base from '@/components/Base';
import Pikaday from 'pikaday';
import axios from 'axios';

import APIRequest from '@/type/domain/mcmApi/APIRequest';
import ClothesSearchInputData from '@/type/domain/dto/myClothes/ClothesSearchInputData';
import ValidateCheck from '@/type/validator/ValidateCheck';
import ClothesValidators from '@/type/validator/clothes/ClothesValidators';
import AssistBrandData from '@/type/domain/dto/myClothes/assist/AssistBrandData';
import AssistShopData from '@/type/domain/dto/myClothes/assist/AssistShopData';
import ClothesTableData from '@/type/domain/dto/myClothes/ClothesTableData';

@Component
export default class ClothesSearchForm extends Base {

    private inputData: ClothesSearchInputData = {
        brandId: null,
        genreId: null,
        shopId: null,
        morePrice: null,
        lessPrice: null,
        buyDate: null,
        deleteFlag: false,
    };

    private validateCheck: ValidateCheck = new ValidateCheck();

    private clothesValidators: ClothesValidators = {
        price: {
            validate: false,
            errorMessage: '',
        },
    };

    private assistBrandList: AssistBrandData[] = [];

    private assistShopList: AssistShopData[] = [];

    private assistPriceList: any[] = [
        {
            id: 0,
            value: 10000,
        },
        {
            id: 1,
            value: 20000,
        },
        {
            id: 2,
            value: 30000,
        },
    ];

    private picker?: Pikaday;

    private mounted(): void {
        this.mountedPikaday();

        this.setAssistBrandList();

        this.setAssistShopList();
    }

    private mountedPikaday(): void {
        this.picker = new Pikaday(
            {
                field: document.getElementById('form-stacked-search-date'),
                format: 'YYYY/MM/DD',
                onSelect: (date) => {
                    const buyDateElem: HTMLInputElement | null
                        = document.getElementById('form-stacked-search-date') as HTMLInputElement;
                    if (buyDateElem !== null) {
                        this.inputData.buyDate = new Date(buyDateElem.value);
                    }
                },
            },
        );
    }

    private setAssistBrandList(): void {
        const apiRequest: APIRequest = new APIRequest('/assist/brand/keyValueList', {});

        apiRequest.get((response) => {
            console.log(response);
            this.assistBrandList = response.data;
        });
    }

    private setAssistShopList(): void {
        const apiRequest: APIRequest = new APIRequest('/assist/shop/keyValueList', {});

        apiRequest.get((response) => {
            console.log(response);
            this.assistShopList = response.data;
        });
    }

    private beforeDestroy(): void {
        // TODO: datepickerの破棄
    }

    private search(): void {
        console.log('search event.');

        console.log(this.inputData);

        const apiRequest: APIRequest = new APIRequest('/clothesList/search', {
            inputDataJson: JSON.stringify(this.inputData),
        });

        apiRequest.get((response: ClothesTableData) => {
            console.log(response);
            this.$emit('searchResultData', 'response');
        });

    }

}
</script>
