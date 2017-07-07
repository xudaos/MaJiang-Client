import Vue from 'vue'
import App from './App.vue'

Vue.directive('height', {
  bind: function (el, binding) {
    el.style.height = screenHeight * binding.value / 100 + 'px'
  },
  inserted: function (el, binding) {
    el.style.height = screenHeight * binding.value / 100 + 'px'
  },
  update: function (el, binding) {
    el.style.height = screenHeight * binding.value / 100 + 'px'
  },
  componentUpdated: function (el, binding) {
    el.style.height = screenHeight * binding.value / 100 + 'px'
  }
})

Vue.directive('square', {
  bind: function (el, binding) {
    if (binding.value === 1) {
      el.style.height = el.clientWidth + 'px'
    } else if (binding.value === 2) {
      el.style.width = el.clientHeight + 'px'
    } else if (binding.value === 3) {
      if (el.clientWidth > el.clientHeight) {
        el.style.width = el.clientHeight + 'px'
      } else if (el.clientWidth < el.clientHeight) {
        el.style.height = el.clientWidth + 'px'
      }
    }
  },
  inserted: function (el, binding) {
    if (binding.value === 1) {
      el.style.height = el.clientWidth + 'px'
    } else if (binding.value === 2) {
      el.style.width = el.clientHeight + 'px'
    } else if (binding.value === 3) {
      if (el.clientWidth > el.clientHeight) {
        el.style.width = el.clientHeight + 'px'
      } else if (el.clientWidth < el.clientHeight) {
        el.style.height = el.clientWidth + 'px'
      }
    }
  },
  update: function (el, binding) {
    if (binding.value === 1) {
      el.style.height = el.clientWidth + 'px'
    } else if (binding.value === 2) {
      el.style.width = el.clientHeight + 'px'
    } else if (binding.value === 3) {
      if (el.clientWidth > el.clientHeight) {
        el.style.width = el.clientHeight + 'px'
      } else if (el.clientWidth < el.clientHeight) {
        el.style.height = el.clientWidth + 'px'
      }
    }
  },
  componentUpdated: function (el, binding) {
    if (binding.value === 1) {
      el.style.height = el.clientWidth + 'px'
    } else if (binding.value === 2) {
      el.style.width = el.clientHeight + 'px'
    } else if (binding.value === 3) {
      if (el.clientWidth > el.clientHeight) {
        el.style.width = el.clientHeight + 'px'
      } else if (el.clientWidth < el.clientHeight) {
        el.style.height = el.clientWidth + 'px'
      }
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
