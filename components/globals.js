import Head from "next/head";

import theme from "../styles/theme";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {/* global styles */}
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Overpass+Mono:400,700|Overpass:100,400&display=swap");

      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-size: 14px;
        font-family: ${theme.fonts.mono};
        background-color: ${theme.colors.offWhite};
      }

      a {
      }

      a:hover {
        text-decoration: none;
      }

      a.link-animate:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
      }

      a.link-animate:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    `}</style>
  </div>
);
