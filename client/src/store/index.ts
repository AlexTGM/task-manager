import Vue from 'vue';
import Vuex from 'vuex';
import gql from 'graphql-tag';

import { Project } from './models/Project';

import graphqlClient from '../utils/graphql';

Vue.use(Vuex);

interface ProjectResponse {
  id: string;
  title: string;
  description: string;
  tasks: TaskResponse[];
}

interface TaskResponse {
  id: string;
  title: string;
  description: string;
}

interface ProjectsResponse {
  listProjects: ProjectResponse[];
}

export default new Vuex.Store({
  state: {
    projects: Array<Project>(),
  },

  mutations: {
    loadProjects(state, projects: Array<Project>) {
      state.projects = projects;
    },
  },

  actions: {
    async loadProjects(context) {
      const response = await graphqlClient.query<ProjectsResponse>({
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

      context.commit('loadProjects', response.data.listProjects);
    },
  },

  getters: {
    projects: (state) => state.projects,
  },

  modules: {
  },
});
