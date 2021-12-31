<template>
  <div id="app">
    <vueTailwindPagination />
  </div>
</template>

<script>
import Vue from 'vue'
import vueTailwindPagination from '@/vue-tailwind-pagination.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    vueTailwindPagination
  }
})
</script>
