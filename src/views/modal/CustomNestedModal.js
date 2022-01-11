

import PropTypes from 'prop-types';
import React from 'react';
import Draggable2 from 'react-draggable';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "./Test.css";
const CustomNestedModal = ( { children, openModalNested, setOpenModalNested, modalTypeClass, className, title, handleNestedModelOpen, handleNestedModelSubmit } ) => {

    return (
        <div            
        >
            <Draggable2
            >
                <Modal isOpen={openModalNested} className={className}
                    id="imhandle"



                >
                    <ModalHeader
                        // style={{ cursor: 'all-scroll' }}
                        toggle={() => setOpenModalNested( !openModalNested )}
                    >  {title}</ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button size="sm" color="primary" onClick={() => { handleNestedModelSubmit(); }}>
                            Done
                        </Button>
                    </ModalFooter>
                </Modal>
            </Draggable2>
        </div>
    );
};

export default CustomNestedModal;
// ** PropTypes
CustomNestedModal.propTypes = {
    className: PropTypes.string,
    modalTypeClass: PropTypes.string,
    title: PropTypes.string.isRequired,
    openModal: PropTypes.bool.isRequired,
    handleNestedModelSubmit: PropTypes.func.isRequired,
    handleNestedModelOClose: PropTypes.func
};