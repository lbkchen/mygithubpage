import React from "react";

import A from "./link";
import theme from "../../styles/theme";

class H extends React.PureComponent {
  static defaultProps = {
    level: 2,
    fontSize: 24
  };

  render() {
    const { id, level, fontSize, lineHeight } = this.props;
    return (
      <div>
        {React.createElement(
          `h${level}`,
          { style: { fontWeight: 500, fontSize, lineHeight: 1 } },
          <span>
            <a href={`#${id}`} id={id}>
              #
            </a>
          </span>,
          this.props.children
        )}

        <style jsx>{`
          div {
            margin: ${`${40 - fontSize}px`} 0px 8px 0px;
            font-family: ${theme.fonts.headers};
          }
          span {
            position: absolute;
            margin-left: -24px;
            width: 16px;
          }
          a {
            color: ${theme.colors.offBlack};
            text-decoration: none;
            visibility: hidden;
          }
          div:hover a,
          span:hover a {
            visibility: visible;
          }
        `}</style>
      </div>
    );
  }
}

const H2 = H;
const H3 = props => <H {...props} level={3} fontSize={18} />;

export { H2, H3 };
