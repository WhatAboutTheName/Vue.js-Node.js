import { createWebHashHistory, createRouter } from "vue-router";
import Main from '@/components/main/main';
import CreateProduct from '@/components/create-product/create-product';
import Cart from '@/components/cart/cart';
import Order from '@/components/order/order';
import LogIn from '@/components/auth/log-in/log-in';
import SignUp from '@/components/auth/sign-up/sign-up';
import Errore from '@/components/errors/errors';
import userStore from '@/store/user-store';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/create-product',
            name: 'create-product',
            component: CreateProduct,
            beforeEnter: (to, from, next) => {
                if(userStore.getters.isAuth && userStore.getters.isAdmin) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            beforeEnter: (to, from, next) => {
                if(userStore.getters.isAuth) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            beforeEnter: (to, from, next) => {
                if(userStore.getters.isAuth) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/log-in',
            name: 'log-in',
            component: LogIn,
            beforeEnter: (to, from, next) => {
                if(userStore.getters.isAuth) {
                    next(false);
                } else {
                    next();
                }
            }
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUp,
            beforeEnter: (to, from, next) => {
                if(userStore.getters.isAuth) {
                    next(false);
                } else {
                    next();
                }
            }
        },
        {
            path: '/errore',
            name: 'errore',
            component: Errore
        }
    ]
});

export default router;
