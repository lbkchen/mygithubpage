import React from "react";

import theme from "../../styles/theme";

export default class A extends React.PureComponent {
  static defaultProps = {
    newTab: true
  };

  render() {
    const { href, newTab } = this.props;
    return (
      <a href={href} target={newTab ? "_blank" : undefined}>
        {this.props.children}

        <style jsx>{`
          a {
            position: relative;
            font-weight: bold;
          }

          a:hover {
            cursor: pointer;
          }

          a:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 8px;
            bottom: 0;
            left: 0;
            background-color: ${theme.colors.offBlack};
            transform-origin: bottom;
            transition: all 0.16s cubic-bezier(0.755, 0.05, 0.855, 0.06) 0s;
            opacity: 0.1;
          }

          a:hover:after {
            transform: scaleY(0.125) translateY(4px);
            opacity: 1;
          }
        `}</style>
      </a>
    );
  }
}
