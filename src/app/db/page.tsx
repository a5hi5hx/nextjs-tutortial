import React from 'react';
import Head from 'next/head';

const DB: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Database page</title>
            </Head>
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
        </div>
    );
};

export default DB;
// export default function DB({
//     params,
//     }: {
//         params: {
//             slug: string[];
//         };
//     }) {
//         if(params.slug?.length === 2) {
//             return <h1>DB for feature {params.slug[0]} and concept {params.slug[1]} loading</h1>;
//         }
//         else if(params.slug?.length === 1) {
//             return <h1>docs for feature {params.slug[0]} Loading</h1>;
//         } 
//         return <h1>Docs Home</h1>;
//     }
    