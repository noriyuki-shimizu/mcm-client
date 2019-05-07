<template>
    <div class="clothes-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Clothes" />

        <clothes-search-form v-on:searchResultData="gridReflect" />

        <clothes-table v-on:openModal="edit" :clothesTableDataList="clothesTableDataList" />

        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button class="uk-button uk-button-primary uk-button-large" @click="add()">New Clothes</button>
        </p>

        <clothes-edit-modal-form ref="clothesEditModalForm" :addFlag="addFlag" :clothesDto="clothesDto" />

    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/title/HeadTitle.vue';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import ClothesTable from '@/components/table/ClothesTable.vue';
import ClothesSearchForm from '@/components/form/search/ClothesSearchForm.vue';
import ClothesEditModalForm from '@/components/form/edit/ClothesEditModalForm.vue';

import ClothesDto from '@/type/domain/dto/ClothesDto';
import ClothesTableData from '@/type/domain/dto/myClothes/ClothesTableData';

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

    private clothesDto: ClothesDto = {
        id: -1,
        image: {
            name: '',
            path: '',
            file: null,
            deleteFlag: false,
        },
        genre: '',
        brand: null,
        shop: null,
        price: 0,
        buyDate: '',
        deleteFlag: false,
    };

    private clothesTableDataList: ClothesTableData[] = [
        {
            id: 1,
            imagePath: require('@/images/brand/icon/bukht_icon.jpg'),
            genreName: 'Table Data',
            brandName: 'bukht',
            shopName: 'O代官山 本店',
            price: 10000,
            buyDate: new Date('2019-04-12'),
            deleteFlag: false,
        },
    ];

    @Emit('edit')
    private edit(clothesDto: ClothesDto): void {
        this.addFlag = false;
        this.clothesDto = {...clothesDto};

        this.modalShow();
    }

    @Emit('gridReflect')
    private gridReflect(searchResultDataList: ClothesTableData[]): void {
        console.log(searchResultDataList);
    }

    private add(): void {
        this.addFlag = true;
        this.clothesDto = {
            id: -1,
            image: {
                name: '',
                path: '',
                file: null,
                deleteFlag: false,
            },
            genre: '',
            brand: null,
            shop: null,
            price: 0,
            buyDate: '',
            deleteFlag: false,
        };

        this.modalShow();
    }

    private modalShow(): void {
        (this.$refs.clothesEditModalForm as any).inputAllCheck();

        UIkit.modal('#clothes-edit-modal-form').show();
    }
}
</script>
