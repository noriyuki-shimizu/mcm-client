<template>
    <div class="clothes-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Clothes" />

        <clothes-search-form v-on:searchResultData="gridReflect" />

        <clothes-table v-on:openModal="edit" :clothesTableDataList="clothesTableDataList" />

        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button class="uk-button uk-button-primary uk-button-large" @click="add()">New Clothes</button>
        </p>

        <clothes-edit-modal-form ref="clothesEditModalForm" :addFlag="addFlag" :clothesData="clothesData" />

    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/common/HeadTitle.vue';
import Breadcrumb from '@/components/common/Breadcrumb.vue';
import ClothesTable from '@/components/clothes/Table.vue';
import ClothesSearchForm from '@/components/clothes/SearchForm.vue';
import ClothesEditModalForm from '@/components/clothes/EditModalForm.vue';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        ClothesTable,
        ClothesSearchForm,
        ClothesEditModalForm,
    },
})
export default class ClothesMaintenance extends Vue {
    private hierarchyList: string[] = [
        'Maintenance',
        'Clothes',
    ];

    private addFlag: boolean = false;

    private initClothesData: any = {
        id: null,
        image: {
            id: null,
            name: '',
            path: '',
            deleteFlag: false,
        },
        genre: {
            id: null,
            name: '',
            deleteFlag: false,
        },
        brand: {
            id: null,
            name: '',
            link: '',
            image: {
                id: null,
                name: '',
                path: '',
                deleteFlag: false,
            },
            country: '',
            deleteFlag: false,
        },
        shop: {
            id: null,
            name: '',
            link: '',
            stationName: '',
            image: {
                id: null,
                name: '',
                path: '',
                deleteFlag: false,
            },
            address: '',
            businessHours: '',
            tel: '',
            deleteFlag: false,
        },
        price: 0,
        buyDate: null,
        deleteFlag: false,
    };

    private clothesData: any = {...this.initClothesData};

    private clothesTableDataList: any[] = [];

    @Emit('edit')
    private edit(clothesData: any): void {
        this.addFlag = false;
        this.clothesData = {...clothesData};

        this.modalShow();
    }

    @Emit('gridReflect')
    private gridReflect(searchResultDataList: any[]): void {
        console.log(searchResultDataList);
        this.clothesTableDataList = searchResultDataList;
    }

    private add(): void {
        this.addFlag = true;
        this.clothesData = {...this.initClothesData};

        this.modalShow();
    }

    private modalShow(): void {
        (this.$refs.clothesEditModalForm as any).inputAllCheck();

        (this.$refs.clothesEditModalForm as any).modalFormShow();
    }
}
</script>
