import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/HNA-Wiki/',
  title: 'HNA-Wiki',
  head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }]
],
  description: '我的知识库',
  themeConfig: {
    logo: '/logo.png',  // 顶部导航栏的 Logo
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    socialLinks: [
    { icon: 'github', link: 'https://github.com/Selenophilia-lianyue/HNA-Wiki' }
  ],
  footer: {
    message: '基于 VitePress 构建',
    copyright: 'Copyright © 2026 HNA Wiki'
  },
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '配置项', link: '/api/config' },
            { text: '函数', link: '/api/functions' }
          ]
        }
      ]
    },
    // 本地搜索
    search: {
      provider: 'local'
    }
  }
})