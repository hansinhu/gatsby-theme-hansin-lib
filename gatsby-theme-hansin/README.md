<div align="center">

<img width="1295" alt="图片" src="https://f.cfcdn.club/assets/6067832d0ace6d6c68b6d66195a807ef_1194x786.png">

# Gatsby Theme for Your web site ⚛

✨ Polished Gatsby theme for documentation site.

![](https://flat.badgen.net/npm/v/gatsby-theme-hansin?icon=npm)
![NPM downloads](https://img.shields.io/npm/dm/gatsby-theme-hansin.svg?style=flat-square)
![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

</div>

## Features

- ⚛ Prerendered static site
- 🌎 Internationalization support by i18next
- 📝 Markdown-based documentation and menus
- 🎬 Examples with live playground
- 🏗 Unified Theme and Layout
- 🆙 Easy customized header nav
- 🧩 Built-in home page components

## Usage

Create a Gatsby site from [gatsby-theme-hansin](https://github.com/hansinhu/gatsby-theme-hansin-lib).

```bash
$ yarn global add gatsby-cli // or npm install gatsby-cli -g
$ gatsby new mysite https://github.com/hansinhu/gatsby-theme-hansin-starter
```

Start developing.

```bash
$ cd mysite
$ yarn start
```

### `gatsby-config.js`

```js
// gatsby-config.js
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
```

- `navs`: [props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- `docs`: [props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- `examples`: [props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)

### Components

- [Header Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- [Footer Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- [SEO Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- [Banner Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- [Features Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- [Cases Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)
- [Companies Props](https://github.com/hansinhu/gatsby-theme-hansin-lib/)

```jsx
import SEO from 'gatsby-theme-hansin/site/components/Seo';
import Header from 'gatsby-theme-hansin/site/components/Header';
import Footer from 'gatsby-theme-hansin/site/components/Footer';
import Banner from 'gatsby-theme-hansin/site/components/Banner';
import Features from 'gatsby-theme-hansin/site/components/Features';
import Applications from 'gatsby-theme-hansin/site/components/Applications';
import Companies from 'gatsby-theme-hansin/site/components/Companies';

// gatsby-theme-hansin/components/Header for commonjs version

const Layout = () => {
  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
  ];
  const cases = [
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
      title: '灯塔专业版',
      description:
        '深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金',
      link: '#',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  const companies = [
    {
      name: '公司1',
      image:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司2',
      image:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  const notifications = [
    {
      type: '测试',
      title: 'G6 3.2 全新上线！',
      date: '2019.12.04',
      link: '#',
    },
  ];

  const downloadButton = {
    text: '下载使用',
    link: 'https://antv.alipay.com/zh-cn/index.html',
  };

  return (
    <>
      <SEO title="蚂蚁数据可视化" lang="zh" />
      <Header
        subTitle="子产品名"
        logo={{
          link: 'https://antv.alipay.com',
          img: <img src="url" />,
        }}
        githubUrl="https://github.com/antvis/g2"
        // docs={[]}
        showSearch={false}
        showGithubCorner={false}
        showLanguageSwitcher={false}
        onLanguageChange={language => {
          console.log(language);
        }}
        defaultLanguage="zh"
      />

      <Banner
        coverImage={<svg></svg>} // 右侧 banner svg 内容
        title="主页标题"
        description="主页描述内容描述内容描述内容描述内容"
        buttonText="按钮文字"
        buttonHref={'#按钮链接路径'}
        notifications={notifications} // 可传 1-2 个内容，若不传则显示 2 个默认通知
        style={{}}
        className="Banner 的 className"
        video="视频按钮点开后视频的链接，不传则不会出现视频按钮"
        githubStarLink="Github Star 链接，不传则不会出现 GitHub Start 按钮"
        downloadButton={downloadButton} // 不传则不会出现下载按钮
      />
      <Features
        title="优势页面名称" // 可不传
        features={features} // 必传
        style={{}}
        className="Features 的 className"
      />
      <Cases cases={cases} style={{}} className="Cases 的 className" />
      <Companies
        title="公司页面名称" // 必传
        companies={companies} // 必传
        style={{}}
        className="Companies 的 className"
      />
    </>
  );
};
```

## Develop

```bash
yarn install
yarn start
```

Visit https://localhost:8000 to preview.

## Publish to npm

```bash
cd gatsby-theme-hansin
npm run release
```

## Deploy

```bash
npm run deploy
```

> Set envoironment variable `GATSBY_PATH_PREFIX` to `/` in deploy service like netlify to preview pathPrefix site in root domain.

## Add Dependency

```bash
cd gatsby-theme-hansin
yarn add shallowequal
```

or

```bash
yarn workspace gatsby-theme-hansin shallowequal
```

## Related libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=highlight#line-highlighting)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [react-i18next](https://react.i18next.com/)
