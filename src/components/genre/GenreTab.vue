<template>
    <div class="genre-tab">
        <ul class="uk-child-width-expand" uk-tab>
            <li v-for="(genre, index) in genreList" :key="(genre, index)" :class="{ 'uk-active': isFirst(index) }">
                <a href="#">{{ genre }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type CustomProp<T> = () => T;

@Component
export default class GenreTab extends Vue {
    @Prop({type: Array as CustomProp<string[]>})
    private genreList!: string[];

    private isFirst(index: number): boolean {
        return index === 0;
    }
}
</script>
