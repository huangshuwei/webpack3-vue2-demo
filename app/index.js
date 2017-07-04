import Vue from 'vue'
import APP from './components/App.vue'
import router from './router'
/*import store from './store'*/
import NProgress from 'nprogress'; // Progress 进度条

import './css/index.css'
import 'nprogress/nprogress.css';// Progress 进度条 样式


import { Menu, Submenu,MenuItem,MenuItemGroup } from 'element-ui'
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)


router.beforeEach((to, from, next) => {

    NProgress.start();

    next();

    NProgress.done();
})

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});

new Vue({
        el: '#app',
   /*     store,*/
        router,
        render: h => h(APP)
})


