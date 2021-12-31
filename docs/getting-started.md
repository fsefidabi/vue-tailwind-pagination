# Getting Started

## Installation

You can install via `npm` or `yarn`:
```bash
npm i vue-tailwind-pagination
```
or

```bash
yarn add vue-tailwind-pagination
```

#### Global Component
Import `vue-tailwind-pagination` as a global component:

```js
// main.js

import vueTailwindPagination from 'vue-tailwind-pagination'
import 'vue-tailwind-pagination/src/assets/styles/main.css'

Vue.use(vueTailwindPagination)
```

#### Local Component
Import `vue-tailwind-pagination` locally into your own component:

```vue
<!--   YourComponent.vue   -->

<script>
  import vueTailwindPagination from 'vue-tailwind-pagination'
  import 'vue-tailwind-pagination/src/assets/styles/main.css'
  
  export default {
    name: 'YourComponent',
    components: {
      vueTailwindPagination
    }
  }
</script>
```


## Basic Example

```vue
<!--   YourComponent.vue   -->

<template>
  <vueTailwindPagination 
    :total-items-count="totalItems" 
    :items-per-page="itemsPerPage"
    :current-page="currentPage"
    @pageChanged="currentPage = $event"
  />
</template>

<script>
  export default {
    data () {
      return {
        totalItems: 163,
        itemsPerPage: 15,
        currentPage: 1
      }
    }
  }
</script>
```



## Usage with Nuxt.js

If you want to use it as a global component, create a plugin by creating a file called `vue-tailwind-pagination.js` inside your Nuxt `plugins` directory. Next you need to declare the plugin inside your `nuxt.config.js` file.

```js
// plugins/vue-tailwind-pagination.js

import Vue from 'vue'
import vueTailwindPagination from 'vue-tailwind-pagination'
import 'vue-tailwind-pagination/src/assets/styles/main.css'

Vue.use(vueTailwindPagination)
```

```js
// nuxt.config.js

export default {
  plugins: [
    { src: '~/plugins/vueTailwindPagination' }
  ]
}
```


If you want to use it locally in your component, you can use the method described in [Getting Started-Local Component](#local-component).
