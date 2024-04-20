// import React from 'react';
// import Head from 'next/head';

// const DB: React.FC = () => {
//     return (
//         <div>
//             <Head>
//                 <title>Database page</title>
//             </Head>
//             <div>
//                 <h1>Database Connection Page</h1>
//                 <p>Connecting To databases............................</p>
//                 <p></p>
//                 <p>Feel free to contact if you encounter any <b>ERROR</b></p> 
//             </div>
//         </div>
//     );
// };

// export default DB;
export default function DB({
    params,
    }: {
        params: {
            slug: string[];
        };
    }) {
        if(params.slug?.length === 2) {
            return <h1>DB for feature {params.slug[0]} and concept {params.slug[1]} loading</h1>;
        }
        else if(params.slug?.length === 1) {
            return <h1>docs for feature {params.slug[0]} Loading</h1>;
        } 
        return <h1>Docs Home</h1>;
    }
    