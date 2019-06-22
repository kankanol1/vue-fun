import Vue from 'vue';
import Router from 'vue-router';
// @ts-ignore
// import {router} from 'router';
import Login from '@/page/login.vue';

// import Home from './views/Home.vue';
import MainPage from '@/page/mainPage.vue';
import Shouye from '@/page/shouye.vue';
import Find from '@/page/find.vue';
import My from '@/page/my.vue';
import My1 from '@/page/my1.vue';
import My2 from '@/page/my2.vue';
import Myset from '@/page/myset.vue';
// import Vue from 'Vue';
import VueCookies from 'vue-cookies';
import App from '@/App.vue';


// import Axios from 'axios';
// Vue.use(axios);
Vue.use(Router);
Vue.use(VueCookies);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        // // {
        //   path: '/',
        //   name: 'App',
        //   component: MainPage,
        //   redirect:{name:'login'}
        // },

        {
            path: '/',
            name: 'App',
            component: MainPage,
            redirect: {name: 'login'},
            children: [
                {
                    path: '/mainPage',
                    name: 'mainPage',
                    component: MainPage,
                },
                {
                    path: '/shouye',
                    name: 'shouye',
                    component: Shouye,
                    children: [
                        {
                            path: '/my1',
                            name: 'my1',
                            component: My1,
                        },
                        {
                            path: '/my2',
                            name: 'my2',
                            component: My2,
                        },

                    ],
                },
                {
                    path: '/my',
                    name: 'my',
                    component: My,
                },
                {
                    path: '/find',
                    name: 'find',
                    component: Find,
                },
                {
                    path: '/myset',
                    name: 'myset',
                    component: Myset,
                },
            ],
        },

        /*   {
             path: '/',
             name: 'home',
             component: Home,
           },
           {
             path: '/about',
             name: 'about',
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue'),
           },*/
    ],
});


/*router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (router.app.$cookies.get("status") !== "logined") {
            next({
                path: '/login',
                query: {redirect: to.fullPath} // 把要跳转的地址作为参数传到下一步
            })
        } else {
            next()
        }
    } else {
        if (to.query && to.query.redirect) {
            if (router.app.$cookies.get("status") === "logined") {
                next({path: to.query.redirect})
            } else {
                next()
            }
        } else {
            next() // 确保一定要调用 next()
        }
    }
});*/
