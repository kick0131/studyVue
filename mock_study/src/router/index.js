import Vue from "vue";
import Router from "vue-router";

import paths from "./paths";

function route(path, name, view) {
  return {
    path: path,
    name: name,
    component: view,
  };
}

function makeRoutes() {
  var ret = new Array();
  for (var i = 0; i < paths.length; i++) {
    if (paths[i].kind == "menu") {
      ret.push(route(paths[i].path, paths[i].name, paths[i].view));
    } else if (paths[i].kind == "route") {
      ret.push(route(paths[i].path, paths[i].name, paths[i].view));
    } else if (paths[i].kind == "group") {
      for (var j = 0; j < paths[i].menu.length; j++) {
        ret.push(
          route(
            paths[i].menu[j].path,
            paths[i].menu[j].name,
            paths[i].menu[j].view
          )
        );
      }
    }
  }
  ret.push({ path: "*", redirect: "/" });
  ret.push({ path: "/", redirect: "/handbook" });
  return ret;
}

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: makeRoutes(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
