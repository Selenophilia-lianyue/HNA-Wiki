import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/HNA-Wiki/',
  title: 'HNA-Wiki',
  description: '我的知识库',
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
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