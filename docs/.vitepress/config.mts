import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RapidAnalysis",
  description: "API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/business-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Business Use Cases', link: '/business-examples' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Processing Documentation',
        items: [
          { text: 'Text Processing', link: '/text-processing' },
          { text: 'Image Processing', link: '/image-processing' },
          { text: 'Numeric Processing', link: '/numeric-processing' }
        ]
      },
      {
        text: 'Generation Documentation',
        items: [
          { text: 'Text Generation', link: '/text-generation' },
          { text: 'Image Generation', link: '/image-generation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
