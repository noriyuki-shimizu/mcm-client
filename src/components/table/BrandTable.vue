<template>
    <div class="brand-table">
        <div class="uk-overflow-auto uk-margin-small-top">
            <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <caption>Brand list</caption>
                <thead>
                    <tr>
                        <th class="uk-table-shrink">Image</th>
                        <th class="uk-table-shrink uk-text-nowrap">Name</th>
                        <th class="uk-width-shrink">Link</th>
                        <th class="uk-table-shrink uk-text-nowrap">Country</th>
                        <th class="uk-table-small">Delete flag</th>
                    </tr>
                </thead>
                <tbody v-for="brand in brandList" :key="brand.id">
                    <tr v-on:dblclick="$emit('openModal', brand)">
                        <td><img v-fallback-image class="uk-preserve-width" :src="brand.image.path" height="200" width="200"></td>
                        <td class="uk-text-nowrap">{{ brand.name }}</td>
                        <td class="uk-text-truncate">{{ brand.link }}</td>
                        <td class="uk-text--nowrap">{{ brand.country }}</td>
                        <td>{{ brand.deleteFlag | formatByDeleteFlag }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';

import CustomFormatMixin from '@/mixins/CustomFormatMixin';
import BrandDto from '@/type/domain/dto/BrandDto';

type CustomProp<T> = () => T;

@Component({
    mixins: [
        CustomFormatMixin,
    ],
    directives: {
        FallbackImage,
    },
})
export default class BrandTable extends Vue {
    @Prop({type: Array as CustomProp<BrandDto[]>})
    private brandList!: BrandDto[];
}
</script>
