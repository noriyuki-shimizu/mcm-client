<template>
    <div class="brand-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid　v-on:submit.prevent="search">

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
                            <select class="uk-select" id="form-stacked-delete-flg" v-model="brandDto.deleteFlag">
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

import BrandDto from '@/type/brand/dto/BrandDto';
import ValidateCheck from '@/type/validator/ValidateCheck';
import BrandValidators from '@/type/brand/validator/BrandValidators';
import MaxCharts from '@/type/brand/validator/MaxChars';

@Component
export default class BrandSearchForm extends Vue {

    private brandDto: BrandDto = {
        id: -1,
        name: '',
        link: '',
        image: {
            name: '',
            path: '',
            file: null,
        },
        country: '',
        deleteFlag: false,
    };

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

    @Watch('brandDto.name')
    private onBrandNameChange(newBrandName: string, oldBrandName: string): void {
        this.brandValidators.name = this.validateCheck.lessEqual(newBrandName, MaxCharts.NAME);
    }

    @Watch('brandDto.country')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        this.brandValidators.stationName = this.validateCheck.lessEqual(newStationName, MaxCharts.COUNTRY);
    }

    private search(): void {
        console.log('search event!');
        // TODO: 検索処理
    }
}
</script>