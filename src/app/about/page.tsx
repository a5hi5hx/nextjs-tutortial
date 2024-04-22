'use client'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './AboutMePage.module.css'; // Importing the CSS module for styling

const AboutMePage: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
            </Head>
            <div className={styles.leftContent}>
                <div className={styles.image}></div>
            </div>
            <div className={`${styles.rightContent} ${loaded ? styles.loaded : ''}`}>
                <h1 className={styles.heading}>About Me</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget est arcu. Proin dignissim risus eget massa interdum, eget faucibus nulla finibus. Fusce id elit nec turpis viverra fermentum nec nec dui. Integer eu luctus eros. 
                </p>
                <p className={styles.description}>
                    Suspendisse potenti. Duis maximus enim a lorem suscipit, id vehicula nunc pellentesque. Integer eu ex eget sapien fermentum aliquet in nec nulla. Aenean ut tristique nisl, ut dapibus ligula.
                </p>
                <p className={styles.description}>
                    Vivamus nec libero eget nisi iaculis pretium. Cras eu mi consequat, lacinia felis eu, malesuada elit. Sed laoreet, nulla sed malesuada consequat, sapien diam lacinia quam, at dictum libero libero ut enim.
                </p>
            </div>
        </div>
    );
};

export default AboutMePage;
