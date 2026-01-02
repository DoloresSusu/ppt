import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SOP",
  description: "SOP for hackathonweekly",
  lastUpdated: true,
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
        text: 'SOP指南',
        items: [
          { text: 'AI 智能创建指南', link: '/00-ai-guide' },
          { text: '本次活动信息', link: '/01-template' },
          { text: '快速导航', link: '/02-navigation' },
          { text: '活动类型与核心流程', link: '/03-activity-types' },
          { text: '社区工具箱与资源', link: '/04-resources' }
        ]
      },
      {
        text: '岗位角色',
        items: [
          { text: '活动主理人', link: '/roles/host' },
          { text: '志愿者统筹', link: '/roles/volunteer-lead' },
          { text: '主持人', link: '/roles/mc' },
          { text: '鼓励师/顾问', link: '/roles/advisor' },
          { text: '餐饮与后勤', link: '/roles/catering' },
          { text: '演示官', link: '/roles/demo' },
          { text: '后勤/签到', link: '/roles/logistics' },
          { text: '物料员', link: '/roles/material' },
          { text: '现场电脑操作员', link: '/roles/operator' },
          { text: '摄影/摄像', link: '/roles/photo' },
          { text: '宣发推送', link: '/roles/pr' },
          { text: '分享嘉宾', link: '/roles/speaker' },
          { text: '赞助商对接', link: '/roles/sponsor' },
          { text: '作品管理员', link: '/roles/submission' },
          { text: '技术支持', link: '/roles/tech-support' },
          { text: '计时/场控', link: '/roles/timekeeper' }
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
