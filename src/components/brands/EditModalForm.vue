<template>
    <div id="brand_edit_modal" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close />
            <h2 class="uk-modal-title">
                Brand input
            </h2>

            <div class="uk-section uk-section-muted">
                <div class="uk-container">
                    <h3>Input form</h3>
                    <form
                        v-on:submit.prevent="registration"
                        class="uk-grid-small"
                        uk-grid
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

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-link"
                                >Site link</label
                            >
                            <div class="uk-form-controls">
                                <input
                                    id="form-stacked-link"
                                    v-model="brandData.link"
                                    class="uk-input"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label
                                class="uk-form-label"
                                for="form-stacked-country"
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

                        <div class="uk-width-1-1" uk-margin>
                            <label
                                class="uk-form-label"
                                for="form-stacked-image-path"
                                >Image</label
                            >
                            <div class="uk-form-controls">
                                <div
                                    uk-form-custom="target: true"
                                    class="js-upload uk-width-1-1"
                                >
                                    <input
                                        @change="imageChange"
                                        type="file"
                                        accept="image/*"
                                    />
                                    <input
                                        :placeholder="
                                            brandData.image.name
                                                ? brandData.image.name
                                                : 'Select file'
                                        "
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
                    </form>
                </div>

                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-delete-flg"
                        >Delete flg</label
                    >
                    <div class="uk-form-controls">
                        <select
                            id="form-stacked-delete-flg"
                            v-model="brandData.deleteFlag"
                            :disabled="addFlag"
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
                            :disabled="hasError()"
                            class="uk-button uk-button-primary uk-button-large"
                            type="submit"
                        >
                            Entry
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as Filebase from 'firebase/app';
import 'firebase/storage';

import Storage from '@/plugins/firebase/storage/Storage';
import ImageStorage from '@/plugins/firebase/storage/ImageStorage';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;
type CallbackType = () => void;

@Component
export default class EditModalForm extends Vue {
    @Prop({ type: Object as CustomProp<any> })
    private brandData!: any;

    @Prop({ type: Boolean })
    private addFlag!: boolean;

    private file?: File;

    private imageChange(ev: any): void {
        this.file = ev.target.files[0];

        if (this.file === undefined) {
            this.brandData.image = {
                id: null,
                name: '',
                path: '',
                deleteFlag: false
            };
            return;
        }

        this.brandData.image.name = this.file.name;
    }

    private hasError(): boolean {
        return true;
    }

    private registration(): void {
        console.log(this.brandData);

        UIkit.modal.confirm('I will register. Is it OK?').then(
            () => {
                // TODO: 登録処理
                console.log('Confirmed.');

                const storage: Storage = new ImageStorage(
                    this.brandData.image.name,
                    this.file
                );
                storage.upload(
                    function(this: any, downloadURL: string) {
                        this.image.path = downloadURL;
                        console.log(this.image.path);
                    }.bind(this.brandData)
                );
            },
            () => {
                UIkit.modal('#brand_edit_modal').show();
            }
        );
    }
}
</script>
