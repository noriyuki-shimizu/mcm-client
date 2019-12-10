<template>
    <div id="spinner">
        <div class="uk-overlay-default uk-position-cover" />
        <div class="ui-margin uk-overlay uk-position-center uk-dark">
            <span uk-spinner="ratio: 4.5" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Spinner extends Vue {}
</script>