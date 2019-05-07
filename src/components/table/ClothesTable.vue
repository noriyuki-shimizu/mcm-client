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
            <tbody v-for="clothesTableData in clothesTableDataList" :key="clothesTableData.id">
                <tr v-on:dblclick="$emit('openModal', clothesTableData)">
                    <td><img class="uk-preserve-width" v-fallback-image :src="clothesTableData.imagePath" width="200px" height="200px"></td>
                    <td class="uk-text-nowrap">{{ clothesTableData.genreName }}</td>
                    <td class="uk-text-nowrap">{{ clothesTableData.brandName }}</td>
                    <td class="uk-text-nowrap">{{ clothesTableData.shopName }}</td>
                    <td class="uk-text-nowrap">{{ clothesTableData.price | formatByPrice }}</td>
                    <td class="uk-text-nowrap">{{ clothesTableData.buyDate | formatByDate }}</td>
                    <td>{{ clothesTableData.deleteFlag | formatByDeleteFlag }}</td>
                </tr>
            </tbody>
        </table>

        <hr>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';

import CustomFormatMixin from '@/mixins/CustomFormatMixin';
import ClothesTableData from '@/type/domain/dto/myClothes/ClothesTableData';

type CustomProp<T> = () => T;

@Component({
    mixins: [
        CustomFormatMixin,
    ],
    directives: {
        FallbackImage,
    },
})
export default class ClothesTable extends Vue {
    @Prop({type: Array as CustomProp<ClothesTableData[]>})
    private clothesTableDataList!: ClothesTableData[];
}
</script>
