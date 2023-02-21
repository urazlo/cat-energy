import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import config from '../models/Config';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: config.getBaseUrl(),
  routes,
});

export default router;
