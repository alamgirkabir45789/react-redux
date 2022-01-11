import React, { useState } from "react";
import { Button } from "reactstrap";
import DraggableCustomModal from "../../modal/draggable-modal/DraggableCustomModal";
import DraggableNestedCustomModal from "../../modal/draggable-modal/DraggableNestedCustomModal";

const About = () => {
    const [openModal, setOpenModal] = useState( false );
    const [openNestedModal, setOpenNestedModal] = useState( false )


    const handleMainModelSubmit = () => {
        setOpenModal( !openModal );
    };

    const handleMainModalCancel = () => {
        setOpenModal( !openModal );
    };

    const handleNestedModelSubmit = () => {
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
                onClick={() => setOpenModal( !openModal )}

            >
                Open
            </Button>
            <DraggableCustomModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                title="Hello"
                handleMainModelSubmit={handleMainModelSubmit}
                handleMainModalCancel={handleMainModalCancel}


            >
                <Button
                    color="primary"
                    outline
                    onClick={() => setOpenNestedModal( !openNestedModal )}

                >
                    Open Nested Modal
                </Button>

                <DraggableNestedCustomModal
                    openModalNested={openNestedModal}
                    setOpenModalNested={setOpenNestedModal}
                    title="Hello World"
                    handleNestedModelSubmit={handleNestedModelSubmit}
                    handleNestedModalCancel={handleNestedModalCancel}
                >

                </DraggableNestedCustomModal>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet quibusdam id dignissimos, recusandae ullam non vitae tenetur beatae molestias cupiditate sed dolores qui adipisci fugit atque neque nihil magni.
                    </p>
                </div>


            </DraggableCustomModal>


            {/* <Scroll3 /> */}
            {/* <Settings /> */}

            {/* <Test/> */}

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
