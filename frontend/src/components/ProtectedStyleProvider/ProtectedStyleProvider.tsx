import { ReactNode } from 'react';
import styles from './ProtectedStyleProvider.module.scss';

type Props = {
  children: ReactNode;
};

const ProtectedStyleProvider = ({ children }: Props) => {
  return <div className={styles.protectedStyleProvider}>{children}</div>;
};

export default ProtectedStyleProvider;
