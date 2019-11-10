<template>
    <div class="brand-maintenance">
        <breadcrumb :hierarchyList="hierarchyList" />

        <head-title title-name="Brand" />

        <brand-search-form />

        <brand-table v-on:openModal="edit" :brands="getBrands" />

        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button
                @click="add()"
                class="uk-button uk-button-primary uk-button-large"
            >
                New Brand
            </button>
        </p>

        <brand-edit-modal-form
            ref="brandEditModalForm"
            :addFlag="addFlag"
        />
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/commons/HeadTitle.vue';
import Breadcrumb from '@/components/commons/Breadcrumb.vue';
import BrandSearchForm from '@/components/brands/SearchForm.vue';
import BrandTable from '@/components/brands/Table.vue';
import BrandEditModalForm from '@/components/brands/EditModalForm.vue';

import Base from '@/components/Base';
import store from '@/store';
import { Brand } from '@/store/brands/types';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        BrandSearchForm,
        BrandTable,
        BrandEditModalForm
    }
})
export default class BrandMaintenance extends Base {
    private hierarchyList: string[] = ['Maintenance', 'Brand'];

    private addFlag: boolean = false;

    private brands: Brand[] = store.getters['brands/get'];

    @Emit('edit')
    private edit(brand: Brand): void {
        this.addFlag = false;

        this.modalShow();
    }

    public get getBrands(): Brand[]{
        return store.getters['brands/get'];
    }

    private add(): void {
        this.addFlag = true;

        this.modalShow();
    }

    private modalShow(): void {
        (this.$refs.brandEditModalForm as any).inputAllCheck();

        UIkit.modal('#brand_edit_modal').show();
    }
}
</script>
