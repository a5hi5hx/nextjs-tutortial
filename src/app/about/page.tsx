import React from 'react';
import Head from 'next/head';
import styles from './AboutMe.module.css'; // Importing the CSS module for styling

const AboutMe: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
            </Head>
            <div className={styles.content}>
                <h1>About Me</h1>
                <p>I am a passionate Full STACK Web and Android Developer with a love for creating beautiful and functional websites.</p>
                <p>My skills include HTML, CSS, JavaScript, React, and more.</p>
                <p>Feel free to contact me if you have any questions or project inquiries!</p>
            </div>
        </div>
    );
};

export default AboutMe;
