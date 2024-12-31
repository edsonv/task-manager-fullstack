import { ReactNode } from 'react';
import styles from './GlobalStyleProvider.module.scss';

type Props = {
  children: ReactNode;
};

const GlobalStyleProvider = ({ children }: Props) => {
  return <div className={styles.globalStyleProvider}>{children}</div>;
};

export default GlobalStyleProvider;
