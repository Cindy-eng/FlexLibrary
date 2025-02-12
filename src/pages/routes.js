import {createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/home/Home.vue';
import SignIn from '@/pages/user/sign-in/SignIn.vue';
import SignUp from '@/pages/user/sign-up/SignUp.vue';
import Cart from '@/pages//cart/Cart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Homepage
    },

    {
      path: '/sign-in/',
      component: SignIn
    },

    {
      path: '/sign-up/',
      component: SignUp
    },

    {
      path: '/cart/',
      component: Cart
    },
  ],
}); 

export default router;
