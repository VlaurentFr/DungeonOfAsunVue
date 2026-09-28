import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import ARTICLES from '@/data/articles_index.json'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollToTop) {
      return { el: to.meta.scrollToTop, top: 80 }
    }
  },
  routes: [
    {
      path: '/SpellTree',
      name: 'SpellTree',
      component: () => import('../oldViews/SpellTreeView.vue')
    },
    {
      path: '/',
      redirect: '/accueil'
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('../views/WikiView.vue'),
      meta: {
        breadcrumb: 'Accueil'
      }
    },
    {
      path: '/wiki-histoire',
      name: 'wiki-histoire',
      component: () => import('../views/WikiHistoryView.vue'),
      meta: {
        breadcrumb: 'Histoire'
      },
      children: [
        {
          path: ':id',
          name: 'wiki-histoire-article',
          component: () => import('../views/WikiHistoryArticleView.vue'),
          meta: {
            breadcrumb: (route: any) => ARTICLES.find(article => article.id.toString() === route.params.id)?.title
          }
        },
      ]
    },
    {
      path: '/Map',
      name: 'map',
      component: () => import('../oldViews/MapView.vue')
    },
    {
      path: '/Connect',
      name: 'connect',
      component: () => import('../oldViews/ConnectView.vue')
    },
    {
      path: '/Home',
      name: 'home',
      redirect: '/'
    },
    {
      path: '/Wizard',
      name: 'wizard',
      component: () => import('../oldViews/WizardView.vue')
    },
    // RULES
    {
      path: '/Rules/creation',
      name: 'rules-creation',
      component: () => import('../oldViews/CreationView.vue')
    },
    {
      path: '/Rules/fight',
      name: 'rules-fight',
      component: () => import('../oldViews/FightView.vue')
    },
    {
      path: '/Rules/class',
      name: 'rules-class',
      component: () => import('../oldViews/ClassesView.vue')
    },
    {
      path: '/Rules/class2',
      name: 'rules-class2',
      component: () => import('../oldViews/Classes2View.vue')
    },
    {
      path: '/Rules/weapons',
      name: 'rules-weapon',
      component: () => import('../oldViews/WeaponView.vue')
    },
    {
      path: '/Rules/spell',
      name: 'rules-spell',
      component: () => import('../oldViews/SpellView.vue')
    },
    {
      path: '/Rules/dons',
      name: 'rules-dons',
      component: () => import('../oldViews/DonsView.vue')
    },
    {
      path: '/Rules/gear',
      name: 'rules-gear',
      component: () => import('../oldViews/GearView.vue')
    },
    {
      path: '/Rules/legendary-gear',
      name: 'rules-legendary-gear',
      component: () => import('../oldViews/LegendaryGearView.vue')
    },
    // UNIVERS
    {
      path: '/Univers/story',
      name: 'univers-story',
      component: () => import('../oldViews/StoryView.vue')
    },
    {
      path: '/Univers/gods',
      name: 'univers-gods',
      component: () => import('../oldViews/MythView.vue')
    },
    {
      path: '/Univers/godsDetails',
      name: 'univers-god-detail',
      component: () => import('../oldViews/MythDetailsView.vue')
    },
    // {
    //   path: '/Univers/panth',
    //   name: 'univers-panth',
    //   component: () => import('../views/PanthView.vue')
    // },
    // {
    //   path: '/Univers/panthDetails',
    //   name: 'univers-panth-detail',
    //   component: () => import('../views/PanthDetailsView.vue')
    // },
    {
      path: '/Univers/races',
      name: 'univers-races',
      component: () => import('../oldViews/RacesView.vue')
    },
    {
      path: '/Univers/faction',
      name: 'univers-faction',
      component: () => import('../oldViews/FactionView.vue')
    },
    {
      path: '/Univers/orga',
      name: 'univers-orga',
      component: () => import('../oldViews/OrganisationView.vue')
    },
    // BESTIAIRE
    {
      path: '/Bestiary',
      name: 'bestiary',
      component: () => import('../oldViews/BestiaryView.vue')
    },
  ]
})

export default router
