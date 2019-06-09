import Page from "../../layouts/main";
import Gallery from "../../components/gallery";

const photos = [
  {
    src: "/static/images/projects/maui/beach.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/maui/ocean.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/maui/red-sand-beach.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/maui/red-sand-beach-2.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/maui/sunrise.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/images/projects/maui/milky-way.jpg",
    width: 2,
    height: 3
  }
];

export default () => (
  <Page>
    <div className="gallery">
      <h2>Maui</h2>
      <Gallery photos={photos} />
    </div>

    <style jsx>{`
      .gallery {
        width: 600px;
      }
    `}</style>
  </Page>
);
