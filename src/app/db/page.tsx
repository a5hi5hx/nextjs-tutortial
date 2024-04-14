import React from 'react';
import Head from 'next/head';

const DB: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Database page</title>
            </Head>
            <div>
                <h1>Database Connection Page</h1>
                <p>Connecting To databases............................</p>
                <p></p>
                <p>Feel free to contact if you encounter any <b>ERROR</b></p> 
            </div>
        </div>
    );
};

export default DB;
