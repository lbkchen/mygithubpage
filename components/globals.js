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
      }
      a {
        color: #22bad9;
      }
      a:hover {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </div>
);
