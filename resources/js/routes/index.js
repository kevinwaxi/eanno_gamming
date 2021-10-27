import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/pages/Dashboard/Admin/Index.vue"),
    },
];

export default new Router({
    mode: "history",
    history: true,
    base: "/",
    linkExactActiveClass: "active",
    routes,
});
