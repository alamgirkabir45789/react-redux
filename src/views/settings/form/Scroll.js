import React from "react";
import { Card, Col, Row } from "reactstrap";
import "./Scroll.css";
const Scroll = () => {
  return (
    <Card className="m-3">
      <Row>
        <Col lg={2} sm={2} md={2} xs={2}>
          <div className="sidebar-container">
            <div className="sidebar-logo">Project Name</div>
            <ul className="sidebar-navigation">
              <li>
                <a href="#test4">
                  <i className="fa fa-home" aria-hidden="true"></i> Homepage
                </a>
              </li>
              <li>
                <a href="#home">
                  <i className="fa fa-tachometer" aria-hidden="true"></i>{" "}
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#test3">
                  <i className="fa fa-users" aria-hidden="true"></i> Friends
                </a>
              </li>
              <li>
                <a href="#test">
                  <i className="fa fa-cog" aria-hidden="true"></i> Settings
                </a>
              </li>
              <li>
                <a href="#test2">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                  Information
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={10} sm={10} md={10} xs={10}>
          <div className="content-container">
            <div className="menu-scroll">
              <div>
                <h1>Navbar example</h1>
                <p>
                  This example is a quick exercise to illustrate how the
                  default, static and fixed to top navbar work. It includes the
                  responsive CSS and HTML, so it also adapts to your viewport
                  and device.
                </p>
                <p>
                  To see the difference between static and fixed top navbars,
                  just scroll.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-primary"
                    href="../../components/#navbar"
                    role="button"
                  >
                    View navbar docs &raquo;
                  </a>
                </p>
              </div>
              <div id="test4">
                <h2 style={{ backgroundColor: "green" }}>From Test4</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cupiditate velit facilis optio libero ipsam quibusdam illum cum
                expedita laboriosam, quasi, sit asperiores provident inventore
                necessitatibus accusamus. Recusandae, dolorum harum. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Nemo
                accusantium dolores ducimus iure ut quis, quaerat voluptas amet
                reiciendis cumque aliquam sint exercitationem facere voluptatum
                cum non, aut vitae quas. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem saepe pariatur quas quis! Quod
                nulla odio iure corrupti, soluta sequi mollitia. Ipsam aliquid
                similique, voluptas et porro excepturi nam alias? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Recusandae incidunt
                non quasi cupiditate, cumque illum voluptates temporibus earum
                vitae architecto nemo, quod unde quam aut alias! Animi aliquid
                voluptatum vitae.
              </div>
              <div id="home">
                <h2 style={{ backgroundColor: "blue" }}>From Home</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cupiditate velit facilis optio libero ipsam quibusdam illum cum
                expedita laboriosam, quasi, sit asperiores provident inventore
                necessitatibus accusamus. Recusandae, dolorum harum. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Nemo
                accusantium dolores ducimus iure ut quis, quaerat voluptas amet
                reiciendis cumque aliquam sint exercitationem facere voluptatum
                cum non, aut vitae quas. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem saepe pariatur quas quis! Quod
                nulla odio iure corrupti, soluta sequi mollitia. Ipsam aliquid
                similique, voluptas et porro excepturi nam alias? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Recusandae incidunt
                non quasi cupiditate, cumque illum voluptates temporibus earum
                vitae architecto nemo, quod unde quam aut alias! Animi aliquid
                voluptatum vitae.
              </div>
              <div id="test3">
                <h2 style={{ backgroundColor: "gray" }}>From Test3</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cupiditate velit facilis optio libero ipsam quibusdam illum cum
                expedita laboriosam, quasi, sit asperiores provident inventore
                necessitatibus accusamus. Recusandae, dolorum harum. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Nemo
                accusantium dolores ducimus iure ut quis, quaerat voluptas amet
                reiciendis cumque aliquam sint exercitationem facere voluptatum
                cum non, aut vitae quas. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem saepe pariatur quas quis! Quod
                nulla odio iure corrupti, soluta sequi mollitia. Ipsam aliquid
                similique, voluptas et porro excepturi nam alias? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Recusandae incidunt
                non quasi cupiditate, cumque illum voluptates temporibus earum
                vitae architecto nemo, quod unde quam aut alias! Animi aliquid
                voluptatum vitae.
              </div>
              <div id="test">
                <h2 style={{ backgroundColor: "yellow" }}>From Test</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cupiditate velit facilis optio libero ipsam quibusdam illum cum
                expedita laboriosam, quasi, sit asperiores provident inventore
                necessitatibus accusamus. Recusandae, dolorum harum. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Nemo
                accusantium dolores ducimus iure ut quis, quaerat voluptas amet
                reiciendis cumque aliquam sint exercitationem facere voluptatum
                cum non, aut vitae quas. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem saepe pariatur quas quis! Quod
                nulla odio iure corrupti, soluta sequi mollitia. Ipsam aliquid
                similique, voluptas et porro excepturi nam alias? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Recusandae incidunt
                non quasi cupiditate, cumque illum voluptates temporibus earum
                vitae architecto nemo, quod unde quam aut alias! Animi aliquid
                voluptatum vitae.
              </div>
              <div id="test2">
                <h2 style={{ backgroundColor: "black" }}>From Test2</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cupiditate velit facilis optio libero ipsam quibusdam illum cum
                expedita laboriosam, quasi, sit asperiores provident inventore
                necessitatibus accusamus. Recusandae, dolorum harum. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Nemo
                accusantium dolores ducimus iure ut quis, quaerat voluptas amet
                reiciendis cumque aliquam sint exercitationem facere voluptatum
                cum non, aut vitae quas. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem saepe pariatur quas quis! Quod
                nulla odio iure corrupti, soluta sequi mollitia. Ipsam aliquid
                similique, voluptas et porro excepturi nam alias? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Recusandae incidunt
                non quasi cupiditate, cumque illum voluptates temporibus earum
                vitae architecto nemo, quod unde quam aut alias! Animi aliquid
                voluptatum vitae.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Scroll;
