import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RapidAnalysis",
  description: "API Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/getting-started#getting-started' }
    ],

    footer: {
      message: 'https://rapidanalysis.github.io',
      copyright: 'Copyright © 2023-present Weburban PTY LTD'
    },

    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Register & Sign In', link: '/getting-started#create-an-account-and-sign-in' },
          { text: 'Your API Key', link: '/getting-started#your-api-key' },
          { text: 'Getting Started', link: '/getting-started#getting-started' },
          { text: 'API Examples', link: '/getting-started#api-examples' },
          { text: 'Text API Example', link: '/text-example' },
          { text: 'Business Use Cases', link: '/business-examples' }
        ]
      },
      {
        text: 'Processing Docs 🚀',
        items: [
          { text: 'Text Processing', link: '/text-processing' },
          { text: 'Image Processing', link: '/image-processing' },
          { text: 'Numeric Processing', link: '/numeric-processing' }
        ]
      },
      {
        text: 'Generation Docs 🦉',
        items: [
          { text: 'Text Generation', link: '/text-generation' },
          { text: 'Image Generation', link: '/image-generation' }
        ]
      },
      {
        text: 'Edge Hardware 🤖',
        items: [
          { text: 'Use Cases', link: '/hardware-use-cases' },
          { text: 'Hardware Setup', link: '/hardware-setup' },
          { text: 'Hardware API', link: '/hardware-api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rapidanalysis' }
    ]
  }
})
