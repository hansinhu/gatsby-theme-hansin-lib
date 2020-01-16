import React from 'react';
import SEO from 'gatsby-theme-hansin/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from 'gatsby-theme-hansin/site/components/Banner';
import Companies from 'gatsby-theme-hansin/site/components/Companies';
import Features from 'gatsby-theme-hansin/site/components/Features';
import Cases from 'gatsby-theme-hansin/site/components/Cases';
// import BannerSVG from 'gatsby-theme-hansin/site/components/BannerSVG';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: t('简单方便'),
      description: t(
        '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      ),
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: t('方便可靠'),
      description: t(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      ),
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: t('无限可能'),
      description: t(
        '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      ),
    },
  ];

  const companies = [
    {
      name: '公司1',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司2',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司3',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司4',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司5',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司6',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司7',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司8',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const cases = [
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
      isAppLogo: true,
      title: '灯塔专业版',
      description:
        '深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金',
      link: '#',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ekkhR7ISzUsAAAAAAAAAAABkARQnAQ',
      title: '灯塔专业版2',
      description:
        '深2222222入金融的基金深入金融的基金深2222222入金融的基金深入金融的基金深2222222入金融的基金深入金融的基金',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerButtons = [
    {
      text: t('Features'),
      link: '#features',
      type: 'primary',
    },
    {
      text: t('Get Started'),
      link: 'https://github.com/hansinhu/gatsby-theme-hansin-lib', // `/${i18n.language}/examples/basic`
    },
  ];

  const notifications = [
    {
      type: '更新',
      title: 'The Library is updated to v1.1.1',
      date: '2020.01.08',
      link: 'https://github.com/hansinhu/gatsby-theme-hansin-lib',
    },
    {
      type: '消息',
      title: 'The Library is updated to v1.1.1',
      date: '2019.11.22',
      link: 'https://github.com/hansinhu/gatsby-theme-hansin-lib',
    },
  ];

  const coverImage = (
    <img
      width="100%"
      src="https://f.cfcdn.club/assets/0f0392a81a4238673b2871dcbc8f9278.png"
      alt="cover"
    />
  );
  return (
    <>
      <SEO title={t('Site title')} lang={i18n.language} />
      <Banner
        coverImage={coverImage}
        notifications={notifications}
        // coverImage={<BannerSVG />}
        title={t('Banner Title')}
        description={t(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores fugiat facere harum recusandae doloribus quis, corrupti, ab corporis id iste! Eius, ducimus fuga tempora modi alias explicabo amet quibusdam.',
        )}
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
        video="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/file/A*PDpiR4U2oFEAAAAAAAAAAABkARQnAQ"
        onCloseVideo={() => {
          console.log('close'); // eslint-disable-line no-console
        }}
        onPlayVideo={() => {
          console.log('paly'); // eslint-disable-line no-console
        }}
      />
      <Features
        id="features"
        features={features}
        title="我们的优势"
        style={{ width: '100%' }}
      />
      <Features features={features} style={{ width: '100%' }} />
      <Cases cases={cases} />
      <Companies title={t('合作公司')} companies={companies} />
    </>
  );
};

export default IndexPage;
