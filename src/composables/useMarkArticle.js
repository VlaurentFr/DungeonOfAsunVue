import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

const state = useStorage('marked-article', [], localStorage, {
  mergeDefaults: true
})

const useMarkArticle = () => {
  const markedArticle = computed(() => {
    return state.value
  })

  const markArticle = (type, id) => {
    state.value.push({ type, id })
  }

  const unmarkArticle = (type, id) => {
    const index = state.value.findIndex((item) => item.type === type && item.id === id)
    state.value.splice(index, 1)
  }

  return {
    markedArticle,
    markArticle,
    unmarkArticle
  }
}

export { useMarkArticle }
