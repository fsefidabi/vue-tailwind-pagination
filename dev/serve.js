import '../src/assets/styles/main.css'

const vueTailwindPagination = {
  install(Vue, options = {}) {
    Vue.component('vueTailwindPagination', vueTailwindPagination)
  }
}

export default vueTailwindPagination

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTailwindPagination)
}
