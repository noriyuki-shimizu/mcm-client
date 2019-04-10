<template>
    <div class="clothes-table">
        <table class="uk-table uk-table-small uk-table-middle uk-table-divider uk-overflow-auto">
            <caption>Clothes list</caption>
            <thead>
                <tr>
                    <th>image</th>
                    <th>genre</th>
                    <th>brand</th>
                    <th>shop</th>
                    <th>price</th>
                    <th>buy date</th>
                    <th>delete flg</th>
                </tr>
            </thead>
            <tbody v-for="clothes in clothesList" :key="clothes.id">
                <tr>
                    <td><img v-fallback-image :src="clothes.image.path" width="200px" height="200px"></td>
                    <td>{{ clothes.genre }}</td>
                    <td>{{ clothes.brand.name }}</td>
                    <td>{{ clothes.shop.name }}</td>
                    <td>{{ clothes.price | formatByPrice }}</td>
                    <td>{{ clothes.buyDate }}</td>
                    <td>{{ clothes.deleteFlg | formatByDeleteFlag }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';

import ClothesDto from '@/type/dto/ClothesDto';

type CustomProp<T> = () => T;

@Component({
    directives: {
        FallbackImage,
    },
    filters: {
        formatByPrice(price: number): string | null {
            if (!price === null) {
                return null;
            }
            return '¥ ' + price.toLocaleString();
        },
        formatByDeleteFlag(deleteFlag: boolean): string {
            return deleteFlag ? 'Deleted' : 'Not deleted';
        },
    },
})
export default class ClothesTable extends Vue {
    @Prop({type: Array as CustomProp<ClothesDto[]>})
    private clothesList!: ClothesDto[];
}
</script>
