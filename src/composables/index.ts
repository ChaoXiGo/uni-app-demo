import type { guessRef } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  // 猜你喜欢组件实例
  const guessRef = ref<guessRef>()

  //   触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return { guessRef, onScrolltolower }
}
