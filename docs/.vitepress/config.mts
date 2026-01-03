import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SOP",
  description: "周周黑客松活动执行 SOP",
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/01mvp/sop/edit/main/docs/:path'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '组织者手册', link: '/organizer/' },
      { text: '角色列表', link: '/roles/' }
    ],
    search : {
      provider: 'local'
    },
    sidebar: [
      {
        text: '🙌 志愿者指南',
        items: [
          { text: '岗位快速导航', link: '/#navigation' },
          { text: '志愿者须知', link: '/#volunteer-notices' },
          {
            text: '岗位角色 SOP',
            collapsed: true,
            items: [
              {
                text: '🏃 核心保障组',
                collapsed: false,
                items: [
                  { text: '主持人', link: '/roles/mc' },
                  { text: '后勤/签到', link: '/roles/logistics' },
                  { text: '计时/场控', link: '/roles/timekeeper' },
                  { text: '宣发推送', link: '/roles/pr' },
                  { text: '摄影', link: '/roles/photo' },
                  { text: '物料员', link: '/roles/material' },

                ]
              },
              {
                text: '🛠️ 技术与内容组',
                collapsed: false,
                items: [
                  { text: '技术支持', link: '/roles/tech-support' },
                  { text: '作品管理员', link: '/roles/submission' },
                  { text: '现场电脑操作员', link: '/roles/operator' },
                  { text: '分享嘉宾', link: '/roles/speaker' },
                  { text: '讲师', link: '/roles/demo' },
                ]
              },
              {
                text: '🤝 统筹与外联',
                collapsed: false,
                items: [
                  { text: '赞助商对接', link: '/roles/sponsor' },
                  { text: '鼓励师/顾问', link: '/roles/advisor' },
                ]
              }
            ]
          }
        ]
      },
      {
        text: '🏗️ 组织者手册',
        items: [
          { text: '活动主理人 SOP', link: '/organizer/' },
          { text: '策划指南与模板', link: '/organizer/planning' },
          { text: '活动类型与资源', link: '/organizer/resources' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/01mvp/sop' }
    ]
  },
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    config(md) {
      md.use(taskLists, { enabled: true })
    }
  }
})
