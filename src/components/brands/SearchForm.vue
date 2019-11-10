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
                                class="uk-input"
                                v-model="name"
                                type="text"
                                placeholder="Brand name here..."
                            />
                        </div>
                    </div>

                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-country"
                            >Country</label
                        >
                        <div class="uk-form-controls">
                            <input
                                id="form-stacked-country"
                                class="uk-input"
                                v-model="country"
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
                                v-model="isDeleted"
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
import store from '@/store';
import { Brand } from '@/store/brands/types';
import Base from '@/components/Base';

@Component
export default class BrandSearchForm extends Base {
    private name: string = '';

    private country: string = '';

    private isDeleted: boolean = false;

    private search(): void {
        store.dispatch(`${this.config.vuex.namespace.brands}/search`, {
            params: {
                name: this.name,
                country: this.country,
                isDeleted: this.isDeleted
            }
        });
    }
}
</script>
