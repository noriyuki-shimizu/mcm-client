<template>
    <div class="total-price-per-genre-list">
        <div class="uk-section uk-section-default">
            <div class="uk-container uk-margin-medium">
                <h3>Total price</h3>
                <div v-for="(totalPricePerGenre, index) in list" :key="(totalPricePerGenre, index)" class="uk-grid-small" uk-grid>
                    <div class="uk-width-expand" uk-leader>{{ totalPricePerGenre.genre }}</div>
                    <div>{{ totalPricePerGenre.totalPrice | formatByPrice }}</div>
                </div>
                <hr>
                <b>
                    <div class="uk-grid-small" uk-grid>
                        <div class="uk-width-expand" uk-leader>Total</div>
                        <div>{{ getTotalPrice() | formatByPrice }}</div>
                    </div>
                </b>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import CustomFormatMixin from '@/mixins/CustomFormatMixin';

type CustomProp<T> = () => T;

@Component({
    mixins: [
        CustomFormatMixin,
    ],
})
export default class TotalPricePerGenreList extends Vue {
    @Prop({type: Array as CustomProp<any[]>})
    private list!: any[];

    private getTotalPrice(): number {
        return this.list.map((totalPricePerGenre, index) => {
            return totalPricePerGenre.totalPrice;
        }).reduce((previous, current, index, array) => {
            return previous + current;
        });
    }
}
</script>
