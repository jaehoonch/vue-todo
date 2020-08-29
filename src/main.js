import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Todo from "./components/Todo";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", component: Todo }],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
