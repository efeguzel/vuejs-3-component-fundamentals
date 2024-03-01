const app = Vue.createApp({

})
.component("click-counter", {
  template: '#click-counter-button',
  data() {
    return {
      count:0,
      
    }
  },
})
.mount('#app')