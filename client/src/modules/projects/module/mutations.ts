import { Mutations } from 'vuex-smart-module';

import ProjectsState from './state';

import Project from '../models/Project';

export default class ProjectsMutations extends Mutations<ProjectsState> {
  loadProjects(projects: Array<Project>) {
    this.state.projects = projects;
  }
}
