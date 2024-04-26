'use client'
import React from 'react';
import Head from 'next/head';

const NepalBlog: React.FC = () => {
    return (
        <div className="container">
            <Head>
                <title>Blog About Nepal</title>
                <style >
                    /* CSS styles using JSX */
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }

                    h1 {
                        font-size: 36px;
                        margin-bottom: 20px;
                    }

                    article {
                        margin-bottom: 40px;
                    }

                    h2 {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }

                    p {
                        font-size: 18px;
                        line-height: 1.5;
                    }
                </style>
            </Head>
            <main>
                <h1>Blog About Nepal</h1>
                <article>
                    <h2>Exploring the Himalayas</h2>
                    <p>Nepal is home to some of the tallest mountains in the world, including Mount Everest.</p>
                    <p>Many adventurers come to Nepal to trek through the Himalayas and experience the breathtaking views.</p>
                </article>
                <article>
                    <h2>Cultural Richness</h2>
                    <p>Nepal has a rich cultural heritage with diverse ethnic groups, languages, and traditions.</p>
                    <p>Visitors can explore ancient temples, palaces, and monasteries that reflect Nepal's history and spirituality.</p>
                </article>
                <article>
                    <h2>Wildlife and Nature</h2>
                    <p>Nepal's national parks and conservation areas are home to a wide variety of wildlife, including tigers, rhinos, and elephants.</p>
                    <p>Travelers can go on jungle safaris, birdwatching tours, and wildlife treks to experience Nepal's natural beauty.</p>
                </article>
            </main>
        </div>
    );
};

export default NepalBlog;