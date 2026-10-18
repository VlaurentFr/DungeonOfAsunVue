import { useStorage } from '@vueuse/core'

const state = useStorage('consulted-article', [], localStorage, {
  mergeDefaults: true,
  listenToStorageChanges: false // ← coupe la boucle
})

const useViewArticle = () => {
  const isConsulted = (type, id) => {
    return state.value.findIndex((item) => item.type === type && item.id === id.toString()) !== -1
  }

  const consultArticle = (type, id) => {
    state.value.push({ type, id })
  }

  return {
    isConsulted,
    consultArticle
  }
}

export { useViewArticle }
