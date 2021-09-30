module.exports = {
  title: "网站",
  description: "",
  base: "/component-library/", // 设置站点根路径和github项目名称保持一致
  plugins: ['demo-container'], // 配置插件
  themeConfig: {
    navbar: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/nav/rule/index.md" }
    ],
    sidebar: [
      {
        title: "组件",
        collapsable: false,
      },
      {
        title: "Container",
        collapsable: false,
        children: [
          { title: "listView", path: "/comps/listView.md" },
        ],
      },
      {
        title: "Form",
        collapsable: false,
        children: [
          { title: "select", path: "/comps/select.md" },
        ],
      },
      {
        title: "Data",
        collapsable: false,
        children: [
          { title: "table", path: "/comps/tableInfo.md" },
          { title: "pagination", path: "/comps/pagination.md" },
          { title: "select", path: "/comps/select.md" },
        ],
      },
      {
        title: "Images",
        collapsable: false,
        children: [
          { title: "images", path: "/comps/showImages.md" },
          { title: "tag", path: "/comps/similarTag.md" },
        ],
      },
      {
        title: "Others",
        collapsable: false,
        children: [
          { title: "dialog", path: "/comps/dialog.md" }
        ],
      },
    ],
    sidebarDepth: 5,
  },
};
