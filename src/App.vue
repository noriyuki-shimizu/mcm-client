<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {}
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
