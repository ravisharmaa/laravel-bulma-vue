import  Vue from 'vue'
import  Router from 'vue-router'
import Login from '../components/LoginComponent'
import App from '../components/App'

Vue.use(Router);



export default new Router({
  routes: [
      { path:'', component:Login },
  ]
});