<template>
  <div class="brand-maintenance">
    <breadcrumb :hierarchyList="hierarchyList" />

    <head-title title-name="Brand" />

    <brand-search-form />

    <brand-table v-on:openModal="edit" :brandList="brandList" />

    <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
      <button @click="add()" class="uk-button uk-button-primary uk-button-large">
        New Brand
      </button>
    </p>

    <brand-edit-modal-form ref="brandEditModalForm" :addFlag="addFlag" :brandData="brandData" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/commons/HeadTitle.vue';
import Breadcrumb from '@/components/commons/Breadcrumb.vue';
import BrandSearchForm from '@/components/brands/SearchForm.vue';
import BrandTable from '@/components/brands/Table.vue';
import BrandEditModalForm from '@/components/brands/EditModalForm.vue';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

@Component({
  components: {
    HeadTitle,
    Breadcrumb,
    BrandSearchForm,
    BrandTable,
    BrandEditModalForm,
  },
})
export default class BrandMaintenance extends Vue {
  private hierarchyList: string[] = ['Maintenance', 'Brand'];

  private addFlag: boolean = false;

  private brandData: any = {
    id: -1,
    name: '',
    link: '',
    image: {
      id: null,
      name: '',
      path: '',
      deleteFlag: false,
    },
    country: '',
    deleteFlag: false,
  };

  private brandList: any[] = [
    {
      id: 1,
      name: 'bukht',
      link: 'http://bukht.com/',
      image: {
        id: null,
        name: 'bukht_icon.jpg',
        path: require('@/images/brand/icon/bukht_icon.jpg'),
        deleteFlag: false,
      },
      country: '日本',
      deleteFlag: false,
    },
    {
      id: 2,
      name: 'NEON SIGN',
      link: 'http://ne-on-sign.com/',
      image: {
        id: null,
        name: 'neon-sign_icon.jpg',
        path: require('@/images/brand/icon/neon-sign_icon.jpg'),
        deleteFlag: false,
      },
      country: '日本',
      deleteFlag: false,
    },
    {
      id: 3,
      name: 'MIN',
      link: 'https://www.fashion-press.net/brands/3332',
      image: {
        id: null,
        name: 'min_icon.png',
        path: require('@/images/brand/icon/min_icon.png'),
        deleteFlag: false,
      },
      country: '日本',
      deleteFlag: false,
    },
    {
      id: 4,
      name: 'AURALEE',
      link: 'https://auralee.jp/',
      image: {
        id: null,
        name: 'auralee_icon.png',
        path: require('@/images/brand/icon/auralee_icon.png'),
        deleteFlag: false,
      },
      country: '日本',
      deleteFlag: false,
    },
  ];

  @Emit('edit')
  private edit(brandData: any): void {
    this.addFlag = false;
    this.brandData = { ...brandData };

    this.modalShow();
  }

  private add(): void {
    this.addFlag = true;
    this.brandData = {
      id: -1,
      name: '',
      link: '',
      image: {
        id: null,
        name: '',
        path: '',
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    };

    this.modalShow();
  }

  private modalShow(): void {
    (this.$refs.brandEditModalForm as any).inputAllCheck();

    UIkit.modal('#brand_edit_modal').show();
  }
}
</script>
