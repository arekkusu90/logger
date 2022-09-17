import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Logger",
  description: "Write beautiful logs in the browser console",
  titleTemplate: false,
  lang: "en-US",
  lastUpdated: true,
  ignoreDeadLinks: false,

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/arekkusu90/logger" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Napoli Alessandro",
    },
  },
});
