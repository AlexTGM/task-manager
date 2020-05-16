import { createMapper } from 'vuex-smart-module';

import routes from './module/routes';
import store from './module/store';

export default {
  name: 'projects',
  routes,
  store,
  mapper: createMapper(store),
};
