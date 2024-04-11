// export default function ForgotPassword() {
//     return(<> 
//     <div>
//         <h2>Forgotpassword</h2>
//         <p>password Not Found</p>
//     </div>
//     </>);
// }
'use client'

import { useRouter } from 'next/navigation';

import React from 'react';
import Head from 'next/head';
import styles from './ForgotPassword.module.css';

const ForgotPassword: React.FC = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform necessary actions (e.g., sending reset link)
        // Redirect to login page after submitting the form
        router.push('login');
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <div className={styles.card}>
                <h1 className={styles.title}>Forgot Password</h1>
                <p className={styles.description}>Please enter your email address below. We'll send you a link to reset your password.</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" className={styles.input} />
                    <button type="submit" className={styles.button}>Send Reset Link</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
