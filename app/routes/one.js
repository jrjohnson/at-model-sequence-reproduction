import Route from '@ember/routing/route';

export default class OneRoute extends Route {
  model() {
    return {
      first: 'first',
      second: 'second',
    }
  }

}
