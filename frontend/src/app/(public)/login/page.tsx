import { FormInput } from '@/components/FormInput/FormInput';

import styles from './page.module.scss';
import Link from 'next/link';

const Login = () => {
  return (
    <main className={styles.main}>
      <form className={styles.loginForm}>
        <div className={styles.header}>
          <h1>Sign in</h1>
          <p>to continue to my tasks</p>
        </div>
        <FormInput type='email' id='email'>
          Email address
        </FormInput>
        <FormInput type='password' id='password'>
          Password
        </FormInput>
        <button>Continue</button>
        <div className={styles.footer}>
          No account? <Link href='/signup'>Sign up</Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
