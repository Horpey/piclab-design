import Head from "../components/Head";
import Slice from "../components/Slices";
import EmailSignInTab from "../components/EmailSignInTab";
import { useEffect } from "react";

import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";

export default function Home({ homepage }) {
  const pageSlice = [
    { title: "header", type: "header", key: "header" },
    { title: "artificial intelligence", type: "ai", key: "ai" },
    { title: "why piclab", type: "why", key: "why" },
    { title: "piclab news", type: "news", key: "news" },
    { title: "get started", type: "getstarted", key: "getstarted" },
  ];

  useEffect(() => {
    document.querySelector("body").classList.add("home");
  });

  return (
    <>
      <Head title="Home" />
      {pageSlice.map((slice, i) => (
        <Slice key={slice.key} sliceType={slice.type} data={homepage} />
      ))}
      <EmailSignInTab />
    </>
  );
}

export async function getServerSideProps() {
  const homepage = await Client().query(
    Prismic.Predicates.at("document.type", "homepage")
  );

  return {
    props: {
      homepage: homepage.results[0].data,
    },
  };
}
