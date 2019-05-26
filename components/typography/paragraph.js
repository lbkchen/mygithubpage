import React from "react";

export default class P extends React.PureComponent {
  render() {
    return (
      <p>
        {this.props.children}
        <style jsx>{`
          p {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 24px;
          }
        `}</style>
      </p>
    );
  }
}
