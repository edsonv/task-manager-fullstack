import { ReactNode } from 'react';
import styles from './ProtectedGlobalStyleProvider.module.scss';

type Props = {
  children: ReactNode;
};

export const ProtectedGobalStyleProvider = ({ children }: Props) => {
  return <div className={styles.protectedGobalStyleProvider}>{children}</div>;
};
