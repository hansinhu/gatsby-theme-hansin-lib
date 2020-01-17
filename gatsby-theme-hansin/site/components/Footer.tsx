import React from 'react';
import { default as RCFooter, FooterProps as RcFooterProps } from 'rc-footer';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import styles from './Footer.module.less';
import 'rc-footer/assets/index.less';

interface FooterProps extends RcFooterProps {
  rootDomain?: string;
  language?: string;
  githubUrl?: string;
  footerLinks?: Array<any>;
  bottomLinks?: Array<any>;
  hiddenThemeAuthor?: boolean;
  siteCopyright?: string;
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

  const defaultColumns = footerLinks.map(product => ({
    title: (
      <span>
        {product.title}
        <span className={styles.description}>{product.slogan}</span>
      </span>
    ),
    items: (product.items || []).map(item => ({
      ...item,
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
                    item.title
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
