<template>
    <div class="home-shop">
        <div class="uk-margin-large-left">
            <h3>Shop info</h3>
        </div>
        <div class="uk-margin-small-top uk-margin-medium-left uk-margin-medium-right">
            <div v-bind:key="shop.id" v-for="shop in shopList">
                <article class="uk-comment">
                    <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <img class="uk-comment-avatar" :src="shop.imagePath" width="250" height="250" alt="">
                        </div>
                        <div class="uk-width-expand">
                            <a class="uk-link-heading" :href="shop.link" target="_blank">
                                <h4 class="uk-comment-title uk-margin-remove">{{shop.name}}</h4>
                            </a>
                            <p><span class="uk-label">address</span>：{{shop.address}}</p>
                            <p><span class="uk-label">business hours</span>：{{shop.businessHours}}</p>
                            <p><span class="uk-label">phone number</span>：{{shop.tel}}</p>
                        </div>
                    </header>
                </article>
            </div>
         </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ShopDto from '@/type/ShopDto';

@Component
export default class HomeShop extends Vue {
    private shopList: ShopDto[] = [
        {
            id: 1,
            name: 'O代官山 本店',
            link: 'http://store.moc-o.com/',
            imagePath: require('@/images/shop/icon/o_icon.jpg'),
            address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
            businessHours: '12:00 - 20:00 定休日 無し',
            tel: '03-6416-1187',
        },
        {
            id: 2,
            name: '吾亦紅',
            link: 'https://blog.us-onlinestore.com/brand/garden/shop/garden-waremokou',
            imagePath: require('@/images/shop/icon/waremokou_icon.jpeg'),
            address: '東京都渋谷区神南1-18-2ﾌﾚｰﾑ神南坂1F',
            businessHours: '11：30～21：00',
            tel: '03-6452-5530',
        },
    ];
}
</script>
