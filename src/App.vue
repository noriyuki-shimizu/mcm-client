<template>
  <div id="app">
    <div id="nav">
      <side-bar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import SideBar from '@/components/SideBar.vue';
import { Component, Vue } from 'vue-property-decorator';

UIkit.use(Icons);

Vue.component('side-bar', SideBar);

export default {
  name: 'App',
};

</script>

<style lang="scss">
@import url('../node_modules/uikit/dist/css/uikit.css');
</style>
