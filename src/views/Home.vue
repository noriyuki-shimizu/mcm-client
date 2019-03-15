<template>
  <div class="home">
    <home-top />

    <hr class="uk-divider-icon">

    <home-brand />

    <hr class="uk-divider-icon">
    
    <home-shop />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTop from '@/components/home/HomeTop.vue';
import HomeBrand from '@/components/brand/HomeBrand.vue';
import HomeShop from '@/components/shop/HomeShop.vue';

@Component({
  components: {
    HomeBrand,
    HomeTop,
    HomeShop,
  },
})

export default class Home extends Vue {
}

</script>


