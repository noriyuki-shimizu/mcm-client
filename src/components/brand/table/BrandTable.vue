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
                        <th class="uk-table-shrink uk-text-nowrap">Address</th>
                        <th class="uk-table-shrink uk-text-nowrap">Business hours</th>
                        <th class="uk-table-shrink uk-text-nowrap">Tel</th>
                        <th class="uk-table-small">Delete flag</th>
                    </tr>
                </thead>
                <tbody v-for="brand in brandList" :key="brand">
                    <tr @dblclick="edit(brand)">
                        <td><img class="uk-preserve-width" :src="brand.imagePath" height="200" width="200"></td>
                        <td class="uk-text-nowrap">{{ brand.name }}</td>
                        <td class="uk-text-truncate">{{ brand.link }}</td>
                        <td class="uk-text-nowrap">{{ brand.address }}</td>
                        <td class="uk-text-nowrap">{{ brand.businessHours }}</td>
                        <td class="uk-text-nowrap">{{ brand.tel }}</td>
                        <td>{{ brand.deleteFlag | formatByDeleteFlag }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <brand-edit-modal />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BrandEditModal from '@/components/brand/modal/BrandEditModal.vue';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;
type BrandDto = {
    name: string,
    link: string,
    imagePath: string,
    address: string,
    businessHours: string,
    tel: string,
    deleteFlag: boolean,
};

@Component({
    components: {
        BrandEditModal,
    },
    filters: {
        formatByDeleteFlag(deleteFlag: boolean): string {
            return deleteFlag ? 'Deleted' : 'Not deleted';
        },
    },
})
export default class BrandTable extends Vue {
    @Prop({type: Array as CustomProp<BrandDto[]>})
    private brandList!: BrandDto[];

    private edit(brand: BrandDto): void {
        // open_edit_modal
        UIkit.modal('#brand_edit_modal').show();
    }

}
</script>