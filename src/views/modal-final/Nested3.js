import React from 'react'
import CreatableSelect from "react-select/creatable";
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

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
  
const Nested3 = () => {
    return (
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
    )
}

export default Nested3
