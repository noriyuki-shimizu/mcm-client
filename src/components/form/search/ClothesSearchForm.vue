<template>
    <div class="clothes-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid　v-on:submit.prevent="search">
                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-brand">Brand</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-brand">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-shop">Shop</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-shop">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-price">Price</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-price">
                                <option>10,000 ~ 20,000</option>
                                <option>20,000 ~ 100,000</option>
                            </select>
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
import Pikaday from 'pikaday';

import ClothesDto from '@/type/dto/ClothesDto';
import ValidateCheck from '@/type/validator/ValidateCheck';
import ClothesValidators from '@/type/validator/clothes/ClothesValidators';

@Component
export default class ClothesSearchForm extends Vue {

    private clothesDto: ClothesDto = {
        id: -1,
        image: {
            name: '',
            path: '',
            file: null,
        },
        genre: '',
        brand: null,
        shop: null,
        price: 0,
        buyDate: '',
        deleteFlag: false,
    };

    private validateCheck: ValidateCheck = new ValidateCheck();

    private clothesValidators: ClothesValidators = {
        price: {
            validate: false,
            errorMessage: '',
        },
    };

    private picker?: Pikaday;

    private mounted(): void {
        this.picker = new Pikaday(
            {
                field: document.getElementById('form-stacked-search-date'),
                format: 'YYYY/MM/DD',
                onSelect: (date) => {
                    const buyDateElem: HTMLInputElement | null
                        = document.getElementById('form-stacked-search-date') as HTMLInputElement;
                    if (buyDateElem !== null) {
                        this.clothesDto.buyDate = buyDateElem.value;
                    }
                },
            },
        );
    }

    private beforeDestroy(): void {
        // TODO: datepickerの破棄
    }

    private search(): void {
        console.log('search event.');
    }

}
</script>
