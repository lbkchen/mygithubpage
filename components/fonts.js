const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Overpass+Mono:400,700|Overpass:100,400&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const overpass = new FontFaceObserver("Overpass");

  overpass.load().then(() => {
    document.documentElement.classList.add("overpass");
  });
};

export default Fonts;
