<template>
    <div id="clothes-edit-modal-form" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="uk-modal-title">Clothes input</h2>
            
            <div class="uk-section uk-section-muted">
                <div class="uk-container">
                    <h3>Input form</h3>
                    <form class="uk-grid-small" uk-grid v-on:submit.prevent="registration">

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-genre">Genre</label>
                            <div class="uk-form-controls">
                                <select class="uk-select" id="form-stacked-genre">
                                    <option>Option 01</option>
                                    <option>Option 02</option>
                                </select>
                            </div>
                        </div>

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

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-price">Price</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-price"
                                :class="{'uk-input': true, 'uk-form-danger': clothesValidators.price.validate}"
                                type="text"
                                v-model="clothesDto.price"
                                >
                                <span v-show="clothesValidators.price.validate" class="uk-text-danger">{{ clothesValidators.price.errorMessage }}</span>
                            </div>
                        </div>

                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label" for="form-stacked-edit-date">Buy date</label>
                            <div class="uk-form-controls">
                                <input id="form-stacked-edit-date"
                                class="uk-input"
                                type="text"
                                placeholder="YYYY/MM/DD"
                                v-model="clothesDto.buyDate"
                                >
                            </div>
                        </div>

                        <div class="uk-width-1-1" uk-margin>
                            <label class="uk-form-label" for="form-stacked-image-path">Image</label>
                            <div class="uk-form-controls">
                                <div uk-form-custom="target: true" class="js-upload uk-width-1-1">
                                    <input type="file" accept="image/*" @change="imageChange">
                                    <input class="uk-input uk-width-1-2@s"
                                    type="text"
                                    :placeholder="clothesDto.image.name ? clothesDto.image.name : 'Select file'"
                                    disabled
                                    tabindex="-1"
                                    >
                                    <button class="uk-button uk-button-default uk-custome-button-color-green" type="button" tabindex="-1">Select</button>
                                </div>
                            </div>
                        </div>

                        <div class="uk-width-1-4@s">
                            <label class="uk-form-label" for="form-stacked-delete-flag">Delete flag</label>
                            <div class="uk-form-controls">
                                <select class="uk-select" id="form-stacked-delete-flag" v-model="clothesDto.deleteFlag" :disabled="addFlag">
                                    <option value="true">Deleted</option>
                                    <option value="false">Not deleted</option>
                                </select>
                            </div>
                        </div>

                        <div class="uk-width-1-1">
                            <p class="uk-align-right">
                                <button class="uk-button uk-button-primary uk-button-large" :disabled="validateCheck.hasError(clothesValidators)" type="submit">Entry</button>
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

import ClothesDto from '@/type/dto/ClothesDto';
import ValidateCheck from '@/type/validator/ValidateCheck';
import ClothesValidators from '@/type/validator/clothes/ClothesValidators';
import MaxChars from '@/type/validator/clothes/MaxChars';
import Storage from '@/type/firebase/Storage';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component
export default class ClothesEditModalForm extends Vue {
    @Prop({type: Object as CustomProp<ClothesDto>})
    private clothesDto!: ClothesDto;

    @Prop({type: Boolean})
    private addFlag!: boolean;

    private validateCheck: ValidateCheck | null = new ValidateCheck();

    private clothesValidators: ClothesValidators = {
        price: {
            validate: false,
            errorMessage: '',
        },
    };

    private picker?: Pikaday;

    private mounted(): void {
        this.picker = new Pikaday(
            {
                field: document.getElementById('form-stacked-edit-date'),
                format: 'YYYY/MM/DD',
                onSelect: (date) => {
                    const buyDateElem: HTMLInputElement | null
                        = document.getElementById('form-stacked-edit-date') as HTMLInputElement;
                    if (buyDateElem !== null) {
                        this.clothesDto.buyDate = buyDateElem.value;
                    }
                },
            },
        );
    }

    private beforeDestroy(): void {
        this.validateCheck = null;
        // TODO: datepickerの破棄
    }

    private inputAllCheck(): void {
        console.log('input check all');
    }

    @Watch('clothesDto.price')
    private onPriceChange(newPrice: string, oldPrice: string): void {
        if (this.validateCheck !== null) {
            this.clothesValidators.price = this.validateCheck.required(newPrice);

            if (this.clothesValidators.price.validate) {
                return ;
            }

            this.clothesValidators.price = this.validateCheck.numberGreaterThanZero(newPrice);

            if (this.clothesValidators.price.validate) {
                return ;
            }

            this.clothesValidators.price = this.validateCheck.lessEqualNumber(Number(newPrice), MaxChars.PRICE);
        }
    }

    private imageChange(ev: any): void {
        const file: File = ev.target.files[0];

        if (file === undefined) {
            this.clothesDto.image = {
                name: '',
                path: '',
                file: null,
            };
            return ;
        }

        this.clothesDto.image.name = file.name;
        this.clothesDto.image.file = file;
    }

    private registration(): void {
        console.log(this.clothesDto);

        UIkit.modal.confirm('I will register. Is it OK?').then(() => {
            // TODO: 登録処理
            console.log('Confirmed.');

            const storage: Storage = new Storage(this.clothesDto.image);
            storage.imageUpload(function(this: ClothesEditModalForm, downloadURL: string) {
                this.clothesDto.image.path = downloadURL;
                console.log(this.clothesDto.image.path);
            }.bind(this));
        }, () => {
            UIkit.modal('#brand_edit_modal').show();
        });
    }
}
</script>
