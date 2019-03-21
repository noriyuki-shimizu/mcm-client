<template>
    <div class="brand-maintenance">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <h1 class="uk-heading-divider">
            <div class="uk-margin-large-left">Brand</div>
        </h1>

        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <h3>Search form</h3>
                <form class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-brand-name">Brand name</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-brand-name" class="uk-input" type="text" placeholder="50">
                        </div>
                    </div>
                    <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="form-stacked-address">Address</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-address" class="uk-input" type="text" placeholder="50">
                        </div>
                    </div>
                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-station-name">Station name</label>
                        <div class="uk-form-controls">
                            <input id="form-stacked-station-name" class="uk-input" type="text" placeholder="50">
                        </div>
                    </div>
                    <div class="uk-width-1-4@s">
                        <label class="uk-form-label" for="form-stacked-delete-flg">Delete flg</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-delete-flg">
                                <option>Deleted</option>
                                <option>Not deleted</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>

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
                <tbody v-for="brand in barndList" :key="brand">
                    <tr @dblclick="test()">
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

        <div id="open_edit_modal" class="uk-modal-container" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <h2 class="uk-modal-title">Headline</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';

@Component({
    components: {
        Breadcrumb,
    },
    filters: {
        formatByDeleteFlag(deleteFlag: boolean): string {
            return deleteFlag ? 'Deleted' : 'Not deleted';
        },
    },
})
export default class BrandMaintenance extends Vue {
    private hierarchyList: string[] = [
        'Master',
        'Maintenance',
        'Brand',
    ];

    private barndList: any[] = [
        {
            name: 'O代官山 本店',
            link: 'http://store.moc-o.com/',
            imagePath: require('@/images/shop/icon/o_icon.jpg'),
            address: '東京都渋谷区猿楽町26-13 グレイス代官山 #202 ',
            businessHours: '12:00 - 20:00 定休日 無し',
            tel: '03-6416-1187',
            deleteFlag: false,
        },
        {
            name: '吾亦紅',
            link: 'https://blog.us-onlinestore.com/brand/garden/shop/garden-waremokou',
            imagePath: require('@/images/shop/icon/waremokou_icon.jpeg'),
            address: '東京都渋谷区神南1-18-2ﾌﾚｰﾑ神南坂1F',
            businessHours: '11：30～21：00',
            tel: '03-6452-5530',
            deleteFlag: false,
        },
    ];

    private test(): void {
        // open_edit_modal
        UIkit.modal('#open_edit_modal').show();
    }
}
</script>