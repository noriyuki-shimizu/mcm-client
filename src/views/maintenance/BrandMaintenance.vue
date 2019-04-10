<template>
    <div class="brand-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Brand" />

        <brand-search-form />

        <brand-table :brandList="brandList" />
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/title/HeadTitle.vue';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import BrandSearchForm from '@/components/form/search/BrandSearchForm.vue';
import BrandTable from '@/components/table/BrandTable.vue';

import BrandDto from '@/type/dto/BrandDto';

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        BrandSearchForm,
        BrandTable,
    },
})
export default class BrandMaintenance extends Vue {
    private hierarchyList: string[] = [
        'Maintenance',
        'Brand',
    ];

    private brandList: BrandDto[] = [
        {
            id: 1,
            name: 'bukht',
            link: 'http://bukht.com/',
            image: {
                name: 'bukht_icon.jpg',
                path: require('@/images/brand/icon/bukht_icon.jpg'),
                file: null,
            },
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 2,
            name: 'NEON SIGN',
            link: 'http://ne-on-sign.com/',
            image: {
                name: 'neon-sign_icon.jpg',
                path: require('@/images/brand/icon/neon-sign_icon.jpg'),
                file: null,
            },
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 3,
            name: 'MIN',
            link: 'https://www.fashion-press.net/brands/3332',
            image: {
                name: 'min_icon.png',
                path: require('@/images/brand/icon/min_icon.png'),
                file: null,
            },
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 4,
            name: 'AURALEE',
            link: 'https://auralee.jp/',
            image: {
                name: 'auralee_icon.png',
                path: require('@/images/brand/icon/auralee_icon.png'),
                file: null,
            },
            country: '日本',
            deleteFlag: false,
        },
    ];
}
</script>
