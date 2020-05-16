<template>
<div class="container">
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Project</th>
        <th>Description</th>
        <th>Tasks</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in projects" :key="project.id">
        <td>{{project.title}}</td>
        <td>{{project.description}}</td>
        <td>
          <ul v-for="task in project.tasks" :key="task.id">
            <li>{{task.title}}</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { projectsMapper } from '../module/store';

export default Vue.extend({
  name: 'ProjectsListComponent',

  computed: projectsMapper.mapGetters([
    'projects',
  ]),

  methods: projectsMapper.mapActions({
    loadProjectsAsync: 'loadProjectsAsync',
  }),

  async mounted() {
    await this.loadProjectsAsync();
  },
});
</script>
