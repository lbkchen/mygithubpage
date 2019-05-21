import Link from "next/link";
import Head from "next/head";

import Page from "../layouts/main";
import P from "../components/typography/paragraph";

export default () => (
  <Page>
    <Head>Ken Chen</Head>

    <div className="home">
      <div className="intro">
        <P>
          I am a <b>software engineer</b> from San Francisco working at Samsara.
          I’m also interested in UI/UX <b>design</b> and landscape/nightscape{" "}
          <b>photography</b>. Please see my resume, and contact me here for any
          inquiries!
        </P>
        <P>I’m currently in Tokyo, Japan until August 2019.</P>
      </div>
      <div className="gallery" />
    </div>

    <style jsx>{`
      .home {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .intro {
        text-align: center;
        max-width: 500px;
      }

      h1 {
        font-size: 14px;
        font-weight: normal;
      }
      nav {
        margin-top: 20px;
      }
      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
    `}</style>
  </Page>
);
