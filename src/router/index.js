import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    //ruta base
    path: '/',
    redirect: '/main'
  },
  //rutas aspociadas a los compomentes
  {
    path: '/',
    component: {
      render(c) {
        //renderizar
        return c('router-view');
      },
    },
    //los componentes que se renderizan en router view
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import('../components/Main.vue')
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('../components/Form.vue')
      },
      {
        path: '/paginacion',
        name: 'paginacion',
        component: () => import('../components/Paginacion.vue')
      },


    ]
  }
]

const router = new VueRouter({ routes, })
export default router;