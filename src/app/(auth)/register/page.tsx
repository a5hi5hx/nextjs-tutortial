"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './RegisterPage.module.css'; // Importing the CSS module for styling

const RegisterPage: React.FC = () => {
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showTermsError, setShowTermsError] = useState(false);

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
    };

    const openTermsModal = () => {
        // Logic to open terms modal goes here
        alert('Terms and conditions modal will be displayed here.');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform registration logic if terms are agreed
        if (agreeTerms) {
            // Registration logic
            alert('Registration submitted successfully!');
        } else {
            setShowTermsError(true);
            alert('Please agree to the terms and conditions.');
        }
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Register</title>
            </Head>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Register</h1>
                <form className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="firstName" className={styles.label}>First Name</label>
                        <input type="text" id="firstName" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="middleName" className={styles.label}>Middle Name</label>
                        <input type="text" id="middleName" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="lastName" className={styles.label}>Last Name</label>
                        <input type="text" id="lastName" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="phone" className={styles.label}>Phone</label>
                        <input type="tel" id="phone" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="address" className={styles.label}>Address</label>
                        <textarea id="address" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                        <input type="password" id="confirmPassword" className={styles.input} />
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="agreeTerms" className={styles.checkbox} checked={agreeTerms} onChange={handleCheckboxChange} />
                        <label htmlFor="agreeTerms" className={styles.checkboxLabel} onClick={openTermsModal}>I agree to the terms and conditions</label>
                    </div>
                    {showTermsError && (
                        <p className={styles.errorText}>Please agree to the terms and conditions before registering.</p>
                    )}
                    <button type="submit" className={`${styles.button} ${!agreeTerms && styles.disabled}`}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
