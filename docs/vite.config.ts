import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'
//https://cn.sveltepress.site/

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          {
            title: 'docs',
            to: '/docs'
          },
        ],
        sidebar: {
          // Add your sidebar configs here
        },
        github: 'https://github.com/jinhuan138/svelte-reader',
        // logo: '/svelte-reader-docs/sveltepress.svg',
      }),
      siteConfig: {
        title: 'svelte-reader',
        description: ' ',
      },
    }),
  ]
})

export default config