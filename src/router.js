import Vue from 'vue';
import Router from 'vue-router';

const Home = resolve => require(['./views/Home.vue'], resolve);
const Login = resolve => require(['views/login/login.vue'], resolve);
const Overview = resolve => require(['views/overview/overview.vue'], resolve);
const Info = resolve => require(['views/info/info.vue'], resolve);

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
  
  next();
});

export default router;