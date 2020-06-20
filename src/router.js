import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  root: '/',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/activate/:id',
    //   name: 'activate',
    //   component: () => import(/* webpackChunkName: "activate" */ './components/Events/Links.vue'),
    //   props: true
    // },
    // {
    //   path: '/test/:id',
    //   name: 'test',
    //   component: TestIndex, // () => import(/* webpackChunkName: "activate" */ './components/Tests/Main.vue'),
    //   children: [
    //     // {
    //     //   path: '',
    //     //   name: 'testindex',
    //     //   component: TestIndex
    //     // },
    //     {
    //       name: 'step',
    //       path: ':step',
    //       component: Step
    //     }
    //   ],
    //   props: true
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
