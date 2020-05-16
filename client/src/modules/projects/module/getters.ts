import { Getters } from 'vuex-smart-module';

import ProjectsState from './state';

import Project from '../models/Project';

export default class ProjectsGetters extends Getters<ProjectsState> {
  get projects(): Project[] {
    return this.state.projects;
  }
}
