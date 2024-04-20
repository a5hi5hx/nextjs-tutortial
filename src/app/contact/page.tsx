import React from 'react';
import Head from 'next/head';
import styles from './ContactPage.module.css'; // Importing the CSS module for styling

const ContactPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={styles.leftContent}>
                <h2>Contact Information</h2>
                <div className={styles.contactInfo}>
                    <p>Name: John Doe</p>
                    <p>Address: 123 Main St, City, Country</p>
                    <p>Email: johndoe@example.com</p>
                    <p>Phone: +1234567890</p>
                    <p>Websites: example.com</p>
                </div>
            </div>
            <div className={styles.rightContent}>
                <h2>Contact Me</h2>
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
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea id="message" className={styles.textarea} />
                    </div>
                    <button type="submit" className={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
