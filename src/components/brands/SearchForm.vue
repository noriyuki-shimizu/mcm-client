<template>
    <div class="brand-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form
                    class="uk-grid-small"
                    uk-grid　v-on:submit.prevent="search"
                >
                    <div class="uk-width-1-2@s">
                        <label
                            class="uk-form-label"
                            for="form-stacked-brand-name"
                            >Brand name</label
                        >
                        <div class="uk-form-controls">
                            <input
                                id="form-stacked-brand-name"
                                v-model="brandData.name"
                                type="text"
                            />
                        </div>
                    </div>

                    <div class="uk-width-1-1">
                        <label class="uk-form-label" for="form-stacked-country"
                            >Country</label
                        >
                        <div class="uk-form-controls">
                            <input
                                id="form-stacked-country"
                                v-model="brandData.country"
                                type="text"
                            />
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
                                v-model="brandData.deleteFlag"
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
export default class BrandSearchForm extends Vue {
    private brandData: any = {
        id: -1,
        name: '',
        link: '',
        image: {
            id: null,
            name: '',
            path: '',
            deleteFlag: false
        },
        country: '',
        deleteFlag: false
    };

    private brandValidators: any = {
        name: {
            validate: false,
            errorMessage: ''
        },
        country: {
            validate: false,
            errorMessage: ''
        }
    };

    private search(): void {
        console.log('search event!');
        // TODO: 検索処理
    }
}
</script>
