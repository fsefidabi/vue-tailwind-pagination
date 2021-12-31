import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/farzaneh/Workspace/web-dev/projects/components/vue/vue-tailwind-pagination/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/farzaneh/Workspace/web-dev/projects/components/vue/vue-tailwind-pagination/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
