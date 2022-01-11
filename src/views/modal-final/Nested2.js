import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import FinalNestedDraggableModal from './FinalNestedDraggableModal';
import CreatableSelect from "react-select/creatable";

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
  

const Nested2 = () => {
    const [openNestedModal, setOpenNestedModal] = useState(false)
    const handleNestedModalSubmit = () => {
        setOpenNestedModal( !openNestedModal );
    };
    const handleNestedModalCancel = () => {
        setOpenNestedModal( !openNestedModal );
    };
    return (
        <div>
               <Button
        color="primary"
        outline
        onClick={() => setOpenNestedModal(!openNestedModal)}
       
      >
        Open2
      </Button>
      <FinalNestedDraggableModal
      openNestedModal={openNestedModal}
      setOpenNestedModal={setOpenNestedModal}
      title="World"
      handleNestedModalSubmit={handleNestedModalSubmit}
      handleNestedModalCancel={handleNestedModalCancel}
      >
          <Card className='m-2 p-2'>
              <CardBody>
                             
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
      </FinalNestedDraggableModal>
     
           
        </div>
    )
}

export default Nested2
