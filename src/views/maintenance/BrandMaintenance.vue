<template>
    <div class="brand-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <head-title titleName="Brand" />

        <brand-search-form />

        <brand-table v-on:openModal="edit" :brandList="brandList" />

        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button class="uk-button uk-button-primary uk-button-large" @click="add()">New Brand</button>
        </p>

        <brand-edit-modal-form ref="brandEditModalForm" :addFlag="addFlag" :brandDto="brandDto" />
        
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HeadTitle from '@/components/title/HeadTitle.vue';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import BrandSearchForm from '@/components/form/search/BrandSearchForm.vue';
import BrandTable from '@/components/table/BrandTable.vue';
import BrandEditModalForm from '@/components/form/edit/BrandEditModalForm.vue';

import BrandDto from '@/type/domain/dto/BrandDto';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

@Component({
    components: {
        HeadTitle,
        Breadcrumb,
        BrandSearchForm,
        BrandTable,
        BrandEditModalForm,
    },
})
export default class BrandMaintenance extends Vue {
    private hierarchyList: string[] = [
        'Maintenance',
        'Brand',
    ];

    private addFlag: boolean = false;

    private brandDto: BrandDto = {
        id: -1,
        name: '',
        link: '',
        image: {
            name: '',
            path: '',
            file: null,
            deleteFlag: false,
        },
        country: '',
        deleteFlag: false,
    };

    private brandList: BrandDto[] = [
        {
            id: 1,
            name: 'bukht',
            link: 'http://bukht.com/',
            image: {
                name: 'bukht_icon.jpg',
                path: require('@/images/brand/icon/bukht_icon.jpg'),
                file: null,
                deleteFlag: false,
            },
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 2,
            name: 'NEON SIGN',
            link: 'http://ne-on-sign.com/',
            image: {
                name: 'neon-sign_icon.jpg',
                path: require('@/images/brand/icon/neon-sign_icon.jpg'),
                file: null,
                deleteFlag: false,
            },
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 3,
            name: 'MIN',
            link: 'https://www.fashion-press.net/brands/3332',
            image: {
                name: 'min_icon.png',
                path: require('@/images/brand/icon/min_icon.png'),
                file: null,
                deleteFlag: false,
            },
            country: '日本',
            deleteFlag: false,
        },
        {
            id: 4,
            name: 'AURALEE',
            link: 'https://auralee.jp/',
            image: {
                name: 'auralee_icon.png',
                path: require('@/images/brand/icon/auralee_icon.png'),
                file: null,
                deleteFlag: false,
            },
            country: '日本',
            deleteFlag: false,
        },
    ];

    @Emit('edit')
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
                deleteFlag: false,
            },
            country: '',
            deleteFlag: false,
        };

        this.modalShow();
    }

    private modalShow(): void {
        (this.$refs.brandEditModalForm as any).inputAllCheck();

        UIkit.modal('#brand_edit_modal').show();
    }
}
</script>
