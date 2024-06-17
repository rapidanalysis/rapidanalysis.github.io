import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// npm run docs:dev

export default defineConfig({
  title: "RapidAnalysis",
  appearance: "force-dark",
  description: "API Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://store.rapidanalysis.com' }
    ],

    footer: {
      message: 'https://RapidAnalysis.com',
      copyright: 'Copyright © 2023-present Weburban PTY LTD'
    },

    sidebar: [
      {
        text: 'Hardware',
        items: [          
          { text: 'Documentation', link: '/hardware-setup' },
          { text: 'Peripherals', link: '/hardware-peripherals' },
          { text: 'Future Projects', link: '/hardware-future-projects' }
        ]
      },
      {
        text: 'Software',
        items: [
          { text: 'Documentation', link: '/software-setup' }
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
          { text: 'On Slack', link: 'https://github.com/rapidanalysis/slack' },
          { text: 'On Discord', link: 'https://github.com/rapidanalysis/discord' }
        ]
      },
      {
        text: 'Business 🦉',
        items: [
          { text: 'About Us', link: '/pitch' },
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
