import React from 'react';
import { default as RCFooter, FooterProps as RcFooterProps } from 'rc-footer';
import { useTranslation } from 'react-i18next';
// import { Icon } from 'antd';
import styles from './Footer.module.less';
import 'rc-footer/assets/index.less';

interface FooterProps extends RcFooterProps {
  rootDomain?: string;
  language?: string;
  githubUrl?: string;
  footerLinks?: FooterProduct[];
  bottomLinks?: FooterItem[];
  hiddenThemeAuthor?: boolean;
  siteCopyright?: string;
  columns?: Array<any>;
}

interface FooterItem {
  title: string;
  url?: string;
  icon?: string;
  description?: string;
  openExternal?: boolean;
}

interface FooterProduct {
  title: string;
  icon?: string;
  slogan?: string;
  items?: FooterItem[];
}

const Footer: React.FC<FooterProps> = ({
  columns,
  theme = 'dark',
  language,
  footerLinks = [],
  bottomLinks = [],
  hiddenThemeAuthor = false,
  siteCopyright,
}) => {
  const { t, i18n } = useTranslation();
  const lang = language || i18n.language;
  // eslint-disable-next-line no-console
  console.log('lang:', lang);

  const defaultColumns = footerLinks.map((product: FooterProduct) => ({
    title: (
      <span>
        {t(product.title)}
        <span className={styles.description}>{t(product.slogan || '')}</span>
      </span>
    ),
    items: (product.items || []).map((item: FooterItem) => ({
      ...item,
      title: t(item.title),
      description: t(item.description || ''),
      icon: <img src={item.icon} alt="more products" />,
    })),
  }));

  return (
    <RCFooter
      maxColumnsPerRow={4}
      theme={theme}
      columns={columns || defaultColumns}
      className={styles.footer}
      bottom={
        bottomLinks && bottomLinks.length ? (
          <div className={styles.bottom}>
            <div>
              {bottomLinks.map(item => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.title}
                >
                  {item.icon ? (
                    <img
                      className={styles.bottom_icon}
                      src={item.icon}
                      alt={item.title}
                    />
                  ) : (
                    t(item.title)
                  )}
                </a>
              ))}
            </div>
            <div>{siteCopyright || ''}</div>
            <div>
              {!hiddenThemeAuthor ? (
                <div>
                  Made with ❤ by{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hansinhu"
                  >
                    Hansinhu
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        ) : null
      }
    />
  );
};

export default Footer;
