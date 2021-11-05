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
            {
                path: "gaming",
                component: () => import("@pages/dashboards/gamers/index.vue"),
                children: [
                    {
                        name: "my_bookings",
                        path: "bookings",
                        component: () =>
                            import(
                                "@pages/dashboards/gamers/bookings/mybookings.vue"
                            ),
                    },
                ],
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
            {
                path: "station",
                component: () => import("@pages/settings/stations/index.vue"),
                children: [
                    {
                        path:"games",
                        component: () => import('@pages/settings/stations/games/index.vue'),
                        children:[
                            {
                                name:'all_games',
                                path:'/',
                                component: () => import('@pages/settings/stations/games/all.vue')
                            },
                            {
                                name:'game_categories',
                                path:'all',
                                component: () => import("@pages/settings/stations/games/categories.vue")
                            }
                        ]
                    },
                    {
                        path: "pricing",
                        name: "settings_pricing",
                        component: () =>
                            import("@pages/settings/stations/pricing.vue"),
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
