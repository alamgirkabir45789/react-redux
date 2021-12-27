import React, { useState } from "react";
import Settings from "../../settings/form/Settings";

const About = ({ children, title }) => {
  const [canvasOpen, setCanvasOpen] = useState(false);

  const handleCanvasOpen = () => {
    setCanvasOpen(!canvasOpen);
  };
  const handleCanvasClose = () => {
    setCanvasOpen(!canvasOpen);
  };

  return (
    <div>
      {/* <Scroll3 /> */}
      <Settings />
      {/* <div>
                <Button
                    color="primary"
                    onClick={handleCanvasOpen}
                >
                    Open
                </Button>
                <Offcanvas
                    isOpen={canvasOpen}
                    direction="end"
                    scrollable
                    toggle={function noRefCheck() { }}

                >
                    <OffcanvasHeader toggle={handleCanvasClose}>
                        Offcanvas
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            <div >
                                <Label for="customerName" >Customer Name</Label>
                                <Input id="customerName" name="customerName" type="text" />
                            </div>
                            <div>
                                <Label for="contactNumber" >Contact No</Label>
                                <Input id="contactNumber" name="contactNumber" type="text" />
                            </div>
                            <div>
                                <Label for="email" >Email</Label>
                                <Input id="email" name="email" type="email" />
                            </div>
                            <div className="mt-2">
                                <Button type="submit" >Submit</Button>
                            </div>
                        </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div> */}
    </div>
  );
};

export default About;
