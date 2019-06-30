<template>
  <div class="home">
    <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

    <head-title titleName="Home" />

    <home-top />

    <hr class="uk-divider-icon">

    <home-brand />

    <hr class="uk-divider-icon">

    <home-shop />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/common/HeadTitle.vue';
import Breadcrumb from '@/components/common/Breadcrumb.vue';
import HomeTop from '@/components/home/Top.vue';
import HomeBrand from '@/components/brand/Panel.vue';
import HomeShop from '@/components/shop/Article.vue';

@Component({
  components: {
    HeadTitle,
    Breadcrumb,
    HomeBrand,
    HomeTop,
    HomeShop,
  },
})
export default class Home extends Vue {
  private hierarchyList: string[] = ['Home'];
}

</script>


