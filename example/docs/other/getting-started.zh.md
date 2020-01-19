---
title: 其他文档
order: 0
redirect_from:
  - /zh/docs/other
---

[![](https://img.shields.io/travis/antvis/g2.svg)](https://travis-ci.org/antvis/g2)
![](https://img.shields.io/badge/language-javascript-red.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)

[![NPM Package](https://img.shields.io/npm/v/@antv/g2.svg)](https://www.npmjs.com/package/@antv/g2)
[![NPM Downloads](https://img.shields.io/npm/dm/@antv/g2.svg)](https://npmjs.org/package/@antv/g2)
[![Percentage of issues still open](https://isitmaintained.com/badge/open/antvis/g2.svg)](https://isitmaintained.com/project/antvis/g2 'Percentage of issues still open')

G2 是一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性，用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。

## 安装

```bash
npm install @antv/g2
```

## 特性

- ✔︎ 简单、易用
- ✔︎ 完备的可视化编码
- ✔︎ 强大的扩展能力

## 文档

- [使用教程](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/index.html)
- [API 文档](https://antv.alipay.com/zh-cn/g2/3.x/api/index.html)
- [图表示例](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

### 快速开始

<img src="https://gw.alipayobjects.com/zos/rmsportal/aHvVgFiBnGzzKCEjdVtL.png" width="450">

```html
<div id="c1"></div>
```

```js
import G2 from '@antv/g2';

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 1150 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const chart = new G2.Chart({
  container: 'c1',
  width: 500,
  height: 500,
});

chart.source(data);
chart
  .interval()
  .position('genre*sold') // highlight-line
  .color('genre');
chart.render();
```

## 本地开发

```bash
$ npm install

# 跑测试用例
$ npm run test-live

# 监听文件变化构建，并打开 demo 页面
$ npm run dev

# 打开 demo
$ npm run demos
```

**更新**

**我们已决定终止体验改进计划**

**从 `@antv/g2@3.4.7` 版本开始，所有打点代码已被移除。后续版本的 G2 不会再发送任何远程请求**

## 如何贡献

如果您在使用的过程中碰到问题，可以先通过 [issues](https://github.com/antvis/g2/issues) 看看有没有类似的 bug 或者建议。

如需提交代码，请遵从我们的[贡献指南](https://github.com/antvis/g2/blob/master/CONTRIBUTING.md)。

I can highlight `css±.some-class { background-color: red }` with CSS syntax.
