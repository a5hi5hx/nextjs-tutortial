import React from 'react';
import Head from 'next/head';

const Profile: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Database page</title>
            </Head>
            <div>
                <h1>This is my profile page</h1>
                <p>Loading Profiles............................</p>
                <p></p>
                <p>Feel free to contact if you encounter any <b>ERROR</b></p> 
            </div>
        </div>
    );
};

export default Profile;
