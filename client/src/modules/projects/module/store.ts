import {
  Module,
  createMapper,
} from 'vuex-smart-module';

import ProjectsState from './state';
import ProjectsGetters from './getters';
import ProjectsMutations from './mutations';
import ProjectsActions from './actions';

const module = new Module({
  state: ProjectsState,
  getters: ProjectsGetters,
  mutations: ProjectsMutations,
  actions: ProjectsActions,
  namespaced: true,
});

export default module;

export const projectsMapper = createMapper(module);
