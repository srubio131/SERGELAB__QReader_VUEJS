import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: "/encode",
      name: "encode",
      component: loadView('VEncode')
    },
    {
      path: "/decode",
      name: "about",
      component: loadView('VDecode')
    },
    {
      path: "*",
      component: loadView('VDecode')
    },
  ]
});
