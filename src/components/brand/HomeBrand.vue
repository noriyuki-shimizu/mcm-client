<template>
    <div class="uk-panel uk-margin-medium-top uk-margin-medium-bottom">

        <div class="uk-margin-large-left">
            <h3>Brand list</h3>
        </div>
        <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-medium-left uk-margin-medium-right">
            <div v-bind:key="brand" v-for="brand in brandList">
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

@Component
export default class HomeBrand extends Vue {
    // TODO: axiosを用いて以下のリストデータを取得する
    private brandList: any[] = [
    {
      link: 'http://bukht.com/',
      imagePass: require('@/images/brand/icon/bukht_icon.jpg'),
    },
    {
      link: 'http://ne-on-sign.com/',
      imagePass: require('@/images/brand/icon/neon-sign_icon.jpg'),
    },
    {
      link: 'https://www.fashion-press.net/brands/3332',
      imagePass: require('@/images/brand/icon/min_icon.png'),
    },
    {
      link: 'https://auralee.jp/',
      imagePass: require('@/images/brand/icon/auralee_icon.png'),
    },
    {
      link: 'https://sixty-nine.us/',
      imagePass: require('@/images/brand/icon/69_icon.jpg'),
    },
    {
      link: 'http://henderscheme.com/',
      imagePass: require('@/images/brand/icon/hender-scheme_icon.jpg'),
    },
    {
      link: 'http://www.yohjiyamamoto.co.jp/',
      imagePass: require('@/images/brand/icon/yohjiyamamoto_icon.png'),
    },
  ];
}

</script>

<style>
#custom_card {
  height: 180px;
}
</style>

