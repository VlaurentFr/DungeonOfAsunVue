import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
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
      path: '/Rules/class',
      name: 'rules-class',
      component: () => import('../views/ClassesView.vue')
    },
    {
      path: '/Rules/weapons',
      name: 'rules-weapon',
      component: () => import('../views/RulesWeaponView.vue')
    },
    {
      path: '/Rules/spell',
      name: 'rules-spell',
      component: () => import('../views/SpellView.vue')
    },
    {
      path: '/Rules/gear',
      name: 'rules-gear',
      component: () => import('../views/RulesGearView.vue')
    },
    // UNIVERS
    {
      path: '/Univers/story',
      name: 'univers-story',
      component: () => import('../views/UniversStoryView.vue')
    },
    {
      path: '/Univers/gods',
      name: 'univers-gods',
      component: () => import('../views/MythView.vue')
    },
    {
      path: '/Univers/godsDetails',
      name: 'univers-god-detail',
      component: () => import('../views/MythDetailsView.vue')
    },
    {
      path: '/Univers/panth',
      name: 'univers-panth',
      component: () => import('../views/PanthView.vue')
    },
    {
      path: '/Univers/panthDetails',
      name: 'univers-panth-detail',
      component: () => import('../views/PanthDetailsView.vue')
    },
    {
      path: '/Univers/races',
      name: 'univers-races',
      component: () => import('../views/UniversRacesView.vue')
    },
    {
      path: '/Univers/faction',
      name: 'univers-faction',
      component: () => import('../views/FactionView.vue')
    },
    {
      path: '/Univers/orga',
      name: 'univers-orga',
      component: () => import('../views/OrganisationView.vue')
    },
    // BESTIAIRE
    {
      path: '/Bestiary',
      name: 'bestiary',
      component: () => import('../views/BestiaryView.vue')
    },
  ]
})

export default router
