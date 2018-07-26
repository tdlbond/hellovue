import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Login from 'views/login/login.vue';
import Overview from 'views/overview/overview.vue';
import Info from 'views/info/info.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'info',
      children: [
        {
          path: 'overview/:id',
          name: 'overview',
          component: Overview,
        },
        {
          path: 'info',
          name: 'info',
          component: Info,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      name: 'home',
      redirect: '/',
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next();
});

export default router;