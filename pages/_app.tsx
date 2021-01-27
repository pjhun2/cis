import Head from 'next/head';
import { AppProps } from 'next/app'
import React from 'react';
const globalStyles = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`



export default function MainApp ({Component, pageProps} : AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <style type='text/css'>{globalStyles}</style>
            </Head>
            <Component {...pageProps} />
        </>
    );
}