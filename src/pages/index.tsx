import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Router from 'next/router';
import { FiEye, FiXCircle } from 'react-icons/fi';
signIn

import styles from '../styles/SignIn.module.scss';

function SignIn(){
  const session = useSession();

  if(session.data) {
    Router.push('/profile')
  }
    
  return (
      <>
        <Head>
           <title>NFT Access | Sign In</title>
        </Head>
        <main className={styles.mainContainer}>
          <div className={styles.leftSection}>
            <div className={styles.logoContainer}>
              <img src="/images/logo.svg" alt="NFT Access logo" />
            </div>
            <div className={styles.content}>
              <h1>NFT Access</h1>
              <p>Please fill your detail to access your account.</p>
              <form action="">
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.inputContainer}>
                    <input id='email' placeholder='Digite seu email' type="text" />
                    <FiXCircle color='#667085' size={16}/>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <div className={styles.inputContainer}>
                    <input id='password' placeholder='Digite sua senha' type="text" />
                    <FiEye color='#667085' size={16}/>
                  </div>
                </div>

                <div className={styles.rememberMeAndForgot}>
                  <div>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>

                  <a href="">Forgot Password?</a>
                </div>

                <div className={styles.buttonsContainer}>
                  <button type='submit'>Sign in</button>
                  <a href="" onClick={()=>signIn('oauth')}>
                    <img src="/images/Google.svg" alt="google icon" />
                    Sign in with Google
                  </a>
                </div>
              </form>

              <div className={styles.goToSignUp}>
                <p>Don't have an account?</p>
                <a href="">Sign up</a>
              </div>
            </div>
          </div >

          <div className={styles.rightSection}>
            <div>
              <img src="/images/drip.svg" alt="Drip" />
            </div>
          </div>
        </main>
      </>
  )  
}

export default SignIn;
