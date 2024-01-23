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
        text: 'Start Here',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'API Examples', link: '/text-example' },
          { text: 'Example: Chat LLM', link: '/chat' },
          { text: 'Example: Chat LLM (with PDF)', link: '/chat-rag' },
          { text: 'Example: Text Analysis', link: '/academic-analysis' },
          { text: 'Example: PDF Extraction', link: '/pdf-extraction' },
          { text: 'Business Use Cases', link: '/business-examples' }
        ]
      },
      {
        text: 'RapidAnalysis Apps',
        items: [
          { text: 'Google Sheets', link: '/tools' },
          { text: 'Slack', link: '/slack' }
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
        text: 'Generation Docs 🤖',
        items: [
          { text: 'Text Generation', link: '/text-generation' }
        ]
      },
      {
        text: 'Legal 🦉',
        items: [
          { text: 'Privacy', link: '/privacy' },
          { text: 'Terms of Service', link: '/tos' },
          { text: 'Jobs', link: '/jobs' },
          { text: 'Contact Us', link: '/contact' },
        ]
      }

      // {
      //   text: 'Edge Hardware 🤖',
      //   items: [
      //     { text: 'Use Cases', link: '/hardware-use-cases' },
      //     { text: 'Hardware Setup', link: '/hardware-setup' },
      //     { text: 'Hardware API', link: '/hardware-api' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rapidanalysis' }
    ]
  }
})
