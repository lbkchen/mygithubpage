import Head from "next/head";

import Page from "../../layouts/main";
import Gallery from "../../components/gallery";

const photos = [
  {
    src: "/static/images/projects/hong-kong/cityscape.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/hong-kong/montane.jpg",
    width: 2,
    height: 3
  },
  {
    src: "/static/images/projects/hong-kong/cheung-chau.jpg",
    width: 3,
    height: 2
  }
];

export default () => (
  <Page>
    <Head>
      <title>Hong Kong - Ken Chen</title>
    </Head>

    <div className="gallery">
      <h2>Hong Kong</h2>
      <Gallery photos={photos} />
    </div>

    <style jsx>{`
      .gallery {
        width: 720px;
      }
    `}</style>
  </Page>
);
