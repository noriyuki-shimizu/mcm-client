<template>
  <div id="shop_edit_modal" class="uk-modal-container" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <button class="uk-modal-close-default" type="button" uk-close />
      <h2 class="uk-modal-title">
        Shop input
      </h2>

      <div class="uk-section uk-section-muted">
        <div class="uk-container">
          <h3>Input form</h3>
          <form v-on:submit.prevent="registration" class="uk-grid-small" uk-grid>
            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-shop-name">Shop name</label>
              <div class="uk-form-controls">
                <input
                  id="form-stacked-shop-name"
                  v-model="shopData.name"
                  type="text"
                >
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-link">Site link</label>
              <div class="uk-form-controls">
                <input id="form-stacked-link" v-model="shopData.link" class="uk-input" type="text">
              </div>
            </div>

            <div class="uk-width-1-4@s">
              <label class="uk-form-label" for="form-stacked-station-name">Station name</label>
              <div class="uk-form-controls">
                <input
                  id="form-stacked-station-name"
                  v-model="shopData.stationName"
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
              <label class="uk-form-label" for="form-stacked-address">Address</label>
              <div class="uk-form-controls">
                <input
                  id="form-stacked-address"
                  v-model="shopData.address"
                  type="text"
                >
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-business-hours">Business hours</label>
              <div class="uk-form-controls">
                <input
                  id="form-stacked-business-hours"
                  v-model="shopData.businessHours"
                  type="text"
                >
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-tel">Tel</label>
              <div class="uk-form-controls">
                <input
                  id="form-stacked-tel"
                  v-model="shopData.tel"
                  type="text"
                >
              </div>
            </div>

            <div class="uk-width-1-1" uk-margin>
              <label class="uk-form-label" for="form-stacked-image-path">Image</label>
              <div class="uk-form-controls">
                <div uk-form-custom="target: true" class="js-upload uk-width-1-1">
                  <input @change="imageChange" type="file" accept="image/*">
                  <input
                    :placeholder="shopData.image.name ? shopData.image.name : 'Select file'"
                    class="uk-input uk-width-1-2@s"
                    type="text"
                    disabled
                    tabindex="-1"
                  >
                  <button class="uk-button uk-button-default uk-custome-button-color-green" type="button" tabindex="-1">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="uk-width-1-4@s">
          <label class="uk-form-label" for="form-stacked-delete-flg">Delete flg</label>
          <div class="uk-form-controls">
            <select id="form-stacked-delete-flg" v-model="shopData.deleteFlag" :disabled="addFlag" class="uk-select">
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
            <button :disabled="hasError()" class="uk-button uk-button-primary uk-button-large" type="submit">
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
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import * as Filebase from 'firebase/app';
import 'firebase/storage';

import Storage from '@/firebase/storage/Storage';
import ImageStorage from '@/firebase/storage/ImageStorage';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component
export default class ShopEditModalForm extends Vue {
  @Prop({ type: Object as CustomProp<any> })
  private shopData!: any;

  @Prop({ type: Boolean })
  private addFlag!: boolean;

  private file?: File;

  private hasError(): boolean {
    return true;
  }

  private imageChange(ev: any): void {
    this.file = ev.target.files[0];

    if (this.file === undefined) {
      this.shopData.image = {
        id: null,
        name: '',
        path: '',
        deleteFlag: false,
      };
      return;
    }

    this.shopData.image.name = this.file.name;
  }

  private registration(): void {
    console.log(this.shopData);

    UIkit.modal.confirm('I will register. Is it OK?').then(
      () => {
        // TODO: 登録処理
        console.log('Confirmed.');

        const storage: Storage = new ImageStorage(this.shopData.image.name, this.file);
        storage.upload(
          function(this: ShopEditModalForm, downloadURL: string) {
            this.shopData.image.path = downloadURL;
            console.log(this.shopData.image.path);
          }.bind(this),
        );
      },
      () => {
        UIkit.modal('#shop_edit_modal').show();
      },
    );
  }
}
</script>
