<template>
    <div class="brand-maintenance">
        <breadcrumb :hierarchyList="hierarchyList" />

        <head-title title-name="Brand" />

        <brand-search-form v-on:searchResult="reloadBrands" />

        <brand-table v-on:openModal="edit" :brands="tableBrands" />

        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button
                @click="add()"
                class="uk-button uk-button-primary uk-button-large"
            >
                New Brand
            </button>
        </p>

        <div id="brand_edit_modal" class="uk-modal-container" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close />
                <h2 class="uk-modal-title">
                    Brand input
                </h2>

                <edit-modal-form
                    v-on:reload="reloadBrands"
                    :brand="targetBrand"
                    :addFlag="addFlag"
                    :beforeImageName="beforeImageName"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class'
import Component from 'vue-class-component'

import HeadTitle from '@/components/commons/HeadTitle.vue';
import Breadcrumb from '@/components/commons/Breadcrumb.vue';
import BrandSearchForm from '@/components/brands/SearchForm.vue';
import BrandTable from '@/components/brands/Table.vue';
import EditModalForm from '@/components/brands/EditModalForm.vue';
import { Brand, brandNamespace } from '@/store/brands/types';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

const BrandStore = namespace(brandNamespace);

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        BrandSearchForm,
        BrandTable,
        EditModalForm
    }
})
export default class BrandMaintenance extends Vue {
    private hierarchyList: string[] = ['Maintenance', 'Brand'];

    private addFlag: boolean = false;

    private targetBrand: Brand = {
        id: null,
        userId: null,
        name: '',
        link: '',
        image: {
            id: null,
            name: '',
            path: '',
            isDeleted: false,
        },
        country: '',
        isDeleted: false,
    };

    private tableBrands: Brand[] = [];

    private beforeImageName: string | null = null;

    @BrandStore.Getter('getBrands')
    private getBrands!: Brand[];

    @BrandStore.Getter('initializeData')
    private initializeData!: Brand;

    @Emit('reloadBrands')
    private reloadBrands(): void {
        console.log('reloadBrands: ', this.getBrands);
        this.tableBrands = this.getBrands;
    }

    @Emit('edit')
    private edit(id: number): void {
        const brand = this.tableBrands.find(tableBrand => tableBrand.id === id);
        if (!brand) {
            UIkit.notification({ message: 'Select brand is not exists.', status: 'danger' });
            return;
        }
        this.targetBrand = Object.assign({}, brand);
        this.addFlag = false;
        this.beforeImageName = brand.image ? brand.image.name : null;

        this.modalShow();
    }

    private add(): void {
        this.targetBrand = this.initializeData;
        this.addFlag = true;
        this.beforeImageName = null;

        this.modalShow();
    }

    private modalShow(): void {
        UIkit.modal('#brand_edit_modal').show();
    }
}
</script>
