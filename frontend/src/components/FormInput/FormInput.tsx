import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import styles from './FormInput.module.scss';
import classNames from 'classnames';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
  error?: boolean;
};

export const FormInput = forwardRef<HTMLInputElement, Props>(function FormInput(
  { children, error, ...props },
  ref
) {
  return (
    <div className={styles.inputWrapper}>
      {children && (
        <label
          htmlFor={props.id}
          className={classNames(styles.label, error && styles.error)}
        >
          {children}
        </label>
      )}
      <input
        {...props}
        name={props.id}
        className={classNames(styles.input, error && styles.error)}
        ref={ref}
      />
    </div>
  );
});
