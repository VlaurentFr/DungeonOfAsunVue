import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGodsStore = defineStore('gods', () => {
  const god = ref<null | any>(null)
  const panth = ref<null | number>(null)

  return { god, panth }
})
