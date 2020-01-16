import React from 'react';
import { Link } from 'gatsby';
import styles from './Notification.module.less';

export interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}

const Notification: React.FC<NotificationProps> = ({
  index = 0,
  type,
  title,
  date,
  link = '',
}) => {
  const children = (
    <div className={styles.container}>
      <span className={styles.number}>{`${index + 1}`.padStart(2, '0')}</span>
      <div className={styles.content}>
        <p className={styles.description}>
          {type} ‧ {title}
        </p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
  if (link.startsWith('http')) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.notification}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={link} className={styles.notification}>
      {children}
    </Link>
  );
};

export default Notification;
