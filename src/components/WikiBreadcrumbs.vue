<template>
  <section id="wiki_search" :class="{'hasNavbar': hasNavbar}">
    <div>
      <ol>
      <li>
        <router-link to="/wiki">Wiki</router-link>
      </li>
      
      <li v-for="(crumb, index) in allCrumbs" :key="index">
        <!-- Cas normal : Lien cliquable -->
        <!-- <router-link v-if="!crumb.isDropdown" :to="crumb.path">
          {{ crumb.label }}
        </router-link> -->
        <router-link :to="{path: crumb?.path ?? '/'}">
          {{ crumb?.label }}
        </router-link>

        <!-- Cas tronqué : Menu au survol (...) -->
        <!-- <div v-else class="dropdown">
          <span class="ellipsis">...</span>
          <div class="dropdown-menu">
            <router-link 
              v-for="(hidden, hIdx) in crumb.hiddenItems" 
              :key="hIdx" 
              :to="hidden.path"
              class="dropdown-item"
            >
              {{ hidden.label }}
            </router-link>
          </div>
        </div> -->
      </li>
    </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { hasNavbar } from '@/composables/useNavbar';
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { OnClickOutside } from '@vueuse/components'
import ARTICLES from '@/data/articles_index.json'
import { useFocusWithin } from '@vueuse/core';

const route = useRoute()
const router = useRouter()

// 1. Récupération de tous les chemins valides
const allCrumbs = computed(() => {
  console.log(route)
  const activeCrumbs =  route.matched
    .filter((item) => item.meta && item.meta.breadcrumb)
    .map((item) => {
      // 1. Gestion mixte : exécute la fonction si dynamique, sinon prend la chaîne
      const label = typeof item.meta.breadcrumb === 'function'
        ? item.meta.breadcrumb(route)
        : item.meta.breadcrumb

      // 2. Résolution du chemin (remplace :id par la vraie valeur s'il y en a)
      let resolvedPath = item.path
      Object.keys(route.params).forEach((key) => {
        if(route.params[key]){
          resolvedPath = resolvedPath.replace(`:${key}`, route.params[key] as string)
        }
      })

      return {
        label,
        path: resolvedPath,
      }
    })

    console.log(activeCrumbs)

    const crumbs = activeCrumbs[0].path.split('/')
  console.log(crumbs)
  console.log(crumbs.slice(0 , crumbs.length - 1))
  const other = crumbs.slice(0 , crumbs.length - 1)

    let tab = other.map((crumb) => {
      const pathRouting = router.getRoutes().find(r => '/' + crumb === r.path && r.path !== '/')
      if (pathRouting) {
        const label = typeof pathRouting.meta.breadcrumb === 'function'
          ? pathRouting.meta.breadcrumb(route)
          : pathRouting.meta.breadcrumb
  
        // 2. Résolution du chemin (remplace :id par la vraie valeur s'il y en a)
        let resolvedPath = pathRouting.path
        Object.keys(route.params).forEach((key) => {
          if(route.params[key]){
            resolvedPath = resolvedPath.replace(`:${key}`, route.params[key] as string)
          }
        })
  
        return {
          label,
          path: resolvedPath,
        }
      }
    })

    tab = tab.filter(item => !!item)
    console.log(tab)
    return [...tab, ...activeCrumbs]
})

// 2. Logique de troncature si plus de 4 éléments
const visibleCrumbs = computed(() => {
  const crumbs = allCrumbs.value
  if (crumbs.length <= 4) return crumbs.map(crumb => {return { isDropdown: false, hiddenItems: [], ...crumb }})

  // On garde le premier, et les deux derniers
  return [
    { isDropdown: false, hiddenItems:[], ...crumbs[0] },
    { isDropdown: true, hiddenItems: crumbs.slice(1, -2), ...crumbs[0] },
    { isDropdown: false, hiddenItems:[], ...crumbs.slice(-2) }
  ]
})

</script>

<style lang="css" scoped>
/* Alignement de la liste */
ol {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
  margin-bottom: 32px;
}

#wiki_search li:not(:last-child)::after {
  content: ">";
  margin-left: 8px;
  color: #ccc;
}

#wiki_search li a {
  text-decoration: none;
  color: white;
}
#wiki_search li a:hover {
  text-decoration: none;
  color: var(--secondaryColor);
}

/* Gestion du menu au survol (...) */
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.ellipsis {
  padding: 0 4px;
  font-weight: bold;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;
  min-width: 120px;
}

.dropdown-item {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* Affichage au survol */
.dropdown:hover .dropdown-menu {
  display: flex;
  flex-direction: column;
}
</style>