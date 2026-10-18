import { useStorage } from '@vueuse/core'

const state = useStorage('showed-secret', [], localStorage, {
  mergeDefaults: true
})

const useShowSecret = () => {
  const isShowed = (type, id, i) => {
    return (
      state.value.findIndex((item) => item.type === type && item.id === id && item.index === i) !==
      -1
    )
  }

  const toggleSecret = (type, id, i) => {
    const index = state.value.findIndex(
      (item) => item.type === type && item.id === id && item.index === i
    )
    if (index !== -1) {
      state.value.splice(index, 1)
    } else {
      state.value.push({ type, id, index: i })
    }
  }

  return {
    isShowed,
    toggleSecret
  }
}

export { useShowSecret }
