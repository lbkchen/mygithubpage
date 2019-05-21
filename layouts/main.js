import Link from "next/link";

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link prefetch href="/">
        <a>KEN CHEN</a>
      </Link>
    </div>

    {children}

    {/* local styles */}
    <style jsx>
      {`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 25px 50px;
        }

        .logo {
          display: inline-block;
          padding: 20px;
          background-color: grey;
          color: white;
        }
      `}
    </style>
  </div>
);
