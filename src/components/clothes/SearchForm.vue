<template>
  <div class="clothes-search-form">
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <h3>Search form</h3>
        <form class="uk-grid-small" uk-grid　v-on:submit.prevent="search">
          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-brand"> Brand</label>
            <div class="uk-form-controls">
              <select id="form-stacked-brand" v-model="inputData.brandId" class="uk-select">
                <option
                  v-for="assistBrand in assistBrandList"
                  :key="assistBrand.id"
                  :value="assistBrand.id"
                >
                  {{ assistBrand.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-shop"> Shop</label>
            <div class="uk-form-controls">
              <select id="form-stacked-shop" v-model="inputData.shopId" class="uk-select">
                <option
                  v-for="assistShop in assistShopList"
                  :key="assistShop.id"
                  :value="assistShop.id"
                >
                  {{ assistShop.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="uk-width-1-4@s">
            <label class="uk-form-label" for="form-stacked-price"> Price</label>
            <div class="uk-form-controls">
              <select id="form-stacked-price" class="uk-select">
                <option v-for="assistPrice in assistPriceList" :key="assistPrice.id">
                  {{ assistPrice.value }}
                </option>
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
            <label class="uk-form-label" for="form-stacked-search-date"> Buy date</label>
            <div class="uk-form-controls">
              <input
                id="form-stacked-search-date"
                class="uk-input"
                type="text"
                placeholder="YYYY/MM/DD"
              />
            </div>
          </div>

          <div class="uk-width-1-4@s">
            <label class="uk-form-label" for="form-stacked-delete-flg"> Delete flg</label>
            <div class="uk-form-controls">
              <select id="form-stacked-delete-flg" class="uk-select">
                <option> Deleted</option>
                <option> Not deleted</option>
              </select>
            </div>
          </div>

          <div class="uk-width-1-1">
            <p class="uk-align-right">
              <button class="uk-button uk-custome-button-color-green" type="submit">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import Pikaday from 'pikaday';
import axios from 'axios';
import Base from '@/components/Base';

@Component
export default class ClothesSearchForm extends Base {
  private inputData: any = {
    brandId: null,
    genreId: null,
    shopId: null,
    morePrice: null,
    lessPrice: null,
    buyDate: null,
    deleteFlag: false,
  };

  private assistBrandList: any[] = [];

  private assistShopList: any[] = [];

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

  private async mounted(): Promise<any> {
    this.mountedPikaday();
    // this.assistBrandList = await AssistEnv.getAssistBrandList();
    // this.assistShopList = await AssistEnv.getAssistShopList();
  }

  private mountedPikaday(): void {
    this.picker = new Pikaday({
      field: document.getElementById('form-stacked-search-date'),
      format: 'YYYY/MM/DD',
      onSelect: date => {
        const buyDateElem: HTMLInputElement | null = document.getElementById(
          'form-stacked-search-date',
        ) as HTMLInputElement;
        if (buyDateElem !== null) {
          this.inputData.buyDate = new Date(buyDateElem.value);
        }
      },
    });
  }

  private beforeDestroy(): void {
    // TODO: datepickerの破棄
  }

  private search(): void {
    console.log('search event.');

    console.log(this.inputData);

    // const apiRequest: any = new APIRequest('GET', '/clothesList/search', {
    //     inputDataJson: JSON.stringify(this.inputData),
    // });

    // apiRequest.execute((response: ClothesData[]) => {
    //     console.log(response);

    //     this.$emit('searchResultData', response);
    // });
  }
}
</script>
