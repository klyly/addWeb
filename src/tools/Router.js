import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Store from "../tools/Storage";
import Order from "../components/order/Order";
import Goods from "../components/goods/Goods";
import AddGood from "../components/goods/AddGood";
const Router = createRouter({
    history:createWebHashHistory(),
    routes:[{
        path:"/login",
        component:Login,
        name:"login"
    },
        {
            path: '/home',
            component: Home,
            name: "home",
            children:[
                {
                    path:'order/:type',
                    component:Order,
                    name:"Order"
                },
                {
                    path:'goods/:type',
                    component:Goods,
                    name:"Goods"
                },
                {
                    path:'addGood/:type',
                    component:AddGood,
                    name:"AddGood"
                },
            ],
            redirect:'/home/order/0'
        },
        {
            path:"/order",
            component:Order,
            name:"Order"
        },
        {
            path:"/goods/:type",
            component:Goods,
            name:"Goods"
         },
        {
            path:"/addGood/:type",
            component:AddGood,
            name:"AddGood"
        }
    ]
})

Router.beforeEach((from) =>{
    let isLogin =Store.getters.isLogin;
    if (isLogin || from.name == 'login'){
        return true;
    }else {
        return {name: 'login'}
    }
})
export default Router;