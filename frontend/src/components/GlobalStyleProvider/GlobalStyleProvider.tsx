import { ReactNode } from 'react'
import styles from './GlobalStyleProvider.module.scss'

type Props={
  children: ReactNode
}
export const GlobalStyleProvider=({children}:Props)=>{
  return <div className={styles.globalStyleProvider}>{children}</div>
}