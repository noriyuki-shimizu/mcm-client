<template>
    <div id="common">
        <side-bar/>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import SideBar from '@/components/bar/SideBar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
      SideBar,
  },
})
export default class Common extends Vue {
}
</script>
