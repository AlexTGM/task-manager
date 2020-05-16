import { RouteConfig } from 'vue-router';

import ProjectsListComponent from '../pages/Projects-List.vue';

const projects: Array<RouteConfig> = [
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsListComponent,
  },
];

export default projects;
