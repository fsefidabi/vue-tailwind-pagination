// config.js

module.exports = {
  locales: {
    '/': {
      title: 'Vue Tailwind Pagination',
      description: 'Documentation site for the Vue Tailwind Pagination component.',
      base: '/vue-tailwind-pagination/'
    }
  },

  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    search: false,
    sidebar: [
      '/getting-started',
      '/demos',
      '/configuration',
    ],
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Demos', link: '/demos' },
          { text: 'Configuration', link: '/configuration' },
          // external link to git repo...again
          { text: 'GitHub', link: 'https://github.com/fsefidabi/vue-tailwind-pagination' }
        ],
      }
    }
  }
}
