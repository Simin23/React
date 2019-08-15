import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  p {
    color: #f14040;
    font-size: 25px;
    line-height: 600px;
    text-align: center;
  }
`;

class ComponentName extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h("div", null, h("p", null, this.state.title))
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "我的资料"
    };
  }

  componentDidMount() {}
}

ComponentName.css = `p{color:#f14040;font-size:25px;line-height:600px;text-align:center}`;
export default ComponentName;
