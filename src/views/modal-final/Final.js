import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import React, { useState } from 'react'
import FinalDraggableModal from './FinalDraggableModal'
import Nested2 from './Nested2'
import CreatableSelect from "react-select/creatable";
import FinalNestedDraggableModal from './FinalNestedDraggableModal';
import Nested3 from './Nested3';


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
  


const Final = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openNestedModal, setOpenNestedModal] = useState(false)
    const handleNestedModalSubmit = () => {
        setOpenNestedModal( !openNestedModal );
    };
    const handleNestedModalCancel = () => {
        setOpenNestedModal( !openNestedModal );
    };
   
    const handleMainModelSubmit = () => {
        setOpenModal( !openModal );
    };

    const handleMainModalCancel = () => {
        setOpenModal( !openModal );
    };
    return (
        <div>
          <Button
        color="primary"
        outline
        onClick={() => setOpenModal(!openModal)}
       
      >
        Open
      </Button>

      <FinalDraggableModal
       openModal={openModal}
       setOpenModal={setOpenModal}
       title="Hello"
       handleMainModelSubmit={handleMainModelSubmit}
       handleMainModalCancel={handleMainModalCancel}
     
      >
          <div>

         
          <div>
          <Button
        color="primary"
        outline
        onClick={() => setOpenNestedModal(!openNestedModal)}
       
      >
        Open2
      </Button>

          </div>

</div>
         
          <div>
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
          </div>
          {/* <div>
          <Nested2/>

          </div> */}

          {/* Nested Content */}
          <div>
          <div>
<FinalNestedDraggableModal
      openNestedModal={openNestedModal}
      setOpenNestedModal={setOpenNestedModal}
      title="World"
      handleNestedModalSubmit={handleNestedModalSubmit}
      handleNestedModalCancel={handleNestedModalCancel}
      >

        <Nested3/>
      </FinalNestedDraggableModal>
</div>
          </div>
          
      
      </FinalDraggableModal>
     
        </div>
    )
}

export default Final
