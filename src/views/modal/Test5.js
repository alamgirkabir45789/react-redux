import React from 'react'
import Draggable, { DraggableCore } from "react-draggable";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
const Test5 = ({children,
    openModalNested,
    setOpenModal,
    modalTypeClass,
    className,
    title,
    handleMainModelSubmit,
    handleMainModalToggleClose}) => {
    return (
        <div>
            <div>
        <Draggable>
          <Modal
            isOpen={openModalNested}
            
             style={{
              minWidth: "30rem",
              border:"0.1rem solid green"
            }}
          >
            <ModalHeader
              className="modal-header bg-primary modal-title text-white"
              toggle={() => { handleMainModalToggleClose(); }}
            
            >
              <h2> Header </h2>
            </ModalHeader>
            <ModalBody style={{
                height: "10rem",
                border:"0.1rem solid red"
              }}>
                  {children}
              <div className="form-group row" style={{
                  overflow: "auto",
                  height: "10rem"
                }}>
                <div className="FormRow col-sm-12">
                  <button>open</button>
                <span>Body data </span>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
                        <Button
                            size="sm"
                            color="primary"
                            onClick={() => { handleMainModelSubmit(); }}>
                            Ok
                        </Button>
                    </ModalFooter>
          </Modal>
          </Draggable>
        </div>
        </div>
    )
}

export default Test5
