import graphqlClient from '@/services/graphql';
import { Actions } from 'vuex-smart-module';
import gql from 'graphql-tag';

import ProjectsState from './state';
import ProjectsGetters from './getters';
import ProjectsMutations from './mutations';

import ProjectsResponse from '../models/responses/ProjectsResponse';

export default class ProjectsActions
  extends Actions<ProjectsState, ProjectsGetters, ProjectsMutations, ProjectsActions> {
  async loadProjectsAsync() {
    const response = graphqlClient.query<ProjectsResponse>({
      query: gql`
          query ListProjects {
            listProjects {
              id title description tasks {
                id title description
              }
            }
          }
        `,
    });

    this.commit('loadProjects', (await response).data.listProjects.map((r) => ({
      id: r.id,
      description: r.description,
      title: r.title,
      tasks: r.tasks.map((t) => ({
        id: t.id,
        description: t.description,
        title: t.title,
      })),
    })));
  }
}
