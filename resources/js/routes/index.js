import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const routes = [
    {
        path: '/admin',
        component: () => import("@pages/Admins/index.vue"),
        children: [
            {
                path: 'dashboards',
                component: () => import('@pages/Admins/dashboards/index.vue'),
                children: [
                    {
                        path: 'bookings',
                        name: 'Bookings',
                        component: () => import("@pages/Admins/dashboards/Bookings.vue")
                    },
                    {
                        path: 'gamers',
                        name: 'All Gamers',
                        component: () => import("@pages/Admins/dashboards/Gamers.vue")
                    },
                    {
                        path: 'sales',
                        name: 'Sales',
                        component: () => import("@pages/Admins/dashboards/Sales.vue")
                    },
                    {
                        path: 'invitations',
                        name: 'Invitations',
                        component: () => import("@pages/Admins/dashboards/Invitations.vue")
                    }
                ]
            },
            {
                path: 'settings',
                component: () => import("@pages/Admins/settings/index.vue"),
                children: [
                    {
                        path: 'inventory',
                        component: () => import("@pages/Admins/settings/inventory/index.vue"),
                        children: [
                            {
                                path: 'consoles',
                                name: 'Consoles',
                                component: () => import("@pages/Admins/settings/inventory/Consoles.vue")
                            },
                            {
                                path: 'categories',
                                name: 'Categories',
                                component: () => import("@pages/Admins/settings/inventory/Categories.vue")
                            },
                            {
                                path: 'games',
                                name: 'Games',
                                component: () => import("@pages/Admins/settings/inventory/Games.vue")
                            },
                            {
                                path: 'screens',
                                name: 'Screens',
                                component: () => import("@pages/Admins/settings/inventory/Screens.vue")
                            },
                            {
                                path: 'stations',
                                name: 'Stations',
                                component: () => import("@pages/Admins/settings/inventory/Stations.vue")
                            },
                        ]
                    },
                    {
                        path: 'security',
                        component: () => import("@pages/Admins/settings/security/index.vue"),
                        children: [
                            {
                                path: 'roles',
                                name: 'Roles',
                                component: () => import("@pages/Admins/settings/security/Roles.vue")
                            },
                            {
                                path: 'permissions',
                                name: 'Permissions',
                                component: () => import("@pages/Admins/settings/security/Permissions.vue")
                            },
                        ]
                    },
                    {
                        path: 'user_management',
                        component: () => import("@pages/Admins/settings/users/index.vue"),
                        children: [
                            {
                                path: 'administrators',
                                name: 'Admins',
                                component: () => import("@pages/Admins/settings/users/Admins.vue")
                            },
                            {
                                path: 'cashiers',
                                name: 'Cashiers',
                                component: () => import("@pages/Admins/settings/users/Cashiers.vue")
                            },
                            {
                                path: 'gamers',
                                name: 'Gamers',
                                component: () => import("@pages/Admins/settings/users/Gamers.vue")
                            },
                        ]
                    }
                ],
            }
        ]
    },
    {
        path: '/user',
        component: () => import("@pages/Users/index.vue"),
        children: [
            {
                path: 'games',
                name: 'Available Games',
                component: () => import('@pages/Users/Games.vue'),
            },
            {
                path: 'bookings',
                name: 'My Bookings',
                component: () => import("@pages/Users/Bookings.vue"),
            }
        ]
    },
    {
        path: '/account',
        component: () => import("@pages/Profile/index.vue"),
        children: [
            {
                path: 'overview',
                name: 'Overview',
                component: () => import("@pages/Profile/Account.vue"),
            },
            {
                path: 'settings',
                name: 'AccountSettings',
                component: () => import("@pages/Profile/Settings.vue")
            }

        ]
    }
];

export default new Router({
    mode: "history",
    history: true,
    base: "/",
    linkExactActiveClass: "active",
    routes,
});
