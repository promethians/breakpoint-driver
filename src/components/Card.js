import React from "react";
import styled, { css } from "react-emotion";
import { Sizer } from "./Sizer";

import { mq } from "../utils";

const styles = css(
  mq({
    padding: ["10px", "20px"]
  })
);

const CardContainer = styled("div")`
  overflow: hidden;
  min-height: 48px;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #c7c;
`;

class Card extends React.Component {
  render() {
    return (
      <CardContainer className={styles}>
        <Sizer
          target={this.elem}
          sizes={{
            xs: 116,
            s: 252,
            m: 456,
            l: 660,
            xl: Infinity
          }}
          render={size => {
            return (
              <div>
                {this.props.children}
                <p>Card size: {size}</p>
              </div>
            );
          }}
        />
      </CardContainer>
    );
  }
}

export default Card;
