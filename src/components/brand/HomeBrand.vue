<template>
    <div class="uk-panel uk-margin-medium-top uk-margin-medium-bottom">

        <div class="uk-margin-large-left">
            <h3>Brand list</h3>
        </div>
        <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-medium-left uk-margin-medium-right">
            <div v-bind:key="brand.id" v-for="brand in brandList">
                <div id="custom_card" class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-top">
                    <a :href="brand.link" target="_blank">
                        <img class="uk-align-center" :src="brand.imagePass" width="170px" height="100px">
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BrandDto from '@/type/brand/dto/BrandDto';

@Component
export default class HomeBrand extends Vue {
    // TODO: axiosを用いて以下のリストデータを取得する
    private brandList: BrandDto[] = [
    {
      id: 1,
      link: 'http://bukht.com/',
      imagePath: require('@/images/brand/icon/bukht_icon.jpg'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    },
    {
      id: 2,
      link: 'http://ne-on-sign.com/',
      imagePath: require('@/images/brand/icon/neon-sign_icon.jpg'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    },
    {
      id: 3,
      link: 'https://www.fashion-press.net/brands/3332',
      imagePath: require('@/images/brand/icon/min_icon.png'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    },
    {
      id: 4,
      link: 'https://auralee.jp/',
      imagePath: require('@/images/brand/icon/auralee_icon.png'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    },
    {
      id: 5,
      link: 'https://sixty-nine.us/',
      imagePath: require('@/images/brand/icon/69_icon.jpg'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    },
    {
      id: 6,
      link: 'http://henderscheme.com/',
      imagePath: require('@/images/brand/icon/hender-scheme_icon.jpg'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
      deleteFlag: false,
    },
    {
      id: 7,
      link: 'http://www.yohjiyamamoto.co.jp/',
      imagePath: require('@/images/brand/icon/yohjiyamamoto_icon.png'),
      name: '',
      stationName: '',
      address: '',
      businessHours: '',
      tel: '',
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

