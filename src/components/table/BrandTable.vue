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
                    <tr @dblclick="edit(brand)">
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
        
        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button class="uk-button uk-button-primary uk-button-large" @click="add()">New Brand</button>
        </p>

        <brand-edit-modal-form ref="brandEditModalForm" :addFlag="addFlag" :brandDto="brandDto" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import FallbackImage from '@/directives/fallback-image';
import BrandEditModalForm from '@/components/form/edit/BrandEditModalForm.vue';

import BrandDto from '@/type/dto/BrandDto';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component({
    directives: {
        FallbackImage,
    },
    components: {
        BrandEditModalForm,
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

    private addFlag: boolean | null = false;
    private brandDto: BrandDto = {
        id: -1,
        name: '',
        link: '',
        image: {
            name: '',
            path: '',
            file: null,
        },
        country: '',
        deleteFlag: false,
    };

    private beforeDestroy(): void {
        this.addFlag = null;
    }

    private edit(brandDto: BrandDto): void {
        this.addFlag = false;
        this.brandDto = {...brandDto};

        this.modalShow();
    }

    private add(): void {
        this.addFlag = true;
        this.brandDto = {
            id: -1,
            name: '',
            link: '',
            image: {
                name: '',
                path: '',
                file: null,
            },
            country: '',
            deleteFlag: false,
        };

        this.modalShow();
    }

    private modalShow(): void {
        // 子コンポーネントのイベント呼び出し
        (this.$refs.brandEditModalForm as any).inputAllCheck();

        UIkit.modal('#brand_edit_modal').show();
    }

}
</script>
