import  Vue from 'vue'
import  Router from 'vue-router'
import Home from '../components/ExampleComponent'

Vue.use(Router);

const routes = [
    {path:'', component:'Home'}
];

export  default router = new Router({
    routes:routes
});