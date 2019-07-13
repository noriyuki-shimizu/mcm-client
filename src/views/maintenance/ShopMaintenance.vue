<template>
  <div class="shop-maintenance">
    <breadcrumb :hierarchyList="hierarchyList" />

    <head-title title-name="Shop" />

    <shop-search-form />

    <shop-table v-on:openModal="edit" :shopList="shopList" />

    <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
      <button @click="add()" class="uk-button uk-button-primary uk-button-large">
        New Shop
      </button>
    </p>

    <shop-edit-modal-form ref="shopEditModalForm" :addFlag="addFlag" :shopDto="shopDto" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/commons/HeadTitle.vue';
import Breadcrumb from '@/components/commons/Breadcrumb.vue';
import ShopSearchForm from '@/components/shops/SearchForm.vue';
import ShopTable from '@/components/shops/Table.vue';
import ShopEditModalForm from '@/components/shops/EditModalForm.vue';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

@Component({
  components: {
    HeadTitle,
    Breadcrumb,
    ShopSearchForm,
    ShopTable,
    ShopEditModalForm,
  },
})
export default class ShopMaintenance extends Vue {
  private hierarchyList: string[] = ['Maintenance', 'Shop'];

  private addFlag: boolean = false;

  private shopDto: any = {
    id: -1,
    name: '',
    link: '',
    stationName: '',
    image: {
      id: null,
      name: '',
      path: '',
      deleteFlag: false,
    },
    address: '',
    businessHours: '',
    tel: '',
    deleteFlag: false,
  };

  private shopList: any[] = [
    {
      id: 1,
      name: 'O代官山 本店',
      link: 'http://store.moc-o.com/',
      stationName: '代官山',
      image: {
        id: null,
        name: 'o_icon.jpg',
        path: require('@/images/shop/icon/o_icon.jpg'),
        deleteFlag: false,
      },
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
      image: {
        id: null,
        name: 'waremokou_icon.jpeg',
        path: require('@/images/shop/icon/waremokou_icon.jpeg'),
        deleteFlag: false,
      },
      address: '東京都渋谷区神南1-18-2ﾌﾚｰﾑ神南坂1F',
      businessHours: '11：30～21：00',
      tel: '03-6452-5530',
      deleteFlag: false,
    },
  ];

  @Emit('edit')
  private edit(shopDto: any): void {
    this.addFlag = false;
    this.shopDto = { ...shopDto };

    this.modalShow();
  }

  private add(): void {
    this.addFlag = true;
    this.shopDto = {
      id: -1,
      name: '',
      link: '',
      stationName: '',
      image: {
        id: null,
        name: '',
        path: '',
        deleteFlag: false,
      },
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    };

    this.modalShow();
  }

  private modalShow(): void {
    // 子コンポーネントのイベント呼び出し
    (this.$refs.shopEditModalForm as any).inputAllCheck();

    UIkit.modal('#shop_edit_modal').show();
  }
}
</script>
