import Prismic from "prismic-javascript";
import LINK from "./constants/urls";

export const apiEndpoint = LINK.PRISMIC_URL;

export const accessToken = "";

// creating a prismic client  object
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
