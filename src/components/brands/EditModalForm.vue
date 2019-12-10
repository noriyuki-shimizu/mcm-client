<template>
    <div id="edit_modal_form" class="uk-section uk-section-muted">
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
                            v-model="brand.name"
                            class="uk-input"
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
                            v-model="brand.link"
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
                            v-model="brand.country"
                            class="uk-input"
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
                                    brand.image && brand.image.name
                                        ? brand.image.name
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

                <div class="uk-width-1-1">
                    <img
                        v-fallback-image
                        :src="brand.image && brand.image.path ? brand.image.path : '@/images/no-img.png'"
                        class="uk-preserve-width"
                        height="200px"
                        width="200px"
                    />
                </div>

                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-delete-flg"
                        >Is Delete</label
                    >
                    <div class="uk-form-controls">
                        <select
                            id="form-stacked-delete-flg"
                            v-model="brand.isDeleted"
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
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class'
import Component from 'vue-class-component'
import * as Filebase from 'firebase/app';
import 'firebase/storage';

import FallbackImage from '@/directives/fallback-image';
import imageStorage from '@/plugins/firebase/storage/ImageStorage';
import { Brand, brandNamespace } from '@/store/brands/types';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

const BrandStore = namespace(brandNamespace);

@Component({
    directives: {
        FallbackImage
    },
})
export default class EditModalForm extends Vue {
    @BrandStore.Action('save')
    private save!: (brand: Brand) => Promise<void>;

    @Prop({ type: Boolean })
    private addFlag!: boolean;

    @Prop({ type: Object as CustomProp<Brand> })
    private brand!: Brand;

    @Prop({ type: String })
    private beforeImageName!: string | null;

    private file?: File;

    private imageChange(ev: any): void {
        ([this.file] = ev.target.files);

        this.brand.image = this.file ? {
            id: null,
            name: this.file.name,
            path: null,
        } : null;
    }

    private hasError(): boolean {
        return false;
    }

    private registration(): void {
        UIkit.modal.confirm('I will register. Is it OK?').then(
            async () => {
                if (this.beforeImageName) {
                    await imageStorage.deleteImage(this.beforeImageName)
                        .catch(error => {
                            UIkit.notification({ message: error, status: 'danger' });
                        });
                }

                this.brand.image = this.file ? {
                    id: null,
                    name: this.file.name,
                    path: await imageStorage.upload(
                        this.file,
                    )
                } : null;

                await this.save(this.brand).catch(error => {
                    UIkit.notification({ message: error, status: 'danger' });
                    return;
                });

                this.$emit('reload');

                UIkit.notification({ message: 'Update Success!', status: 'success' });
            },
            () => {
                UIkit.modal('#brand_edit_modal').show();
            }
        );
    }
}
</script>
