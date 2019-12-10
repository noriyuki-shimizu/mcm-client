<template>
    <div class="brand-table">
        <div class="uk-overflow-auto uk-margin-small-top">
            <table
                class="uk-table uk-table-hover uk-table-middle uk-table-divider"
            >
                <caption>
                    Brand list
                </caption>
                <thead>
                    <tr>
                        <th class="uk-table-shrink">
                            Image
                        </th>
                        <th class="uk-table-shrink uk-text-nowrap">
                            Name
                        </th>
                        <th class="uk-width-shrink">
                            Link
                        </th>
                        <th class="uk-table-shrink uk-text-nowrap">
                            Country
                        </th>
                        <th class="uk-table-small">
                            Delete flag
                        </th>
                    </tr>
                </thead>
                <tbody v-for="brand in brands" :key="brand.id">
                    <tr v-on:dblclick="$emit('openModal', brand.id)">
                        <td>
                            <img
                                v-fallback-image
                                :src="brand.image ? brand.image.path : '@/images/no-img.png'"
                                class="uk-preserve-width"
                                height="200px"
                                width="200px"
                            />
                        </td>
                        <td class="uk-text-nowrap">
                            {{ brand.name }}
                        </td>
                        <td class="uk-text-truncate">
                            {{ brand.link }}
                        </td>
                        <td class="uk-text--nowrap">
                            {{ brand.country }}
                        </td>
                        <td>{{ brand.deleteFlag | formatByDeleteFlag }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';

import store from '@/store';
import { Brand } from '@/store/brands/types';
import CustomFormatMixin from '@/mixins/CustomFormatMixin';

type CustomProp<T> = () => T;

@Component({
    mixins: [CustomFormatMixin],
    directives: {
        FallbackImage
    }
})
export default class BrandTable extends Vue {
    @Prop({ type: Array as CustomProp<Brand[]> })
    private brands!: Brand[];
}
</script>
