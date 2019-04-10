<template>
    <div class="uk-panel uk-margin-medium-top uk-margin-medium-bottom">

        <div class="uk-margin-large-left">
            <h3>Brand list</h3>
        </div>
        <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-medium-left uk-margin-medium-right">
            <div v-bind:key="brand.id" v-for="brand in brandList">
                <div id="custom_card" class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-top">
                    <a :href="brand.link" target="_blank">
                        <img class="uk-align-center" :src="brand.image.path" width="170px" height="100px">
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BrandDto from '@/type/dto/BrandDto';

@Component
export default class HomeBrand extends Vue {
    // TODO: axiosを用いて以下のリストデータを取得する
    private brandList: BrandDto[] = [
    {
      id: 1,
      name: '',
      link: 'http://bukht.com/',
      image: {
        name: 'bukht_icon.jpg',
        path: require('@/images/brand/icon/bukht_icon.jpg'),
        file: null,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 2,
      name: '',
      link: 'http://ne-on-sign.com/',
      image: {
        name: 'neon-sign_icon.jpg',
        path: require('@/images/brand/icon/neon-sign_icon.jpg'),
        file: null,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 3,
      name: '',
      link: 'https://www.fashion-press.net/brands/3332',
      image: {
        name: 'min_icon.png',
        path: require('@/images/brand/icon/min_icon.png'),
        file: null,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 4,
      name: '',
      link: 'https://auralee.jp/',
      image: {
        name: 'auralee_icon.png',
        path: require('@/images/brand/icon/auralee_icon.png'),
        file: null,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 5,
      name: '',
      link: 'https://sixty-nine.us/',
      image: {
        name: '69_icon.jpg',
        path: require('@/images/brand/icon/69_icon.jpg'),
        file: null,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 6,
      name: '',
      link: 'http://henderscheme.com/',
      image: {
        name: 'hender-scheme_icon.jpg',
        path: require('@/images/brand/icon/hender-scheme_icon.jpg'),
        file: null,
      },
      country: '',
      deleteFlag: false,
    },
    {
      id: 7,
      name: '',
      link: 'http://www.yohjiyamamoto.co.jp/',
      image: {
        name: 'yohjiyamamoto_icon.png',
        path: require('@/images/brand/icon/yohjiyamamoto_icon.png'),
        file: null,
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

