import Vue from 'vue';
import VueRouter from 'vue-router';

import projects from '../modules/projects/module';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
});

router.addRoutes(projects.routes);

export default router;
