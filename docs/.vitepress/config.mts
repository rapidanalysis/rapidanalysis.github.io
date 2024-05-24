import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// npm run docs:dev

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
        text: 'Hardware',
        items: [          
          { text: 'Darius Documentation', link: '/hardware-setup' },
          { text: 'Darius Peripherals', link: '/hardware-peripherals' },
          { text: 'Future Projects', link: '/hardware-future-projects' }
        ]
      },
      {
        text: 'Software',
        items: [
          { text: 'Software Setup', link: '/software-setup' },
          { text: 'Software API', link: '/software-api' },
          { text: 'Pro Version', link: '/software-pro' }
        ]
      },
      {
        text: 'Cloud ML',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'API Examples', link: '/text-example' },
          { text: 'Example: Chat LLM', link: '/chat' },
          { text: 'Example: Chat LLM (context)', link: '/chat-rag' },
          { text: 'Example: Text Analysis', link: '/academic-analysis' },
          { text: 'Example: PDF Extraction', link: '/pdf-extraction' },
          { text: 'Business Use Cases', link: '/business-examples' },
          { text: 'Text Processing', link: '/text-processing' },
          { text: 'Image Processing', link: '/image-processing' },
          { text: 'Numeric Processing', link: '/numeric-processing' },
          { text: 'Text Generation', link: '/text-generation' }
        ]
      },      
      {
        text: '3rd Party Apps',
        items: [
          { text: 'On Google Sheets', link: '/tools' },
          { text: 'On Slack', link: '/slack' },
          { text: 'On Discord', link: '/discord' }
        ]
      },
      {
        text: 'Business 🦉',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Privacy', link: '/privacy' },
          { text: 'Terms of Service', link: '/tos' },
          { text: 'Jobs', link: '/jobs' },
          { text: 'Contact Us', link: '/contact' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rapidanalysis' }
    ]
  }
})
