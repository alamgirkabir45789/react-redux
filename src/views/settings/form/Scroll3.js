import React, { useState } from "react";
import { Home } from "react-feather";
import { Card, CardBody, Col, Row } from "reactstrap";
const Scroll3 = () => {
  const [active, setActive] = useState("merchandising");

  return (
    <div>
      <Card>
        <CardBody>
          <div className="main-div ">
            <Row>
              <Col xl={2} lg={2}>
                <div>
                  <nav className="vertical-menu position-fixed">
                    <a
                      className={`nav-link  d-flex align-items-center ${
                        active === "merchandising" && "active"
                      }`}
                      onClick={() => {
                        setActive("merchandising");
                      }}
                      href="#merchandising"
                    >
                      <span>
                        <Home size={18} /> Merchandising
                      </span>
                    </a>
                    <a
                      className={`nav-link  ${
                        active === "inventory" && "active"
                      }`}
                      href="#inventory"
                      onClick={() => {
                        setActive("inventory");
                      }}
                    >
                      <Home />
                      Inventory
                    </a>
                    <a
                      className={`nav-link  ${
                        active === "settings" && "active"
                      }`}
                      href="#settings"
                      onClick={() => {
                        setActive("settings");
                      }}
                    >
                      <Home />
                      Settings
                    </a>
                    <a
                      className={`nav-link  ${
                        active === "production" && "active"
                      }`}
                      href="#production"
                      onClick={() => {
                        setActive("production");
                      }}
                    >
                      <Home />
                      Production
                    </a>
                  </nav>
                </div>
              </Col>
              <Col xl={10} lg={10}>
                <div>
                  <div className="section-div-scroll">
                    <div id="merchandising" className="">
                      Merchandising What is Lorem Ipsum? Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum. Why do we use
                      it? It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </div>
                    <div id="inventory" className="">
                      Inventory What is Lorem Ipsum? Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum. Why do we use it? It is
                      a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its
                      layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English. Many desktop publishing packages and web
                      page editors now use Lorem Ipsum as their default model
                      text, and a search for 'lorem ipsum' will uncover many web
                      sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes
                      on purpose (injected humour and the like).
                    </div>

                    <div id="settings" className="">
                      General Settings What is Lorem Ipsum? Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum. Why do we use it? It is a long established fact
                      that a reader will be distracted by the readable content
                      of a page when looking at its layout. The point of using
                      Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content
                      here, content here', making it look like readable English.
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </div>

                    <div id="production" className="">
                      Production What is Lorem Ipsum? Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum. Why do we use
                      it? It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </div>
                    <div id="productiosn" className="nested-div">
                      <div>
                        <span className="text-light"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Scroll3;
