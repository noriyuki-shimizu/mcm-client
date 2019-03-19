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
            <tbody v-for="clothes in clothesList" :key="clothes">
                <tr>
                    <td><img :src="clothes.imagePath" width="100px" height="100px"></td>
                    <td>{{ clothes.genre }}</td>
                    <td>{{ clothes.brand }}</td>
                    <td>{{ clothes.shop }}</td>
                    <td>{{ clothes.price | priceFormat }}</td>
                    <td>{{ clothes.buyDate }}</td>
                    <td>{{ clothes.deleteFlg }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type CustomProp<T> = () => T;

@Component({
    filters: {
        priceFormat(price: number): string | null {
            if (!price === null) {
                return null;
            }
            return '¥ ' + price.toLocaleString();
        },
    },
})
export default class ClothesTable extends Vue {
    @Prop({type: Array as CustomProp<any[]>})
    private clothesList!: any[];
}
</script>
