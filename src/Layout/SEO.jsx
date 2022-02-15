import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const SEO = (props) => {
  const { title, description, keywords } = props;
  return (
    <Head>
      <title>
        {title
          ? title.slice(0, 60)
          : "Goli Pharamacy : Online medicine and healthcare products"}
      </title>
      <meta
        name="description"
        content={
          description
            ? description.slice(0, 275)
            : "Goli Pharmacy is one of most trusted online pharmacy and medical stores offering pharmaceutical and healthcare products"
        }
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.slice(0, 255)
            : "pharmacy, medical stores, online pharmacy, best online pharmacy, online medical store, online medicine store, online medical shop"
        }
      />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default SEO;
