<template>
  <div id="clothes-edit-modal-form" class="uk-modal-container" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <button class="uk-modal-close-default" type="button" uk-close />
      <h2 class="uk-modal-title">
        Clothes input
      </h2>

      <div class="uk-section uk-section-muted">
        <div class="uk-container">
          <h3>Input form</h3>
          <form v-on:submit.prevent="registration" class="uk-grid-small" uk-grid>
            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-genre">Genre</label>
              <div class="uk-form-controls">
                <select id="form-stacked-genre" v-model="clothesData.genre.id" class="uk-select">
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-brand"> Brand</label>
              <div class="uk-form-controls">
                <select id="form-stacked-brand" v-model="clothesData.brandId" class="uk-select">
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
                <select id="form-stacked-shop" v-model="clothesData.shopId" class="uk-select">
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

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-price">Price</label>
              <div class="uk-form-controls">
                <input id="form-stacked-price" v-model="clothesData.price" type="text">
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-edit-date">Buy date</label>
              <div class="uk-form-controls">
                <input
                  id="form-stacked-edit-date"
                  class="uk-input"
                  type="text"
                  placeholder="YYYY/MM/DD"
                />
              </div>
            </div>

            <div class="uk-width-1-1" uk-margin>
              <label class="uk-form-label" for="form-stacked-image-path">Image</label>
              <div class="uk-form-controls">
                <div uk-form-custom="target: true" class="js-upload uk-width-1-1">
                  <input @change="imageChange" type="file" accept="image/*">
                  <input
                    :placeholder="clothesData.image.name ? clothesData.image.name : 'Select file'"
                    class="uk-input uk-width-1-2@s"
                    type="text"
                    disabled
                    tabindex="-1"
                  />
                  <button
                    class="uk-button uk-button-default uk-custome-button-color-green"
                    type="button"
                    tabindex="-1"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>

            <div class="uk-width-1-4@s">
              <label class="uk-form-label" for="form-stacked-delete-flag">Delete flag</label>
              <div class="uk-form-controls">
                <select
                  id="form-stacked-delete-flag"
                  v-model="clothesData.deleteFlag"
                  :disabled="addFlag"
                  class="uk-select"
                >
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
                  :disabled="hasError()"
                  class="uk-button uk-button-primary uk-button-large"
                  type="submit"
                >
                  Entry
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Pikaday from 'pikaday';

import Storage from '@/firebase/storage/Storage';
import ImageStorage from '@/firebase/storage/ImageStorage';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component
export default class ClothesEditModalForm extends Vue {
  @Prop({ type: Object as CustomProp<any> })
  private clothesData!: any;

  @Prop({ type: Boolean })
  private addFlag!: boolean;

  private file?: File;

  private picker?: Pikaday;

  private assistBrandList: any[] = [];

  private assistShopList: any[] = [];

  public modalFormShow(): void {
    UIkit.modal('#clothes-edit-modal-form').show();
  }

  private hasError(): boolean {
    return true;
  }

  private async mounted(): Promise<any> {
    this.picker = new Pikaday({
      field: document.getElementById('form-stacked-edit-date'),
      format: 'YYYY/MM/DD',
      onSelect: date => {
        const buyDateElem: HTMLInputElement | null = document.getElementById(
          'form-stacked-edit-date',
        ) as HTMLInputElement;
        if (buyDateElem !== null) {
          this.clothesData.buyDate = new Date(buyDateElem.value);
        }
      },
    });

    // this.assistBrandList = await AssistEnv.getAssistBrandList();
    // this.assistShopList = await AssistEnv.getAssistShopList();
  }

  private imageChange(ev: any): void {
    this.file = ev.target.files[0];

    if (this.file === undefined) {
      this.clothesData.image = {
        id: null,
        name: '',
        path: '',
        deleteFlag: false,
      };

      return;
    }

    this.clothesData.image.name = this.file.name;
  }

  private registration(): void {
    console.log(this.clothesData);

    UIkit.modal.confirm('I will register. Is it OK?').then(
      () => {
        // TODO: 登録処理
        console.log('Confirmed.');

        const storage: Storage = new ImageStorage(this.clothesData.image.name, this.file);
        storage.upload(
          function(this: ClothesEditModalForm, downloadURL: string) {
            this.clothesData.image.path = downloadURL;
            console.log(this.clothesData.image.path);
          }.bind(this),
        );
      },
      () => {
        this.modalFormShow();
      },
    );
  }
}
</script>
