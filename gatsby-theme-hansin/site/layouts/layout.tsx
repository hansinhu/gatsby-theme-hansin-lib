import React from 'react';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import Seo from '../components/Seo';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import Footer from '../components/Footer';
import styles from './layout.module.less';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    initImmediate: false,
    fallbackLng: 'zh',
    keySeparator: false,
    react: {
      useSuspense: false,
    },
  });

const lngs = ['zh', 'en'];

interface LayoutProps {
  children: React.ReactElement<any>;
  location: Location;
  pageContext: any;
}

function parseNulltoUndefined<T>(value: T) {
  if (value === null) {
    return undefined;
  }
  return value;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // https://github.com/gatsbyjs/gatsby/issues/13867#issuecomment-489481343
  if (location.pathname.includes('offline-plugin-app-shell-fallback')) {
    return <PageLoading />;
  }
  const query = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          siteUrl
          logoUrl
          showSearch
          showLanguageSwitcher
          moreNavCards {
            icon
            title
            description
            url
          }
          showGithubCorner
          navs {
            slug
            title {
              zh
              en
            }
            target
          }
          docsearchOptions {
            apiKey
            indexName
          }
          versions
          footerLinks {
            title
            icon
            slogan
            items {
              title
              url
              icon
              description
              openExternal
            }
          }
          bottomLinks {
            title
            url
            icon
          }
          hiddenThemeAuthor
          siteCopyright
        }
      }
      locales {
        internal {
          content
        }
      }
    }
  `;
  const { site, locales } = useStaticQuery(query);
  const {
    siteMetadata: {
      title,
      navs = [],
      githubUrl,
      siteUrl,
      logoUrl = '',
      showLanguageSwitcher,
      showSearch,
      showGithubCorner,
      moreNavCards,
      docsearchOptions,
      versions,
      footerLinks,
      hiddenThemeAuthor,
      siteCopyright,
      bottomLinks = [],
    },
  } = site;
  let resources = {};
  try {
    resources = JSON.parse(locales.internal.content);
  } catch (e) {
    // empty
  }
  const pathPrefix = withPrefix('/').replace(/\/$/, '');
  const path = location.pathname.replace(pathPrefix, '');
  const currentLangKey = getCurrentLangKey(lngs, 'zh', path);

  const isHomePage =
    path === '/' ||
    path === `/${currentLangKey}` ||
    path === `/${currentLangKey}/`;

  i18n.init({
    lng: currentLangKey,
  });

  if (!i18n.options.resources) {
    i18n.init({
      resources,
    });
  }

  if (
    location.pathname === pathPrefix ||
    (children && children.type && (children as any).type.noLayout)
  ) {
    return children;
  }

  const logoProps = logoUrl
    ? {
        logo: {
          img: <img src={logoUrl} alt="logo" />,
        },
      }
    : {};

  return (
    <>
      <Seo
        title={siteUrl === 'https://antv.vision' ? '' : title}
        lang={i18n.language}
      />
      <Header
        subTitle={title}
        path={path}
        pathPrefix={pathPrefix}
        navs={navs}
        siteUrl={siteUrl}
        githubUrl={githubUrl}
        Link={Link}
        transparent={isHomePage}
        isHomePage={isHomePage}
        showSearch={parseNulltoUndefined(showSearch)}
        showGithubCorner={parseNulltoUndefined(showGithubCorner)}
        moreNavCards={moreNavCards || []}
        showLanguageSwitcher={parseNulltoUndefined(showLanguageSwitcher)}
        docsearchOptions={docsearchOptions}
        versions={versions}
        {...logoProps}
      />
      <main className={styles.main}>{children}</main>
      <Footer
        githubUrl={githubUrl}
        footerLinks={footerLinks}
        bottomLinks={bottomLinks}
        hiddenThemeAuthor={hiddenThemeAuthor}
        siteCopyright={siteCopyright}
      />
    </>
  );
};

export default Layout;
