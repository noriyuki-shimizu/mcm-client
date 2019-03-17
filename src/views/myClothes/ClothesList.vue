<template>
    <div class="clothes-list">
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <h1 class="uk-heading-divider">
            <div class="uk-margin-large-left">Clothes list</div>
        </h1>
        <div>
            <ul class="uk-child-width-expand" uk-tab>
                <li class="uk-active"><a href="#">Tops</a></li>
                <li><a href="#">Tee</a></li>
                <li><a href="#">Outer</a></li>
                <li><a href="#">Bottoms</a></li>
                <li><a href="#">Hat</a></li>
                <li><a href="#">Bag</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Shoes &amp; Boots</a></li>
                <li><a href="#">All Item</a></li>
            </ul>
        </div>

        <clothes-list-form />

        <div class="uk-section uk-section-muted">
            <table class="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th>image</th>
                        <th>genre</th>
                        <th>brand</th>
                        <th>shop</th>
                        <th>price</th>
                        <th>buy date</th>
                        <th>delete flg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                    </tr>
                    <tr>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                    </tr>
                    <tr>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <ul class="uk-pagination uk-flex-center" uk-margin>
            <li><a href="#"><span uk-pagination-previous></span></a></li>
            <li><a href="#">1</a></li>
            <li class="uk-disabled"><span>...</span></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li class="uk-active"><span>7</span></li>
            <li><a href="#">8</a></li>
            <li><a href="#"><span uk-pagination-next></span></a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import ClothesListForm from '@/components/form/search/ClothesListForm.vue';

@Component({
    components: {
        Breadcrumb,
        ClothesListForm,
    },
})
export default class ClothesList extends Vue {
    private hierarchyList: string[] = [
        'My Clothes',
        'clothes list',
    ];
}
</script>
