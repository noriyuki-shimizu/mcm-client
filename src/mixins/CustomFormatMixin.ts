import { Component, Vue } from 'vue-property-decorator';

@Component({
    filters: {
        formatByPrice(price: number = 0): string | null {
            return `¥ ${price.toLocaleString()}`;
        },
        formatByDeleteFlag(deleteFlag: boolean): string {
            return deleteFlag ? 'Deleted' : 'Not deleted';
        },
        formatByDate(dateStr: string): string | null {
            if (!dateStr) {
                return null;
            }
            const date: Date = new Date(dateStr);
            return `${date.getFullYear()}/${date.getMonth() +
                1}/${date.getDate()}`;
        }
    }
})
export default class CustomFormatMixin extends Vue {}
