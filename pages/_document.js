import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr" data-theme="brand-theme">
        <Head>
          <link rel="icon" href="/img/favicons/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/img/favicons/android-192x192.png"
          />
          <link
            href="/img/favicons/android-chrome-192x192.png"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="/img/favicons/android-chrome-512x512.png"
            sizes="512x512"
            type="image/png"
          />
          <link
            href="/img/favicons/android-chrome-maskable-192x192.png"
            sizes="192x192"
            type="image/png"
            purpose="maskable"
          />
          <link
            href="/img/favicons/android-chrome-maskable-512x512.png"
            sizes="512x512"
            type="image/png"
            purpose="maskable"
          />

          <link rel="manifest" href="/img/favicons/manifest.json" />
          {/* PWA primary color */}
          <meta name="theme-color" content="#121B94" />
          {/*  Facebook */}
          <meta property="author" content="Goli" />
          <meta property="og:site_name" content="golipharmacy.com" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="golipharmacy.com" />
          <meta property="og:title" content="startup-title" />
          <meta property="og:description" content="startup-description" />
          <meta property="og:image" content="/images/favicon.ico" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {/*  Twitter */}
          <meta property="twitter:site" content="golipharmacy.com" />
          <meta property="twitter:domain" content="golipharmacy.com" />
          <meta property="twitter:creator" content="Goli" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:image:src" content="/images/favicon.ico" />
          <meta name="twitter:site" content="golipharmacy.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
