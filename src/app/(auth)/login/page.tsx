import React from 'react';
import Head from 'next/head';
import styles from './LoginPage.module.css'; // Importing the CSS module for styling

const LoginPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" className={styles.input} />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
