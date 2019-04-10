<template>
    <div class="clothes-list-form">
        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid>
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
                        <label class="uk-form-label" for="form-stacked-buy-date">Buy date</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" id="form-stacked-buy-date" placeholder="yyyy/MM/dd">
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
export default class ClothesListForm extends Vue {
}
</script>
