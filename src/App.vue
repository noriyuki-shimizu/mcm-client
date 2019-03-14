<template>
  <div id="app">
    <side-bar/>
    <router-view/>
  </div>
</template>

<script>

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import SideBar from '@/components/bar/SideBar.vue';
import { Component, Vue } from 'vue-property-decorator';

UIkit.use(Icons);

export default {
  name: 'App',
  components: {
    'side-bar': SideBar,
  },
};

</script>

<style lang="scss">
@import url('../node_modules/uikit/dist/css/uikit.css');
</style>
