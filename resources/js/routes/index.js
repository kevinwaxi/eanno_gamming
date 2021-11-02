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
        path: "/settings",
        component: () => import("@pages/settings/index.vue"),
        children: [
            {
                path: "invitations",
                component: () =>
                    import("@pages/settings/invitations/index.vue"),
                children: [
                    {
                        path: "all",
                        name: "all_requests",
                        component: () =>
                            import("@pages/settings/invitations/requested.vue"),
                    },
                ],
            },
            {
                path: "security",
                component: () => import("@pages/settings/security/index.vue"),
                children: [
                    {
                        path: "permissions",
                        name: "permissions",
                        component: () =>
                            import(
                                "@pages/settings/security/permissions/permissions.vue"
                            ),
                    },
                    {
                        path: "roles",
                        name: "roles",
                        component: () =>
                            import("@pages/settings/security/roles/roles.vue"),
                    },
                ],
            },
            {
                path: "profile",
                component: () => import("@pages/settings/profile/index.vue"),
                children: [
                    {
                        path: "account",
                        name: "my_account",
                        component: () =>
                            import("@pages/settings/profile/account.vue"),
                    },
                    {
                        path: "edit",
                        name: "edit_my_account",
                        component: () =>
                            import("@pages/settings/profile/edit.vue"),
                    },
                ],
            },
            {
                path: "users",
                component: () => import("@pages/settings/users/index.vue"),
                children: [
                    {
                        path: "all",
                        name: "all_users",
                        component: () =>
                            import("@pages/settings/users/all.vue"),
                    },
                    {
                        path: "admins",
                        name: "all_admins",
                        component: () =>
                            import("@pages/settings/users/admin.vue"),
                    },
                    {
                        path: "gamers",
                        name: "all_gamers",
                        component: () =>
                            import("@pages/settings/users/gamers.vue"),
                    },
                    {
                        path: "cashiers",
                        name: "all_cashiers",
                        component: () =>
                            import("@pages/settings/users/cashiers.vue"),
                    },
                ],
            },
        ],
    },
];

export default new Router({
    mode: "history",
    history: true,
    base: "/",
    linkExactActiveClass: "active",
    routes,
});
