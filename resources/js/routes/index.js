import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const routes = [
    {
        path: "/dashboard",
        component: () => import("@pages/dashboards/index.vue"),
        children: [
            {
                path: "main",
                name: "admin_dashboard",
                component: () => import("@pages/dashboards/admin/index.vue"),
            },
            {
                path: "statistics",
                name: "stats_dashboard",
                component: () =>
                    import("@pages/dashboards/admin/statistics.vue"),
            },
        ],
    },
    {
        path:'/settings',
        component: () => import('@pages/settings/index.vue'),
        children: [
            {
                path: "security",
                component: () => import("@pages/settings/security/index.vue"),
                children: [
                    {
                        path: "permissions",
                        name: "permissions",
                        component: () =>
                            import("@pages/settings/security/permissions/permissions.vue"),
                    },
                    {
                        path: "roles",
                        name: "roles",
                        component: () => import("@pages/settings/security/roles/roles.vue"),
                    },
                ],
            },
        ]
    },

];

export default new Router({
    mode: "history",
    history: true,
    base: "/",
    linkExactActiveClass: "active",
    routes,
});
