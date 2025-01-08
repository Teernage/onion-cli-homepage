import { defineConfigWithTheme } from 'vitepress';
import escookConfig from '@escook/vitepress-theme/config';

export default defineConfigWithTheme({
  extends: escookConfig,
  title: 'xzx-onion-cli',
  base: '/onion-cli-homepage/',
  appearance: 'dark',
  head: [['link', { rel: 'icon', href: '/onion-cli-homepage/img/icon.svg' }]],
  themeConfig: {
    musicBall: {
      src: '/onion-cli-homepage/mp3/永远同在.mp3',
      autoplay: true,
      loop: true,
    },
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: {
      '/docs/detail': [
        {
          text: '快速开始',
          items: [
            {
              text: 'web page(web项目模版)',
              link: '/docs/detail/web',
            },
            {
              text: 'chrome crx(chrome插件模版)',
              link: '/docs/detail/chrome',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
