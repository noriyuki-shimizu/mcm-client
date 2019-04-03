<template>
    <div class="shop-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Shop" />

        <shop-search-form />

        <shop-table :shopList="shopList" />
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/title/HeadTitle.vue';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import ShopSearchForm from '@/components/shop/form/search/ShopSearchForm.vue';
import ShopTable from '@/components/shop/table/ShopTable.vue';

import ShopDto from '@/type/shop/dto/ShopDto';

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        ShopSearchForm,
        ShopTable,
    },
})
export default class ShopMaintenance extends Vue {
    private hierarchyList: string[] = [
        'Master',
        'Maintenance',
        'Shop',
    ];

    private shopList: ShopDto[] = [
        {
            id: 1,
            name: 'O代官山 本店',
            link: 'http://store.moc-o.com/',
            stationName: '代官山',
            imagePath: require('@/images/shop/icon/o_icon.jpg'),
            address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
            businessHours: '12:00 - 20:00 定休日 無し',
            tel: '03-6416-1187',
            deleteFlag: false,
        },
        {
            id: 2,
            name: '吾亦紅',
            link: 'https://blog.us-onlinestore.com/brand/garden/shop/garden-waremokou',
            stationName: '渋谷',
            imagePath: require('@/images/shop/icon/waremokou_icon.jpeg'),
            address: '東京都渋谷区神南1-18-2ﾌﾚｰﾑ神南坂1F',
            businessHours: '11：30～21：00',
            tel: '03-6452-5530',
            deleteFlag: false,
        },
    ];
}
</script>
