import React from 'react';
import { default as RCFooter, FooterProps as RcFooterProps } from 'rc-footer';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
// import { getProducts } from './getProducts';
// import { useChinaMirrorHost } from '../hooks';
import styles from './Footer.module.less';
import 'rc-footer/assets/index.less'

interface FooterProps extends RcFooterProps {
  rootDomain?: string;
  language?: string;
  githubUrl?: string;
  productGroup?: Array<any>;
}

const Footer: React.FC<FooterProps> = ({
  columns,
  bottom,
  theme = 'dark',
  language,
  rootDomain = '',
  productGroup = []
}) => {
  const { t, i18n } = useTranslation();
  const lang = language || i18n.language;
  // const [isChinaMirrorHost] = useChinaMirrorHost();
  // const products = getProducts({
  //   t,
  //   language: lang,
  //   rootDomain,
  //   isChinaMirrorHost,
  // });

  // const more = {
  //   icon: (
  //     <img
  //       src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
  //       alt="more products"
  //     />
  //   ),
  //   title: t('更多产品'),
  //   items: [
  //     {
  //       icon: (
  //         <img
  //           src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
  //           alt="xtech"
  //         />
  //       ),
  //       title: t('蚂蚁体验科技'),
  //       url: 'https://xtech.antfin.com/',
  //       openExternal: true,
  //     },
  //   ],
  // };

  const defaultColumns = productGroup
    .map(product => ({
      title: (
        <span>
          {product.title}
          <span className={styles.description}>{product.slogan}</span>
        </span>
      ),
      items: (product.items || []).map(item => ({
        ...item,
        icon: (
          <img
            src={item.icon}
            alt="more products"
          />
        ),
      })),
    }));

  return (
    <RCFooter
      maxColumnsPerRow={4}
      theme={theme}
      columns={columns || defaultColumns}
      className={styles.footer}
      bottom={
        bottom || (
          <div className={styles.bottom}>
            <div>
              <a
                href="https://weibo.com/antv2017"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="weibo" />
              </a>
              <a
                href="https://zhuanlan.zhihu.com/aiux-antv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="zhihu" />
              </a>
              <a
                href="https://github.com/antvis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="github" />
              </a>
              <a href={`${rootDomain}/${lang}/about`}>{t('关于我们')}</a>
            </div>
            <div>
              © {new Date().getFullYear()} Made with ❤ by{' '}
              <a href="https://xtech.antfin.com/">XTech</a>
            </div>
          </div>
        )
      }
    />
  );
};

export default Footer;
