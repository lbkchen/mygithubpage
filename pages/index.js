import Link from "next/link";
import Head from "next/head";

import Page from "../layouts/main";
import Card from "../components/card";
import P from "../components/typography/paragraph";
import A from "../components/typography/link";

export default () => (
  <Page>
    <Head>Ken Chen</Head>

    <div className="home">
      <div className="intro">
        <P>
          I am a <b>software engineer</b> from San Francisco working at Samsara.
          I’m also interested in UI/UX <b>design</b> and landscape/nightscape{" "}
          <b>photography</b>. Please see my <A>resume</A>, and contact me{" "}
          <A>here</A> for any inquiries!
        </P>
        <P>I’m currently in Tokyo, Japan until August 2019.</P>
      </div>
      <div className="gallery">
        <Card
          leftText="NIGHTSCAPES AND STARS"
          rightText="JUNE '16"
          title="PHOTOGRAPHY"
          description="An exploration of low-light photography in Shanghai, China."
        />
        <Card
          leftText="NIGHTSCAPES AND STARS"
          rightText="JUNE '16"
          title="PHOTOGRAPHY"
          description="An exploration of low-light photography in Shanghai, China."
        />
        <Card
          leftText="NIGHTSCAPES AND STARS"
          rightText="JUNE '16"
          title="PHOTOGRAPHY"
          description="An exploration of low-light photography in Shanghai, China."
        />
        <Card
          leftText="NIGHTSCAPES AND STARS"
          rightText="JUNE '16"
          title="PHOTOGRAPHY"
          description="An exploration of low-light photography in Shanghai, China."
        />
      </div>
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
        margin-bottom: 24px;
      }

      .gallery {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        max-width: 960px;
      }
    `}</style>
  </Page>
);
