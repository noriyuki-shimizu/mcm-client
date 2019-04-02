<template>
    <div class="brand-search-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-brand-name">Brand name</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-brand-name" class="uk-input" type="text">
                        </div>
                    </div>
                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-address">Address</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-address" class="uk-input" type="text">
                        </div>
                    </div>
                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-station-name">Station name</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-station-name" class="uk-input" type="text">
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
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BrandSearchForm extends Vue {
}
</script>