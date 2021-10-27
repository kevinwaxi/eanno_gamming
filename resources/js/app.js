require("./bootstrap");

window.Vue = require("vue").default;

import "view-design/dist/styles/iview.css";

import ViewUI from "view-design";
import VueFormulate from "@braid/vue-formulate";
import auth from "./modules/auth";
import common from "./modules/common";
import locale from "view-design/dist/locale/en-US";
import router from "./routes/index";
import store from "./store/index";

Vue.use(ViewUI, { locale });
Vue.use(VueFormulate, {
    classes: {
        outer: "form-group",
        input: "form-control",
        inputHasErrors: "is-invalid",
        help: "form-text text-muted",
        errors: "list-unstyled text-danger",
    },
});

Vue.mixin(common);

Vue.component('pagination', require('laravel-vue-pagination'));

router.beforeEach((to, from, next) => {
    (window.document.title =
        to.meta && to.meta.title ? to.meta.title : "Eanno Gamming"),
        next();
});
Vue.prototype.$auth = new auth(window.user);

const app = new Vue({
    el: "#app",
    router: router,
    store: store,
});
