<template>
    <div class="clothes-table">
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
            <caption>Clothes list</caption>
            <thead>
                <tr>
                    <th class="uk-table-shrink">image</th>
                    <th class="uk-table-shrink uk-text-nowrap">genre</th>
                    <th class="uk-table-shrink uk-text-nowrap">brand</th>
                    <th class="uk-table-shrink uk-text-nowrap">shop</th>
                    <th class="uk-table-shrink uk-text-nowrap">price</th>
                    <th class="uk-table-shrink uk-text-nowrap">buy date</th>
                    <th class="uk-table-small">delete flg</th>
                </tr>
            </thead>
            <tbody v-for="clothes in clothesList" :key="clothes.id">
                <tr v-on:dblclick="$emit('openModal', clothes)">
                    <td><img class="uk-preserve-width" v-fallback-image :src="clothes.image.path" width="200px" height="200px"></td>
                    <td class="uk-text-nowrap">{{ clothes.genre }}</td>
                    <td class="uk-text-nowrap">{{ clothes.brand.name }}</td>
                    <td class="uk-text-nowrap">{{ clothes.shop.name }}</td>
                    <td class="uk-text-nowrap">{{ clothes.price | formatByPrice }}</td>
                    <td class="uk-text-nowrap">{{ clothes.buyDate }}</td>
                    <td>{{ clothes.deleteFlg | formatByDeleteFlag }}</td>
                </tr>
            </tbody>
        </table>

        <hr>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';

import ClothesDto from '@/type/domain/dto/ClothesDto';

type CustomProp<T> = () => T;

@Component({
    directives: {
        FallbackImage,
    },
})
export default class ClothesTable extends Vue {
    @Prop({type: Array as CustomProp<ClothesDto[]>})
    private clothesList!: ClothesDto[];
}
</script>
