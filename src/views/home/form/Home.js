import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import CustomModal from "../../modal/CustomModal";
import CreatableSelect from "react-select/creatable";
import CustomNestedModal from "../../modal/CustomNestedModal";

import "../../modal/Test.css"
import Test6 from "../../modal/Test6";
const selectSensitivityCategoryForSize = [
  { value: 1, label: "As per Gmt Size" },
  { value: 2, label: "For All Gmt Size" },
  { value: 3, label: "Size Mapping" },
  { value: 1, label: "As per Gmt Size" },
  { value: 2, label: "For All Gmt Size" },
  { value: 3, label: "Size Mapping" },
  { value: 1, label: "As per Gmt Size" },
  { value: 2, label: "For All Gmt Size" },
  { value: 3, label: "Size Mapping" },
  { value: 1, label: "As per Gmt Size" },
  { value: 2, label: "For All Gmt Size" },
  { value: 3, label: "Size Mapping" },
];

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openNestedModal, setOpenNestedModal] = useState(false)

  const handleSegmentAssignModalSubmit = () => {
    setOpenModal(!openModal);
  };
  const handleSegmentAssignModalClose = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>

      <Button
        color="primary"
        outline
        onClick={() => setOpenModal(!openModal)}
        handleMainModelSubmit={handleSegmentAssignModalSubmit}
        title="Add Item Segment"
      >
        Open
      </Button>
      <CustomModal
        modalTypeClass="vertically-centered-modal"
        className="modal-dialog-centered modal-lg"
        handleMainModalToggleClose={handleSegmentAssignModalClose}
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="CM Calculation:"
      >
        <Card outline>
          <CardBody>
            <CardText>
            <Button
        color="primary"
        outline
        onClick={() => setOpenNestedModal(!openNestedModal)}
        handleMainModelSubmit={handleSegmentAssignModalSubmit}
        title="Add Item Segment"
      >
        Open
      </Button>
      <Test6
      openModalNested={openNestedModal}
      >
sdfdsfdf
      </Test6>
      <CustomNestedModal
        modalTypeClass="vertically-centered-modal"
        className="modal-dialog-centered modal-lg"
        handleMainModalToggleClose={handleSegmentAssignModalClose}
        openModalNested={openNestedModal}
        setOpenModalNested={setOpenNestedModal}
        title="CM Calculation:"
      >
<div>
  <div style={{height:'200px'}}>
  <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  //  maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
  </div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores ullam rerum quae impedit veniam enim. Veritatis alias ullam laudantium tempore suscipit, nostrum nobis ipsum vitae debitis harum, corrupti voluptates?
  <div>

  </div>
</div>
      </CustomNestedModal>

            </CardText>
            <Row>
              <Col sm="6">
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  //  maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
              </Col>

              <Col sm="6">
              <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
                <CreatableSelect
                  id="segmentId"
                  name="segment"
                  placeholder="Select Sensitivity"
                  // maxMenuHeight="100px"
                  // menuPlacement="auto"
                  //menuPosition="fixed"
                  isClearable={true}
                  options={selectSensitivityCategoryForSize}
                  classNamePrefix="select"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </CustomModal>
    </div>
  );
};

export default Home;
