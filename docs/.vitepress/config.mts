import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SOP",
  description: "SOP for hackathonweekly",
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/01mvp/sop-vitepress/edit/main/docs/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SOP指南', link: '/00-ai-guide' },
      { text: '岗位角色', link: '/roles/host' }
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
          { text: '应急手册', link: '/#emergency' },
          {
            text: '岗位角色 SOP',
            collapsed: false,
            items: [
              { text: '主持人', link: '/roles/mc' },
              { text: '后勤/签到', link: '/roles/logistics' },
              { text: '宣发推送', link: '/roles/pr' },
              { text: '计时/场控', link: '/roles/timekeeper' },
              { text: '摄影', link: '/roles/photo' },
              { text: '技术支持', link: '/roles/tech-support' },
              { text: '作品管理员', link: '/roles/submission' },
              { text: '现场电脑操作员', link: '/roles/operator' },
              { text: '鼓励师/顾问', link: '/roles/advisor' },
              { text: '物料员', link: '/roles/material' },
              { text: '餐饮与后勤', link: '/roles/catering' },
            ]
          }
        ]
      },
      {
        text: '🏗️ 组织者手册',
        items: [
          { text: '活动主理人 SOP', link: '/roles/host' },
          { text: '志愿者统筹 SOP', link: '/roles/volunteer-lead' },
          { text: 'AI 智能创建指南', link: '/00-ai-guide' },
          { text: '本次活动信息模板', link: '/01-template' },
          { text: '活动类型与核心流程', link: '/03-activity-types' },
          { text: '讲师/嘉宾对接', items: [
            { text: '讲师 SOP', link: '/roles/demo' },
            { text: '分享嘉宾 SOP', link: '/roles/speaker' },
            { text: '赞助商对接 SOP', link: '/roles/sponsor' },
          ]},
          { text: '社区工具箱与资源', link: '/04-resources' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(taskLists, { enabled: true })
    }
  }
})
