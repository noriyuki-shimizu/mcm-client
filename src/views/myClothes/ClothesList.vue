<template>
    <div class="clothes-list">
        <breadcrumb :hierarchyList="hierarchyList" />

        <head-title title-name="Clothes List" />

        <genre-tab :genreList="genreList" />

        <clothes-search-form v-on:searchResultData="gridReflect" />

        <div class="uk-section uk-section-default">
            <clothes-table :clothesTableDataList="clothesList" />
        </div>

        <!-- TODO: ページングの仕様が決定したら、コンポーネントに分けること -->
        <ul class="uk-pagination uk-flex-center" uk-margin>
            <li>
                <a href="#"><span uk-pagination-previous/></a>
            </li>
            <li><a href="#">1</a></li>
            <li class="uk-disabled">
                <span>...</span>
            </li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li class="uk-active">
                <span>7</span>
            </li>
            <li><a href="#">8</a></li>
            <li>
                <a href="#"><span uk-pagination-next/></a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/commons/HeadTitle.vue';
import Breadcrumb from '@/components/commons/Breadcrumb.vue';
import GenreTab from '@/components/genres/Tab.vue';
import ClothesSearchForm from '@/components/clothes/SearchForm.vue';
import ClothesTable from '@/components/clothes/Table.vue';

import fallbackImage from '../../directives/fallback-image';

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        GenreTab,
        ClothesSearchForm,
        ClothesTable
    }
})
export default class ClothesList extends Vue {
    private hierarchyList: string[] = ['My Clothes', 'Clothes list'];

    private genreList: string[] = [
        'Tops',
        'Tee',
        'Outer',
        'Bottoms',
        'Hat',
        'Bag',
        'Accessories',
        'Shoes & Boots',
        'All Items'
    ];

    private clothesList: any[] = [];

    @Emit('gridReflect')
    private gridReflect(searchResultDataList: any[]): void {
        console.log(searchResultDataList);
        this.clothesList = searchResultDataList;
    }
}
</script>
