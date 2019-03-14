<template>
  <div class="home">
    <home-top />

    <hr class="uk-divider-icon">

    <home-brand />

    <hr class="uk-divider-icon">
    <!-- TODO: ここで一つのコンポーネント -->
    <!-- お店情報 -->

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTop from '@/components/home/HomeTop.vue';
import HomeBrand from '@/components/brand/HomeBrand.vue';

@Component({
  components: {
    HomeBrand,
    HomeTop,
  },
})

export default class Home extends Vue {
}

</script>


