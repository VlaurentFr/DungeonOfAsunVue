import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/Home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/Wizard',
      name: 'wizard',
      component: () => import('../views/WizardView.vue')
    },
    // RULES
    {
      path: '/Rules/creation',
      name: 'rules-creation',
      component: () => import('../views/RulesCreationView.vue')
    },
    {
      path: '/Rules/fight',
      name: 'rules-fight',
      component: () => import('../views/RulesFightView.vue')
    },
    {
      path: '/Rules/gear',
      name: 'rules-gear',
      component: () => import('../views/RulesGearView.vue')
    },
    // UNIVERS
    {
      path: '/Univers/races',
      name: 'univers-races',
      component: () => import('../views/UniversRacesView.vue')
    },
  ]
})

export default router
