import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import styles from './Product.module.less';

interface ProductsProps {
  show: boolean;
  rootDomain: string;
  language?: 'zh' | 'en';
  className?: string;
  moreNavCards: {[key: string]: string}[];
}

const Products: React.FC<ProductsProps> = ({
  show,
  language,
  className,
  moreNavCards,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div
        className={classNames(styles.products, className, {
          [styles.show]: !!show,
        })}
      >
        <div className={styles.container}>
          <h3>{t('更多内容')}</h3>
          <ul>
            {moreNavCards.map(product => (
                <Product
                  key={product.title}
                  name={product.title}
                  slogan={product.slogan || ''}
                  description={product.description}
                  url={product.url}
                  icon={product.icon as string}
                  language={language || i18n.language}
                />
              ))}
          </ul>
        </div>
      </div>
      <div className={styles.mask} />
    </>
  );
};

export default Products;
