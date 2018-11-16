import VueRouter from "vue-router"

import Home from "./views/home"
import Hello from "./views/hello"
import UsersIndex from "./views/UsersIndex"

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', name: 'home', component: Home},
        { path: '/hello', name: 'hello', component: Hello},
        { path: '/users', name: 'users.index', component: UsersIndex},
    ]
});

export default router;