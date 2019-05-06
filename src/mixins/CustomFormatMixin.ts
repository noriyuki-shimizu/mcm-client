import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    formatByPrice(price: number): string | null {
      if (!price === null) {
        return null;
      }
      return '¥ ' + price.toLocaleString();
    },
    formatByDeleteFlag(deleteFlag: boolean): string {
      return deleteFlag ? 'Deleted' : 'Not deleted';
    },
  },
})
export default class CustomFormatMixin extends Vue {
}
