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
                            <button class="uk-button uk-button-primary" type="submit">Search</button>
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
import ValidateCheck from '@/type/brand/validator/ValidateCheck';
import BrandValidators from '@/type/brand/validator/BrandValidators';

@Component
export default class BrandSearchForm extends Vue {

    private brandDto: BrandDto = {
        id: -1,
        name: '',
        link: '',
        stationName: '',
        imagePath: '',
        address: '',
        businessHours: '',
        tel: '',
        deleteFlag: false,
    };

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

    @Watch('brandDto.name')
    private onBrandNameChange(newBrandName: string, oldBrandName: string): void {
        this.brandValidators.name = this.validateCheck.lessEqual(newBrandName, 30);
    }

    @Watch('brandDto.stationName')
    private onStationNameChange(newStationName: string, oldStationName: string): void {
        this.brandValidators.stationName = this.validateCheck.lessEqual(newStationName, 15);
    }

    @Watch('brandDto.address')
    private onAddressChange(newAddress: string, oldAddress: string): void {
        this.brandValidators.address = this.validateCheck.lessEqual(newAddress, 100);
    }

    private search(): void {
        console.log('search event!');
        // TODO: 検索処理
    }
}
</script>