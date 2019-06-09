import Head from "next/head";

import Page from "../../layouts/main";
import Gallery from "../../components/gallery";

const photos = [
  {
    src: "/static/images/projects/japan/shinjuku-gyoenmae.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/japan/arashiyama-bamboo.jpg",
    width: 2,
    height: 3
  },
  {
    src: "/static/images/projects/japan/fushimi.jpg",
    width: 2,
    height: 3
  },
  {
    src: "/static/images/projects/japan/kelsey-ken.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/japan/osaka-bridge.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/japan/otagi.jpg",
    width: 2,
    height: 3
  },
  {
    src: "/static/images/projects/japan/takano-fruits.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/japan/hakone-waterfall.jpg",
    width: 3,
    height: 2
  }
];

export default () => (
  <Page>
    <Head>
      <title>Japan - Ken Chen</title>
    </Head>

    <div className="gallery">
      <h2>Japan</h2>
      <Gallery photos={photos} />
    </div>

    <style jsx>{`
      .gallery {
        width: 720px;
      }
    `}</style>
  </Page>
);
