<template>
  <div class="uk-panel uk-margin-medium-top uk-margin-medium-bottom">
    <div class="uk-margin-large-left">
      <h3>Brand list</h3>
    </div>
    <div
      class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-medium-left uk-margin-medium-right"
    >
      <div v-bind:key="brand.id" v-for="brand in brandList">
        <div
          id="custom_card"
          class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-top"
        >
          <a :href="brand.link" target="_blank">
            <img :src="brand.image.path" class="uk-align-center" width="170px" height="100px">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeBrand extends Vue {
  // TODO: axiosを用いて以下のリストデータを取得する
  private brandList: any[] = [
    {
      id: 1,
      name: '',
      link: 'http://bukht.com/',
      image: {
        id: null,
        name: 'bukht_icon.jpg',
        path: require('@/images/brand/icon/bukht_icon.jpg'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 2,
      name: '',
      link: 'http://ne-on-sign.com/',
      image: {
        id: null,
        name: 'neon-sign_icon.jpg',
        path: require('@/images/brand/icon/neon-sign_icon.jpg'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 3,
      name: '',
      link: 'https://www.fashion-press.net/brands/3332',
      image: {
        id: null,
        name: 'min_icon.png',
        path: require('@/images/brand/icon/min_icon.png'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 4,
      name: '',
      link: 'https://auralee.jp/',
      image: {
        id: null,
        name: 'auralee_icon.png',
        path: require('@/images/brand/icon/auralee_icon.png'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 5,
      name: '',
      link: 'https://sixty-nine.us/',
      image: {
        id: null,
        name: '69_icon.jpg',
        path: require('@/images/brand/icon/69_icon.jpg'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 6,
      name: '',
      link: 'http://henderscheme.com/',
      image: {
        id: null,
        name: 'hender-scheme_icon.jpg',
        path: require('@/images/brand/icon/hender-scheme_icon.jpg'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 7,
      name: '',
      link: 'http://www.yohjiyamamoto.co.jp/',
      image: {
        id: null,
        name: 'yohjiyamamoto_icon.png',
        path: require('@/images/brand/icon/yohjiyamamoto_icon.png'),
        deleteFlag: false,
      },
      country: '',
      deleteFlag: false,
    },
  ];
}
</script>

<style>
#custom_card {
  height: 180px;
}
</style>
