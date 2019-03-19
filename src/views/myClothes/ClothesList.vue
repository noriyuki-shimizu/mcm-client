<template>
    <div class="clothes-list">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <h1 class="uk-heading-divider">
            <div class="uk-margin-large-left">Clothes list</div>
        </h1>
        <div>
            <ul class="uk-child-width-expand" uk-tab>
                <li v-for="(genre, index) in genreList" :key="(genre, index)" :class="{ 'uk-active': isFirst(index) }">
                    <a href="#">{{ genre }}</a>
                </li>
            </ul>
        </div>

        <clothes-list-form />

        <div class="uk-section uk-section-muted">
            <clothes-table :clothesList="clothesList" />
        </div>

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
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import ClothesListForm from '@/components/form/search/ClothesListForm.vue';
import ClothesTable from '@/components/clothes/ClothesTable.vue';

@Component({
    components: {
        Breadcrumb,
        ClothesListForm,
        ClothesTable,
    },
    filters: {
        priceFormat(price: number): string | null {
            if (!price === null) {
                return null;
            }
            return '¥ ' + price.toLocaleString();
        },
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

    private clothesList: any[] = [
        {
            imagePath: require('@/images/noimage.jpg'),
            genre: 'Table Data',
            brand: 'Table Data',
            shop: 'Table Data',
            price: 10000,
            buyDate: '2019/04/12',
            deleteFlg: 'Deleted',
        },
        {
            imagePath: require('@/images/noimage.jpg'),
            genre: 'Table Data',
            brand: 'Table Data',
            shop: 'Table Data',
            price: 20000,
            buyDate: 'Table Data',
            deleteFlg: 'Not deleted',
        },
        {
            imagePath: require('@/images/noimage.jpg'),
            genre: 'Table Data',
            brand: 'Table Data',
            shop: 'Table Data',
            price: 30000,
            buyDate: 'Table Data',
            deleteFlg: 'Table Data',
        },
        {
            imagePath: require('@/images/noimage.jpg'),
            genre: 'Table Data',
            brand: 'Table Data',
            shop: 'Table Data',
            price: 40000,
            buyDate: 'Table Data',
            deleteFlg: 'Table Data',
        },
    ];

    private isFirst(index: number): boolean {
        return index === 0;
    }
}
</script>
