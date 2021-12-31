# Vue Tailwind Pagination

[![npm version](https://badge.fury.io/js/vue-tailwind-pagination.svg)](https://badge.fury.io/js/vue-tailwind-pagination)

A VueJs pagination component, inspired by [react-pagination](https://github.com/mayankshubham/react-pagination) repository.


## Dependencies
-   Vue.js (v2.x+)
-   TailwindCss (v2.x+)
-   PostCSS (v7.x+)


## Installation
If you use `npm`:
```bash
npm i vue-tailwind-pagination
```

Or if you prefer to use `yarn`:

```bash
yarn add vue-tailwind-pagination
```


## Usage

### Importing

- **Locally in your component:**
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

- **As a global component in Vue.js**
```js
// main.js

import Vue from 'vue'
import vueTailwindPagination from 'vue-tailwind-pagination'
import 'vue-tailwind-pagination/src/assets/styles/main.css'

Vue.use(vueTailwindPagination)
```

- **As a global component in Nuxt.js**
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

### Basic Usage

The three `total-items-count`, `items-per-page` and `current-page` props are required props with `Number` type.

```vue
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
        totalItems: 0,
        itemsPerPage: 0,
        currentPage: 1
      }
    }
  }
</script>
```

## Configurations

You can change the defined props and set them tp your desired values to achieve your customized pagination. 
Find the available props in the below table.

-   **Props**

| Name                 | Type        | Required    | Default value | Description     |
| -------------------- | ----------- | ----------- | ------------- | ------------- |
| totalItemsCount      | Number      | true        | -             | The total number of rows (items) in your table. The Min value is 0. |
| itemsPerPage         | Number      | true        | -             | The number of rows (items) that will be shown in each page of the table. The Min value is 1. |
| siblingCount         | Number      | false       | 2             | The number of sibling pages to show in pagination component. The Min value is 1. |
| currentPage          | Number      | false       | 1             | The current page number. The Min value is 1. |
| hasFirstLastButtons  | Boolean     | false       | true          | Defines if the pagination component should have the _go to first_ and _go to last_ pages icons. |
| hasNextPrevButtons   | Boolean     | false       | true          | Defines if the pagination component should have the _previous_ and _next_ pages icons. |
| theme                | String      | false       | basic         | Defines the pagination theme. The available themes are: `basic`, `rounded`, and `outlined`. While the basic theme has no background for pages numbers, the other two themes set background color. The `rounded` theme sets the fully rounded (circle) background, but the `outlined` theme sets a background with curvy corners. |
| disabledColor        | String      | false       | #a8a8a8       | The color for disabled icons.           |
| iconColor            | String      | false       | #000          | The color for icons.            |
| activeColor          | String      | false       | #000          | The color of active pages numbers.       |
| activeBorderColor    | String      | false       | transparent   | The border color of active pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
| activeBackgroundColor| String      | false       | transparent   | The background color of active pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
| inactiveColor        | String      | false       | #acacac       | The color of inactive pages numbers.       |
| inactiveBorderColor  | String      | false       | transparent   | The border color of inactive pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
| inactiveBackgroundColor| String    | false       | transparent   | The background color of inactive pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
