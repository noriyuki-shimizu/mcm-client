<template>
    <div class="clothes-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Clothes" />

        <clothes-search-form />

        <clothes-table v-on:openModal="edit" :clothesList="clothesList" />

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

    private clothesList: ClothesDto[] = [
        {
            id: 1,
            image: {
                name: '',
                path: '',
                file: null,
                deleteFlag: false,
            },
            genre: 'Table Data',
            brand: {
                id: 1,
                name: 'bukht',
                link: 'http://bukht.com/',
                image: {
                    name: 'bukht_icon.jpg',
                    path: require('@/images/brand/icon/bukht_icon.jpg'),
                    file: null,
                    deleteFlag: false,
                },
                country: '日本',
                deleteFlag: false,
            },
            shop: {
                id: 1,
                name: 'O代官山 本店',
                link: 'http://store.moc-o.com/',
                stationName: '代官山',
                image: {
                    name: 'o_icon.jpg',
                    path: require('@/images/shop/icon/o_icon.jpg'),
                    file: null,
                    deleteFlag: false,
                },
                address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
                businessHours: '12:00 - 20:00 定休日 無し',
                tel: '03-6416-1187',
                deleteFlag: false,
            },
            price: 10000,
            buyDate: '2019/04/12',
            deleteFlag: false,
        },
    ];

    @Emit('edit')
    private edit(clothesDto: ClothesDto): void {
        this.addFlag = false;
        this.clothesDto = {...clothesDto};

        this.modalShow();
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
