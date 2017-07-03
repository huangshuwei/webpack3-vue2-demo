import Vue from "vue";
import VueRouter from "vue-router";


const intro = r => require.ensure([], () => r(require('../components/intro.vue')), 'intro');
const menu1 = r => require.ensure([], () => r(require('../components/menu1.vue')), 'menu1');
const menu2 = r => require.ensure([], () => r(require('../components/menu2.vue')), 'menu2');
const menu3 = r => require.ensure([], () => r(require('../components/menu3.vue')), 'menu3');
const menu4 = r => require.ensure([], () => r(require('../components/menu4.vue')), 'menu4');
const menu5 = r => require.ensure([], () => r(require('../components/menu5.vue')), 'menu5');

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: '',
    routes: [
        { path: '/', redirect: '/intro' }, // 默认路由
        { path: '/intro', component: intro },
        { path: '/menu1', component: menu1 },
        { path: '/menu2', component: menu2 },
        { path: '/menu3', component: menu3 },
        { path: '/menu4', component: menu4 },
        { path: '/menu5', component: menu5 },

        {
            path: '*',
            redirect: '/intro'
        }
        /*  {
         path: '*', component: {
         template: '<div>抱歉，没有您要的页面。</div>'
         }
         }*/
    ]
})