// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        {/* Optional: Add more meta tags or icons here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
