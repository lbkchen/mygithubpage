import Head from "next/head";

import theme from "../styles/theme";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {/* global styles */}
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-size: 14px;
        font-family: ${theme.fonts.mono};

        background-color: ${theme.colors.sepia};
        background-image: radial-gradient(
          ${theme.colors.sepiaDarker} 5%,
          transparent 0
        );
        background-size: 24px 24px;
      }

      a {
      }

      a:hover {
        text-decoration: none;
      }
    `}</style>
  </div>
);
