<template>
    <div class="brand-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <h1 class="uk-heading-divider">
            <div class="uk-margin-large-left">Brand</div>
        </h1>

        <brand-search-form />

        <brand-table :brandList="brandList" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import BrandSearchForm from '@/components/brand/form/search/BrandSearchForm.vue';
import BrandTable from '@/components/brand/table/BrandTable.vue';

type BrandDto = {
    name: string,
    link: string,
    imagePath: string,
    address: string,
    businessHours: string,
    tel: string,
    deleteFlag: boolean,
};

@Component({
    components: {
        Breadcrumb,
        BrandSearchForm,
        BrandTable,
    },
})
export default class BrandMaintenance extends Vue {
    private hierarchyList: string[] = [
        'Master',
        'Maintenance',
        'Brand',
    ];

    private brandList: BrandDto[] = [
        {
            name: 'O代官山 本店',
            link: 'http://store.moc-o.com/',
            imagePath: require('@/images/shop/icon/o_icon.jpg'),
            address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
            businessHours: '12:00 - 20:00 定休日 無し',
            tel: '03-6416-1187',
            deleteFlag: false,
        },
        {
            name: '吾亦紅',
            link: 'https://blog.us-onlinestore.com/brand/garden/shop/garden-waremokou',
            imagePath: require('@/images/shop/icon/waremokou_icon.jpeg'),
            address: '東京都渋谷区神南1-18-2ﾌﾚｰﾑ神南坂1F',
            businessHours: '11：30～21：00',
            tel: '03-6452-5530',
            deleteFlag: false,
        },
    ];
}
</script>