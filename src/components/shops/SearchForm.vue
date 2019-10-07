<template>
    <div class="shop-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form
                    v-on:submit.prevent="search"
                    class="uk-grid-small"
                    uk-grid
                >
                    <div class="uk-width-1-2@s">
                        <label
                            class="uk-form-label"
                            for="form-stacked-shop-name"
                            >Shop name</label
                        >
                        <div class="uk-form-controls">
                            <input
                                id="form-stacked-shop-name"
                                v-model="shopDto.name"
                                type="text"
                            >
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label
                            class="uk-form-label"
                            for="form-stacked-station-name"
                            >Station name</label
                        >
                        <div class="uk-form-controls">
                            <input
                                id="form-stacked-station-name"
                                v-model="shopDto.stationName"
                                type="text"
                                autocomplete="on"
                                list="auto_station"
                            >
                            <datalist id="auto_station">
                                <option value="渋谷" />
                                <option value="代官山" />
                                <option value="恵比寿" />
                            </datalist>
                        </div>
                    </div>

                    <div class="uk-width-1-1">
                        <label class="uk-form-label" for="form-stacked-address"
                            >Address</label
                        >
                        <div class="uk-form-controls">
                            <input
                                id="form-stacked-address"
                                v-model="shopDto.address"
                                type="text"
                            >
                        </div>
                    </div>

                    <div class="uk-width-1-4@s">
                        <label
                            class="uk-form-label"
                            for="form-stacked-delete-flg"
                            >Delete flg</label
                        >
                        <div class="uk-form-controls">
                            <select
                                id="form-stacked-delete-flg"
                                v-model="shopDto.deleteFlag"
                                class="uk-select"
                            >
                                <option value="true">
                                    Deleted
                                </option>
                                <option value="false">
                                    Not deleted
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-1">
                        <p class="uk-align-right">
                            <button
                                class="uk-button uk-custome-button-color-green"
                                type="submit"
                            >
                                Search
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class ShopSearchForm extends Vue {
    private shopDto: any = {
        id: -1,
        name: '',
        link: '',
        stationName: '',
        image: {
            id: null,
            name: '',
            path: '',
            deleteFlag: false
        },
        address: '',
        businessHours: '',
        tel: '',
        deleteFlag: false
    };

    private search(): void {
        console.log('search event!');
        // TODO: 検索処理
    }
}
</script>
