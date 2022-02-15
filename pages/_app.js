import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify"; //styles of nprogress

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    document.dir = locale === "ar" ? "rtl" : "ltr";
  });

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer limit={4} />
    </>
  );
}

export default appWithTranslation(MyApp);
