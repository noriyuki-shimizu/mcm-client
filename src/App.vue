<template>
  <div id="app">
    <side-bar/>
    <router-view/>
  </div>
</template>

<script lang="ts">

import SideBar from '@/components/bar/SideBar.vue';
import { Component, Vue } from 'vue-property-decorator';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');
// tslint:disable-next-line:no-var-requires
const Icons = require('uikit/dist/js/uikit-icons');

UIkit.use(Icons);

@Component({
  components: {
      SideBar,
  },
})
export default class App extends Vue {
}

</script>

<style lang="scss">
@import url('../node_modules/uikit/dist/css/uikit.css');
@import url('../node_modules/pikaday/css/pikaday.css ');
@import url('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/leaflet.css');

.uk-custome-button-color-green {
  background-color: lightgreen;
  color: white;
  border: 1px solid transparent;
}
</style>
