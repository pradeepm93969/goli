import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import SEO from '../Layout/SEO';
import ScrollTo from '../components/ScrollTo/ScrollTo';

const MainLayout = (props) => {
  const { title, description, keywords } = props;
  return (
    <>
      <SEO title={title} description={description} keywords={keywords}></SEO>
      <main>{props.children}</main>
      <ScrollTo showBelow={10} />
    </>
  );
};

MainLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MainLayout;
