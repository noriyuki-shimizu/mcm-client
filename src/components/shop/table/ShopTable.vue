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
                    <tr @dblclick="edit(shop)">
                        <td><img class="uk-preserve-width" :src="shop.imagePath" height="200" width="200"></td>
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

        <p class="uk-align-right uk-margin-medium uk-margin-medium-right">
            <button class="uk-button uk-button-primary uk-button-large" @click="add()">New Shop</button>
        </p>

        <shop-edit-modal-form ref="shopEditModalForm" :addFlag="addFlag" :shopDto="shopDto" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import ShopEditModalForm from '@/components/shop/form/edit/ShopEditModalForm.vue';

import ShopDto from '@/type/shop/dto/ShopDto';

// tslint:disable-next-line:no-var-requires
const UIkit = require('uikit');

type CustomProp<T> = () => T;

@Component({
    components: {
        ShopEditModalForm,
    },
    filters: {
        formatByDeleteFlag(deleteFlag: boolean): string {
            return deleteFlag ? 'Deleted' : 'Not deleted';
        },
    },
})
export default class ShopTable extends Vue {
    @Prop({type: Array as CustomProp<ShopDto[]>})
    private shopList!: ShopDto[];

    private addFlag: boolean = false;
    private shopDto: ShopDto = {
        id: -1,
        name: '',
        link: '',
        stationName: '',
        imagePath: '',
        address: '',
        businessHours: '',
        tel: '',
        deleteFlag: false,
    };

    private edit(shopDto: ShopDto): void {
        this.addFlag = false;
        this.shopDto = {...shopDto};

        this.modalShow();
    }

    private add(): void {
        this.addFlag = true;
        this.shopDto = {
            id: -1,
            name: '',
            link: '',
            stationName: '',
            imagePath: '',
            address: '',
            businessHours: '',
            tel: '',
            deleteFlag: false,
        };

        this.modalShow();
    }

    private modalShow(): void {
        // 子コンポーネントのイベント呼び出し
        (this.$refs.shopEditModalForm as any).inputAllCheck();

        UIkit.modal('#shop_edit_modal').show();
    }

}
</script>