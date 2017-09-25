import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Players from '@/components/Players'
import Teams from '@/components/Teams'
import Heroes from '@/components/Heroes'
import Hero from '@/components/Hero'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

export default new Router({
  routes: [
    {
      path: '/', name: 'home', component: Hello
    },
    {
      path: '/players', name: 'players', component: Players
    },
    {
      path: '/teams', name: 'teams', component: Teams
    },
    {
      path: '/heroes', name: 'heroes', component: Heroes
    },
    {
      path: '/heroes/:localized_name', name: 'hero', component: Hero
    }
  ],
  mode: 'history',
  scrollBehavior,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active'
})
