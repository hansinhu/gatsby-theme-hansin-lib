/* eslint jsx-a11y/anchor-is-valid: 0 */
import { navigate } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Icon, Menu, Select, Dropdown, message } from 'antd';
import GitUrlParse from 'git-url-parse';
import Search, { SearchProps } from './Search';
import Products from './Products';
import NavMenuItems, { Nav } from './NavMenuItems';
import { getChinaMirrorHost } from '../utils';
import TranslationIcon from '../images/translation.svg';
import styles from './Header.module.less';

const { Option } = Select;

interface HeaderProps {
  pathPrefix?: string;
  path?: string;
  /** 子标题 */
  subTitle?: React.ReactNode;
  /** 子标题的链接 */
  subTitleHref?: string;
  /** 文档和演示的菜单数据 */
  navs?: Nav[];
  /** 是否显示搜索框 */
  showSearch?: boolean;
  /** 是否显示搜索框 */
  showGithubCorner?: boolean;
  /** 是否显示切换语言选项 */
  showLanguageSwitcher?: boolean;
  /** 切换语言的回调 */
  onLanguageChange?: (language: string) => void;
  /** 自定义 logo */
  logo?: {
    img?: React.ReactNode;
    link?: string;
  };
  siteUrl?: string;
  /** github 仓库地址 */
  githubUrl?: string;
  /** 默认语言 */
  defaultLanguage?: 'zh' | 'en';
  /** 自定义 Link */
  Link?: React.ComponentType<any>;
  /** 底色是否透明 */
  transparent?: boolean;
  /** 是否首页模式 */
  isHomePage?: boolean;
  /** AntV root 域名，直接用主题的可不传 */
  rootDomain?: string;
  /** 是否显示 AntV 产品卡片 */
  moreNavCards?: { [key: string]: string }[];
  /** algolia 搜索配置 */
  docsearchOptions?: SearchProps['docsearchOptions'];
  /** 展示版本切换 */
  versions?: { [key: string]: string };
}

export const redirectToChinaMirror = (githubUrl: string) => {
  const chinaMirrorHost = getChinaMirrorHost();
  if (chinaMirrorHost !== window.location.host) {
    window.location.href = window.location.href.replace(
      window.location.host,
      chinaMirrorHost,
    );
    return;
  }
  const { name } = GitUrlParse(githubUrl);
  if (!name.includes('.') && !name.includes('-')) {
    window.location.href = window.location.href.replace(
      window.location.host,
      `antv-${name}.gitee.io`,
    );
    return;
  }
  message.info('镜像本地调试暂时无法跳转。');
};

const Header: React.FC<HeaderProps> = ({
  subTitle = '',
  subTitleHref,
  pathPrefix = '',
  path = '',
  navs = [],
  showSearch = true,
  showGithubCorner = true,
  moreNavCards = [],
  showLanguageSwitcher = true,
  logo,
  onLanguageChange,
  siteUrl,
  githubUrl = 'https://github.com/hansinhu',
  defaultLanguage,
  Link = 'a',
  transparent,
  isHomePage,
  rootDomain = '',
  docsearchOptions,
  versions,
}) => {
  const { t, i18n } = useTranslation();
  const lang =
    typeof defaultLanguage !== 'undefined'
      ? defaultLanguage
      : i18n.language || '';
  const SubTitleLink = (subTitleHref || '').startsWith('http') ? 'a' : Link;
  const [productMenuVisible, setProductMenuVisible] = useState(false);
  let productMenuHovering = false;
  const onProductMouseEnter = (e: React.MouseEvent) => {
    productMenuHovering = true;
    e.persist();
    setTimeout(() => {
      if (e.target instanceof Element && e.target.matches(':hover')) {
        setProductMenuVisible(true);
      }
    }, 200);
  };
  const onProductMouseLeave = (e: React.MouseEvent) => {
    e.persist();
    productMenuHovering = false;
    setTimeout(() => {
      if (productMenuHovering) {
        return;
      }
      setProductMenuVisible(false);
    }, 200);
  };
  const onToggleProductMenuVisible = () => {
    setProductMenuVisible(!productMenuVisible);
  };

  const [popupMenuVisible, setPopupMenuVisible] = useState(false);
  const onTogglePopupMenuVisible = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  const { img, link } = {
    img: null,
    link: '',
    ...logo,
  };

  useEffect(() => {
    if (popupMenuVisible) {
      setPopupMenuVisible(false);
    }
  }, [path]);

  // 移动端下弹出菜单时，禁止页面滚动
  useEffect(() => {
    if (popupMenuVisible) {
      document.documentElement!.style.overflow = 'hidden';
    } else {
      document.documentElement!.style.overflow = '';
    }
    return () => {
      document.documentElement!.style.overflow = '';
    };
  }, [popupMenuVisible]);

  const isWide = useMedia('(min-width: 767.99px)', true);
  const menuIcon = !isWide ? (
    <Icon
      type="menu"
      className={styles.menuIcon}
      onClick={onTogglePopupMenuVisible}
    />
  ) : null;

  const productItemProps = isWide
    ? {
        onMouseEnter: onProductMouseEnter,
        onMouseLeave: onProductMouseLeave,
      }
    : {
        onClick: onToggleProductMenuVisible,
      };

  let logoLink;
  if (link) {
    logoLink = link;
  } else {
    logoLink = siteUrl;
  }

  const menu = (
    <ul
      className={classNames(styles.menu, {
        [styles.popup]: !isWide,
        [styles.popupHidden]: !popupMenuVisible,
      })}
    >
      {navs && navs.length ? <NavMenuItems navs={navs} path={path} /> : null}
      {moreNavCards.length ? (
        <li {...productItemProps}>
          <a>
            {t('更多内容')}
            <Icon
              type="caret-down"
              className={classNames(styles.arrow, {
                [styles.open]: productMenuVisible,
              })}
            />
          </a>
          <Products
            className={styles.productsMenu}
            show={productMenuVisible}
            rootDomain={rootDomain}
            language={defaultLanguage}
            moreNavCards={moreNavCards}
          />
        </li>
      ) : null}
      {versions ? (
        <li>
          <Select
            defaultValue={Object.keys(versions)[0]}
            className={styles.versions}
            dropdownMatchSelectWidth={false}
            size="small"
            onChange={(value: string) => {
              window.location.href = value;
            }}
          >
            {Object.keys(versions).map((version: string) => {
              const url = versions[version];
              if (url.startsWith('http')) {
                return (
                  <Option key={url} value={url}>
                    {version}
                  </Option>
                );
              }
              return null;
            })}
          </Select>
        </li>
      ) : null}
      {showLanguageSwitcher && (
        <li>
          <Dropdown
            placement="bottomRight"
            overlay={
              <Menu
                defaultSelectedKeys={[lang]}
                selectable
                onSelect={({ key }) => {
                  if (key === lang) {
                    return;
                  }
                  if (onLanguageChange) {
                    onLanguageChange(key);
                    return;
                  }
                  if (path.endsWith(`/${lang}`)) {
                    navigate(`/${key}`);
                    return;
                  }
                  navigate(
                    path
                      .replace(pathPrefix, '')
                      .replace(`/${lang}/`, `/${key}/`),
                  );
                }}
              >
                <Menu.Item key="en">
                  <Icon
                    type="check"
                    style={{
                      visibility: lang === 'en' ? 'visible' : 'hidden',
                      color: '#52c41a',
                    }}
                  />
                  English
                </Menu.Item>
                <Menu.Item key="zh">
                  <Icon
                    type="check"
                    style={{
                      visibility: lang === 'zh' ? 'visible' : 'hidden',
                      color: '#52c41a',
                    }}
                  />
                  简体中文
                </Menu.Item>
              </Menu>
            }
            className={styles.translation}
          >
            <TranslationIcon />
          </Dropdown>
        </li>
      )}
      {showGithubCorner && (
        <li className={styles.githubCorner}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <header
      className={classNames(styles.header, {
        [styles.transparent]: !!transparent && !productMenuVisible,
        [styles.isHomePage]: !!isHomePage,
        [styles.fixed]: popupMenuVisible,
      })}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            <a href={logoLink}>{img}</a>
          </h1>
          {subTitle && (
            <>
              <span className={styles.divider} />
              <h2 className={styles.subProduceName}>
                {React.createElement(
                  SubTitleLink,
                  {
                    [SubTitleLink === 'a' ? 'href' : 'to']:
                      typeof subTitleHref === 'undefined'
                        ? `/${lang}`
                        : subTitleHref,
                  },
                  subTitle,
                )}
              </h2>
            </>
          )}
          {showSearch && <Search docsearchOptions={docsearchOptions} />}
        </div>
        <nav className={styles.nav}>
          {menu}
          {menuIcon}
        </nav>
      </div>
    </header>
  );
};

export default Header;
