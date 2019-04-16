import Vue from 'vue';
import Component from 'vue-class-component';
import config from 'config';

@Component
export default class Base extends Vue {
  protected config?: any;

  protected created() {
    this.config = config;
  }
}
