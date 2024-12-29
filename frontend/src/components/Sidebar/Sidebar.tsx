import Image from 'next/image';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className='profile'>
        <div className='profileOverlay'>
          <Image width={70} height={70} src='avatar1.png' alt='Profile'/>
        </div>
      </div>
    </nav>
  );
};
