import Vue from 'vue'
import MarqueeText from 'vue-marquee-text-component'

export default (context, inject) => {
  if (process.client) {
    Vue.component('MarqueeText', MarqueeText)
  }
}
