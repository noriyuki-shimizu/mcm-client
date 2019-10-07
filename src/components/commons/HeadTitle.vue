<template>
    <div class="title">
        <h1 class="uk-heading-divider">
            <div class="uk-margin-large-left">
                {{ titleName }}
            </div>
        </h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
    @Prop({ type: String })
    private titleName!: string;
}
</script>
