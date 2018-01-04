import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './Pages/Index'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode:'history',
  routes:[{
    path:'/',
    component:IndexPage
  }]
})
new Vue({
  el: '#app',
  router,
  template:'<Layout/>',
  components:{Layout},
  //render: h => h(App)
})
