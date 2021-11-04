import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import METADATA from "../../constants/metadata";

const propTypes = {
  title: PropTypes.string.isRequired,
};
const defaultProps = {
  title: "",
};

const HeadShare = (props) => {
  const { title } = props;

  return (
    <>
      <Head>
        <title>{(title ? title + " | " : "") + METADATA.APP_NAME}</title>
        <link rel="shortcut icon" href={METADATA.FAVICON}></link>
        <meta name="description" content={METADATA.APP_DESCRIPTION} />
        <meta content={METADATA.KEY_WORDS} name="keywords" />
      </Head>
    </>
  );
};

HeadShare.propTypes = propTypes;
HeadShare.defaultProps = defaultProps;
export default HeadShare;
