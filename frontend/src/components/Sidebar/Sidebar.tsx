'use client';

import Image from 'next/image';
import styles from './Sidebar.module.scss';
import menu from '@/utils/menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => [router.push(link)];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.profileOverlay}></div>
        <div className={styles.imageContainer}>
          <Image
            width={70}
            height={70}
            src='/avatar1.png'
            alt='Profile'
            className={styles.userImage}
          />
        </div>
        <h1 className={styles.username}>
          <span>John</span>
          <span>Doe</span>
        </h1>
      </div>
      <ul className={styles.navItems}>
        {menu.map(({ id, title, icon, link }) => {
          const Icon = () => icon({ className: styles.navIcon });

          return (
            <li
              className={classNames(
                styles.navItem,
                pathname === link ? styles.active : ''
              )}
              onClick={() => handleClick(link)}
              key={id}
            >
              <Icon />
              <Link href={link} className={styles.navLink}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </nav>
  );
};
