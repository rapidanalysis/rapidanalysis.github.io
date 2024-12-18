import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// npm run docs:dev

export default defineConfig({
head: [    
    [
      'script',
      {
        id: 'mcjs'        
      }
      `
      !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/553ae2d514d12505e23db428e/f98c639390a91e5a1611f61b3.js");
      `
    ]
  ],
  title: "RapidAnalysis",
  appearance: "force-dark",
  description: "API Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://www.amazon.com.au/stores/page/F2944BEC-3CF0-4661-9124-EC050E996529?ref_=cm_sw_r_ud_ast_store_XTAYGJ271ABTXWQ6EV9D' }
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
