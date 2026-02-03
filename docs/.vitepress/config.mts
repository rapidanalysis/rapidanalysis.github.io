import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// npm run docs:dev

export default defineConfig({




head: [
    [
      'script',
      { id: 'mcjs'},
      `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/553ae2d514d12505e23db428e/f98c639390a91e5a1611f61b3.js");`
    ]
  ],
  // https://www.amazon.com.au/stores/page/F2944BEC-3CF0-4661-9124-EC050E996529?ref_=cm_sw_r_ud_ast_store_XTAYGJ271ABTXWQ6EV9D
  title: "RapidAnalysis",
  appearance: "force-dark",
  description: "API Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://store.rapidanalysis.com/' }
    ],

    footer: {
      message: 'https://RapidAnalysis.com',
      copyright: 'Copyright © 2023-present Weburban PTY LTD'
    },

    sidebar: [
      {
        text: 'Xerxes Pi',
        items: [          
          { text: 'Documentation', link: '/xerxes-pi-hardware-setup' },
          { text: 'Peripherals', link: '/xerxes-pi-hardware-peripherals' },
          { text: 'Heatsinks', link: '/xerxes-pi-heatsink-hardware' },
          { text: 'Racks', link: '/xerxes-pi-racks-hardware' },
          { text: 'Cases', link: '/xerxes-pi-cases-hardware' },
        ]
      }, 
      {
        text: 'Xerxes ML',
        items: [          
          { text: 'Documentation', link: '/xerxes-ml-hardware-setup' },
          { text: 'Peripherals', link: '/xerxes-ml-hardware-peripherals' },
          { text: 'Heatsinks', link: '/xerxes-ml-heatsink-hardware' },
          { text: 'Racks', link: '/xerxes-ml-racks-hardware' },
          { text: 'Cases', link: '/xerxes-ml-cases-hardware' },
        ]
      }, 
      {
        text: 'Xerx86 Nano-ITX',
        items: [          
          { text: 'Documentation', link: '/xerx86-hardware-setup' },
          { text: 'Peripherals', link: '/xerx86-hardware-peripherals' },
          { text: 'Cases', link: '/xerx86-cases-hardware' },
        ]
      },

      // {
      //   text: 'Cloud ML',
      //   items: [
      //     { text: 'Getting Started', link: '/getting-started' },
      //     { text: 'API Examples', link: '/text-example' },
      //     { text: 'Processing', link: '/processing' },
      //     { text: 'Text Generation', link: '/text-generation' }
      //   ]
      // },      
      // {
      //   text: '3rd Party Apps',
      //   items: [
      //     { text: 'On Google Sheets', link: '/tools' },
      //     { text: 'On Slack', link: 'https://github.com/rapidanalysis/slack' },
      //     { text: 'On Discord', link: 'https://github.com/rapidanalysis/discord' }
      //   ]
      // },

      {
        text: 'Business',
        items: [
          { text: 'About Us', link: '/pitch' },
          { text: 'Privacy', link: '/privacy' },
          { text: 'Terms of Service', link: '/tos' },
          //{ text: 'Jobs', link: '/jobs' },
          { text: 'Contact Us', link: '/contact' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rapidanalysis' }
    ]
  }
})
