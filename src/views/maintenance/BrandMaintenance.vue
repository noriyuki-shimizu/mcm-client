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
import BrandSearchForm from '@/components/brand/form/search/BrandSearchForm.vue';
import BrandTable from '@/components/brand/table/BrandTable.vue';

import BrandDto from '@/type/brand/dto/BrandDto';

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
            imagePath: require('@/images/brand/icon/bukht_icon.jpg'),
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 2,
            name: 'NEON SIGN',
            link: 'http://ne-on-sign.com/',
            imagePath: require('@/images/brand/icon/neon-sign_icon.jpg'),
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 3,
            name: 'MIN',
            link: 'https://www.fashion-press.net/brands/3332',
            imagePath: require('@/images/brand/icon/min_icon.png'),
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 4,
            name: 'AURALEE',
            link: 'https://auralee.jp/',
            imagePath: require('@/images/brand/icon/auralee_icon.png'),
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 5,
            name: '69',
            link: 'https://sixty-nine.us/',
            imagePath: require('@/images/brand/icon/69_icon.jpg'),
            country: 'ロサンゼルス',
            deleteFlag: false,
        },
        {
            id: 6,
            name: 'hender-scheme',
            link: 'http://henderscheme.com/',
            imagePath: require('@/images/brand/icon/hender-scheme_icon.jpg'),
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 7,
            name: 'yohjiyamamoto',
            link: 'http://www.yohjiyamamoto.co.jp/',
            imagePath: require('@/images/brand/icon/yohjiyamamoto_icon.png'),
            country: '日本',
            deleteFlag: false,
        },
    ];
}
</script>
