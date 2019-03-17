<template>
    <div class="breadcrumb">
        <div class="uk-margin-medium-left">
            <ul class="uk-breadcrumb">
                <li v-for="(hierarchy, index) in hierarchyList" :key="(hierarchy, index)">
                    <span v-if="isLast(index)">{{ hierarchy }}</span>
                    <a v-else href="#">{{ hierarchy }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type CustomProp<T> = () => T;

@Component
export default class Breadcrumb extends Vue {

    @Prop({type: Array as CustomProp<string[]>})
    private hierarchyList!: string[];

    private isLast(index: number): boolean {
        return index === this.hierarchyList.length - 1;
    }

}
</script>

