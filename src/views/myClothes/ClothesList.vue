<template>
    <div class="clothes-list">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Clothes List" />
        
        <genre-tab :genreList="genreList" />

        <clothes-list-form />

        <div class="uk-section uk-section-default">
            <clothes-table :clothesList="clothesList" />
        </div>

        <!-- TODO: ページングの仕様が決定したら、コンポーネントに分けること -->
        <ul class="uk-pagination uk-flex-center" uk-margin>
            <li><a href="#"><span uk-pagination-previous></span></a></li>
            <li><a href="#">1</a></li>
            <li class="uk-disabled"><span>...</span></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li class="uk-active"><span>7</span></li>
            <li><a href="#">8</a></li>
            <li><a href="#"><span uk-pagination-next></span></a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/title/HeadTitle.vue';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import GenreTab from '@/components/genre/GenreTab.vue';
import ClothesListForm from '@/components/clothes/form/search/ClothesListForm.vue';
import ClothesTable from '@/components/clothes/table/ClothesTable.vue';

import ClothesDto from '@/type/clothes/dto/ClothesDto';

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        GenreTab,
        ClothesListForm,
        ClothesTable,
    },
})
export default class ClothesList extends Vue {
    private hierarchyList: string[] = [
        'My Clothes',
        'Clothes list',
    ];

    private genreList: string[] = [
        'Tops',
        'Tee',
        'Outer',
        'Bottoms',
        'Hat',
        'Bag',
        'Accessories',
        'Shoes & Boots',
        'All Items',
    ];

    private clothesList: ClothesDto[] = [
        {
            id: 1,
            image: {
                name: '',
                path: '',
            },
            genre: 'Table Data',
            brand: {
                id: 1,
                name: 'bukht',
                link: 'http://bukht.com/',
                image: {
                    name: 'bukht_icon.jpg',
                    path: require('@/images/brand/icon/bukht_icon.jpg'),
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
        {
            id: 2,
            image: {
                name: '',
                path: '',
            },
            genre: 'Table Data',
            brand: {
                id: 1,
                name: 'bukht',
                link: 'http://bukht.com/',
                image: {
                    name: 'bukht_icon.jpg',
                    path: require('@/images/brand/icon/bukht_icon.jpg'),
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
                },
                address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
                businessHours: '12:00 - 20:00 定休日 無し',
                tel: '03-6416-1187',
                deleteFlag: false,
            },
            price: 20000,
            buyDate: 'Table Data',
            deleteFlag: false,
        },
        {
            id: 3,
            image: {
                name: '',
                path: '',
            },
            genre: 'Table Data',
            brand: {
                id: 1,
                name: 'bukht',
                link: 'http://bukht.com/',
                image: {
                    name: 'bukht_icon.jpg',
                    path: require('@/images/brand/icon/bukht_icon.jpg'),
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
                },
                address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
                businessHours: '12:00 - 20:00 定休日 無し',
                tel: '03-6416-1187',
                deleteFlag: false,
            },
            price: 30000,
            buyDate: 'Table Data',
            deleteFlag: false,
        },
    ];
}
</script>
