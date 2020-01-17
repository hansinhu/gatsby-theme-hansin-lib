const { version, repository, homepage } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-hansin',
      options: {
        theme: {
          'primary-color': '#fa4946',
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Your Site Title',
    description: 'Site Description from meta info',
    siteUrl: homepage,
    logoUrl:
      'https://f.cfcdn.club/assets/4e4863f9b1b33ffdc7821e872317c11a_131x128.png',
    githubUrl: repository.url,
    navs: [
      {
        slug: 'docs/specification/getting-started',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
      },
      {
        slug: 'docs/other',
        title: {
          zh: '其他文档',
          en: 'other',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples',
        },
      },
      {
        slug: 'independent',
        title: {
          zh: '独立',
          en: 'MyApp',
        },
        // target: '_blank',
      },
    ],
    docs: [
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1',
        },
        order: 4,
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level',
        },
        order: 2,
      },
      {
        slug: 'other/category',
        title: {
          zh: '分类二',
          en: 'category2',
        },
        order: 4,
      },
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
          en: 'Category',
        },
      },
    ],
    versions: {
      [version]: `${homepage}`,
      '2.x': `${homepage}`,
      '1.x': `${homepage}`,
    },
    moreNavCards: [
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'More 1-1',
        url: `${homepage}`,
        description: '数据驱动，高度易用，可扩展的可视化图形语法。',
      },
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'More 1-2',
        url: `${homepage}`,
        description: '数据驱动，高度易用，可扩展的可视化图形语法。',
      },
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'More 1-3',
        url: `${homepage}`,
        description: '数据驱动，高度易用，可扩展的可视化图形语法。',
      },
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'More 1-4',
        url: `${homepage}`,
        description: '数据驱动，高度易用，可扩展的可视化图形语法。',
      },
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'More 1-5',
        url: `${homepage}`,
        description: '数据驱动，高度易用，可扩展的可视化图形语法。',
      },
    ],
    footerLinks: [
      {
        title: 'Footer01',
        icon:
          'https://gw.alipayobjects.com/zos/antfincdn/trEfLRh5pc/G2%252520keshihuatuxingyufa.svg',
        slogan: '可视化引擎',
        description: '数据驱动，高度易用，可扩展的可视化图形语法。',
        category: 'ecology',
        items: [
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer01-1',
            url: `${homepage}`,
          },
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer01-2',
            url: `${homepage}`,
          },
        ],
      },
      {
        title: 'Footer02',
        icon:
          'https://gw.alipayobjects.com/zos/antfincdn/D%26fDbWqVkv/F2%252520yidongduankeshihuafangan.svg',
        slogan: '移动可视化方案',
        description:
          '专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境',
        category: 'ecology',
        items: [
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer02-1',
            url: `${homepage}`,
          },
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer02-2',
            url: `${homepage}`,
          },
        ],
      },
      {
        title: 'Footer03',
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer03-1',
            url: `${homepage}`,
            description: '企业级 UI 设计语言',
            openExternal: true,
          },
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer03-2',
            url: `${homepage}`,
            description: '知识创作与分享工具',
            openExternal: true,
          },
          {
            icon:
              'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Footer03-3',
            url: `${homepage}`,
            description: '中台建站平台',
            openExternal: true,
          },
        ],
      },
    ],
    bottomLinks: [
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'Bottom1',
        url: `${homepage}`,
      },
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: 'Bottom2',
        url: `${homepage}`,
      },
      {
        title: 'Bottom3',
        url: `${homepage}`,
      },
    ],
    hiddenThemeAuthor: false,
    siteCopyright: '© 2020 XXXXXX',
    playground: {
      container: '<div id="container" class="ok" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
      dependencies: {
        '@antv/l7': 'beta',
      },
      htmlCodeTemplate: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
  </head>
  <body>
    <div id="container" />
    <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-3.5.1/dist/g2.min.js"></script>
    <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.10.1/dist/data-set.min.js"></script>
    <script>
{{code}}
    </script>
  </body>
</html>`,
    },
    redirects: [],
  },
};
