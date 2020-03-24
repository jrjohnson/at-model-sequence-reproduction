import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ConsumerComponent extends Component {
  @tracked third;

  @action
  setThird(el, [f, s]) {
    this.third = f + s;
  }

  get firstFirst() {
    return this.args.first.substring(0, 1);
  }
  get firstSecond() {
    return this.args.second.substring(0, 1);
  }
}
