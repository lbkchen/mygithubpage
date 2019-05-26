import Page from "../../layouts/main";
import Gallery from "../../components/gallery";

const photos = [
  {
    src: "/static/images/projects/japan/shinjuku-gyoenmae.jpg",
    width: 4,
    height: 3
  }
];

export default () => (
  <Page>
    <div className="gallery">
      <h2>Japan</h2>
      <Gallery photos={photos} />
    </div>

    <style jsx>{`
      .gallery {
        width: 600px;
      }
    `}</style>
  </Page>
);
