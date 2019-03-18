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
            <table class="uk-table uk-table-small uk-table-middle uk-table-divider uk-overflow-auto">
                <caption>Clothes list</caption>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>genre</th>
                        <th>brand</th>
                        <th>shop</th>
                        <th>price</th>
                        <th>buy date</th>
                        <th>delete flg</th>
                    </tr>
                </thead>
                <tbody v-for="clothes in clothesList" :key="clothes">
                    <tr>
                        <td><img :src="clothes.imagePath" width="100px" height="100px"></td>
                        <td>{{ clothes.genre }}</td>
                        <td>{{ clothes.brand }}</td>
                        <td>{{ clothes.shop }}</td>
                        <td>{{ clothes.price | priceFormat }}</td>
                        <td>{{ clothes.buyDate }}</td>
                        <td>{{ clothes.deleteFlg }}</td>
                    </tr>
                </tbody>
            </table>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import ClothesListForm from '@/components/form/search/ClothesListForm.vue';

@Component({
    components: {
        Breadcrumb,
        ClothesListForm,
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
