/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
  }
}

import MySwiper from './MySwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    MySwiper: typeof MySwiper
  }
}
