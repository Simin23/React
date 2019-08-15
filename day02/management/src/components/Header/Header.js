import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import { Route, Link, Redirect } from "react-router-dom";
import Niming from "../Content/Niming/Niming";
import Jishu from "../Content/Jishu/Jishu";
import Xiangmu from "../Content/Xiangmu/Xiangmu";
import Vip from "../Content/Vip/Vip";
import Xueyuan from "../Content/Xueyuan/Xueyuan";
import Wode from "../Content/Wode/Wode";
import Jiaofei from "../Content/Jiaofei/Jiaofei";
import Canjia from "../Content/Canjia/Canjia";
import Ceping from "../Content/Ceping/Ceping";
import Jiaoxue from "../Content/Jiaoxue/Jiaoxue";
const StyledComponents = styled.div`
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
  .header {
    width: 100%;
    flex: 1;
    background: #428bca;
  }
  img {
    height: 111px;
  }
  .main {
    width: 100%;
    flex: 9;
    display: flex;
  }
  .sidebar {
    height: 100%;
    flex: 1;
    border-right: 2px solid #ccc;
  }
  dl dt {
    padding-left: 50px;
    font-size: 14px;
    line-height: 50px;
    border-bottom: 2px solid #ccc;
    color: #2b7dbc;
    font-weight: bold;
  }
  dl dt:last-child {
    border-top: 2px solid #ccc;
  }
  dl dd {
    font-size: 14px;
    padding-left: 30px;
    line-height: 40px;
    border-bottom: 2px dotted #ccc;
  }
  dl dd:last-child {
    border-bottom: none;
  }
  .setion {
    height: 100%;
    flex: 9;
  }
`;

class ComponentName extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: "box"
        },
        h(
          "div",
          {
            className: "header"
          },
          h(
            "h1",
            null,
            h("img", {
              src:
                "http://stu.1000phone.net/Public/assets/css/images/logo.png?1565708474",
              alt: ""
            })
          )
        ),
        h(
          "div",
          {
            className: "main"
          },
          h(
            "div",
            {
              className: "sidebar"
            },
            h(
              "dl",
              null,
              h("dt", null, "\u5B66\u5458\u540E\u53F0"),
              this.state.cont.map((item, index) => {
                return h(
                  "dd",
                  {
                    key: index
                  },
                  h(
                    Link,
                    {
                      to: item.url
                    },
                    item.title
                  )
                );
              })
            ),
            h("dl", null, h("dt", null, "\u5B66\u5458\u8003\u52E4"))
          ),
          h(
            "div",
            {
              className: "setion"
            },
            h(Route, {
              path: "/niming",
              component: Niming
            }),
            h(Route, {
              path: "/jishu",
              component: Jishu
            }),
            h(Route, {
              path: "/Xiangmu",
              component: Xiangmu
            }),
            h(Route, {
              path: "/Vip",
              component: Vip
            }),
            h(Route, {
              path: "/Xueyuan",
              component: Xueyuan
            }),
            h(Route, {
              path: "/Wode",
              component: Wode
            }),
            h(Route, {
              path: "/Jiaofei",
              component: Jiaofei
            }),
            h(Route, {
              path: "/Canjia",
              component: Canjia
            }),
            h(Route, {
              path: "/Ceping",
              component: Ceping
            }),
            h(Route, {
              path: "/Jiaoxue",
              component: Jiaoxue
            }),
            h(Redirect, {
              to: {
                pathname: "/niming"
              }
            })
          )
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      cont: [
        {
          title: "匿名投诉",
          url: "/niming"
        },
        {
          title: "技术问题",
          url: "/jishu"
        },
        {
          title: "项目上传",
          url: "/xiangmu"
        },
        {
          title: "VIP",
          url: "/vip"
        },
        {
          title: "学员周报",
          url: "/xueyuan"
        },
        {
          title: "我的资料",
          url: "/wode"
        },
        {
          title: "缴费明细",
          url: "/jiaofei"
        },
        {
          title: "参加考试",
          url: "/canjia"
        },
        {
          title: "学员测评",
          url: "/ceping"
        },
        {
          title: "教学测评",
          url: "/jiaoxue"
        }
      ]
    };
  }

  componentDidMount() {}
}

ComponentName.css = `.box{width:100%;height:100%;display:flex;flex-direction:column}a{text-decoration:none}.header{width:100%;flex:1;background:#428bca}img{height:111px}.main{width:100%;flex:9;display:flex}.sidebar{height:100%;flex:1;border-right:2px solid #ccc}dl dt{padding-left:50px;font-size:14px;line-height:50px;border-bottom:2px solid #ccc;color:#2b7dbc;font-weight:bold}dl dt:last-child{border-top:2px solid #ccc}dl dd{font-size:14px;padding-left:30px;line-height:40px;border-bottom:2px dotted #ccc}dl dd:last-child{border-bottom:none}.setion{height:100%;flex:9}`;
export default ComponentName;
