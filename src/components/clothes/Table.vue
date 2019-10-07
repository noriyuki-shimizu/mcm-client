<template>
    <div class="clothes-table">
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
            <caption>
                Clothes list
            </caption>
            <thead>
                <tr>
                    <th class="uk-table-shrink">
                        image
                    </th>
                    <th class="uk-table-shrink uk-text-nowrap">
                        genre
                    </th>
                    <th class="uk-table-shrink uk-text-nowrap">
                        brand
                    </th>
                    <th class="uk-table-shrink uk-text-nowrap">
                        shop
                    </th>
                    <th class="uk-table-shrink uk-text-nowrap">
                        price
                    </th>
                    <th class="uk-table-shrink uk-text-nowrap">
                        buy date
                    </th>
                    <th class="uk-table-small">
                        delete flg
                    </th>
                </tr>
            </thead>
            <tbody
                v-for="clothesData in clothesTableDataList"
                :key="clothesData.id"
            >
                <tr v-on:dblclick="$emit('openModal', clothesData)">
                    <td>
                        <img
                            v-fallback-image
                            :src="clothesData.image.name"
                            class="uk-preserve-width"
                            width="200px"
                            height="200px"
                        >
                    </td>
                    <td class="uk-text-nowrap">
                        {{ clothesData.genre.name }}
                    </td>
                    <td class="uk-text-nowrap">
                        {{ clothesData.brand.name }}
                    </td>
                    <td class="uk-text-nowrap">
                        {{ clothesData.shop.name }}
                    </td>
                    <td class="uk-text-nowrap">
                        {{ clothesData.price | formatByPrice }}
                    </td>
                    <td class="uk-text-nowrap">
                        {{ clothesData.buyDate | formatByDate }}
                    </td>
                    <td>{{ clothesData.deleteFlag | formatByDeleteFlag }}</td>
                </tr>
            </tbody>
        </table>

        <hr >
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';

import CustomFormatMixin from '@/mixins/CustomFormatMixin';

type CustomProp<T> = () => T;

@Component({
    mixins: [CustomFormatMixin],
    directives: {
        FallbackImage
    }
})
export default class Table extends Vue {
    @Prop({ type: Array as CustomProp<any[]> })
    private clothesTableDataList!: any[];
}
</script>
