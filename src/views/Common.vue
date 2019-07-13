<template>
  <div id="common">
    <side-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/commons/SideBar.vue';

@Component({
  components: {
    SideBar,
  },
})
export default class Common extends Vue {}
</script>
