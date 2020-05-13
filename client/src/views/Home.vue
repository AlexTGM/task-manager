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
import Component from 'vue-class-component';

import { mapGetters } from 'vuex';

import { Project } from '../store/models/Project';

@Component({
  computed: { ...mapGetters(['projects']) },

  beforeMount() {
    this.$store.dispatch('loadProjects');
  },
})
export default class HomeComponent extends Vue {
}
</script>
