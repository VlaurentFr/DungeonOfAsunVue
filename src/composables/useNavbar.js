import { useScroll } from "@vueuse/core"
import { ref, watch } from "vue"

const hasNavbar = ref(true)

const useNavbar = () => {
  const { directions } = useScroll(document)
  
  watch(directions, (newValue) => {
    if(newValue){
      if(newValue.top) {
        hasNavbar.value = true;
      } else if(newValue.bottom) {
        hasNavbar.value = false;
      }
    }
  })
}

export { useNavbar, hasNavbar }