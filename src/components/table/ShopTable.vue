<template>
    <div class="shop-table">
        <div class="uk-overflow-auto uk-margin-small-top">
            <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <caption>Shop list</caption>
                <thead>
                    <tr>
                        <th class="uk-table-shrink">Image</th>
                        <th class="uk-table-shrink uk-text-nowrap">Name</th>
                        <th class="uk-table-shrink uk-text-nowrap">Station</th>
                        <th class="uk-width-shrink">Link</th>
                        <th class="uk-table-shrink uk-text-nowrap">Address</th>
                        <th class="uk-table-shrink uk-text-nowrap">Business hours</th>
                        <th class="uk-table-shrink uk-text-nowrap">Tel</th>
                        <th class="uk-table-small">Delete flag</th>
                    </tr>
                </thead>
                <tbody v-for="shop in shopList" :key="shop.id">
                    <tr v-on:dblclick="$emit('openModal', shop)">
                        <td><img class="uk-preserve-width" :src="shop.image.path" height="200" width="200"></td>
                        <td class="uk-text-nowrap">{{ shop.name }}</td>
                        <td class="uk-text-nowrap">{{ shop.stationName }}</td>
                        <td class="uk-text-truncate">{{ shop.link }}</td>
                        <td class="uk-text-nowrap">{{ shop.address }}</td>
                        <td class="uk-text-nowrap">{{ shop.businessHours }}</td>
                        <td class="uk-text-nowrap">{{ shop.tel }}</td>
                        <td>{{ shop.deleteFlag | formatByDeleteFlag }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import CustomFormatMixin from '@/mixins/CustomFormatMixin';
import ShopDto from '@/type/domain/dto/ShopDto';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component({
    mixins: [
        CustomFormatMixin,
    ],
})
export default class ShopTable extends Vue {
    @Prop({type: Array as CustomProp<ShopDto[]>})
    private shopList!: ShopDto[];
}
</script>