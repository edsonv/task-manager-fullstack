import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};
export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={classNames(styles.default, props.className && props.className)}
    >
      {children}
    </button>
  );
};
