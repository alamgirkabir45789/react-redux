
import PropTypes from 'prop-types';
import React from 'react';
import Draggable from 'react-draggable';
// import Draggable from 'react-draggable';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './Test.css';

const CustomModal = (
    { children,
        openModal,
        setOpenModal,
        modalTypeClass,
        className,
        title,
        handleMainModelSubmit,
        handleMainModalToggleClose
    } ) => {

    return (
        <div

        >
            <Draggable
            axis='y'
            scale={5}

                style={{
                    touchAction: "none",
                    transform: "translate(0px, 0px)",
                }}
                
            >
                <Modal


                    isOpen={openModal}
                    className={className}

               
                >
                    <ModalHeader
                        // style={{ cursor: 'all-scroll' }}
                        toggle={() => { handleMainModalToggleClose(); }}
                    >
                        {title}
                    </ModalHeader>
                    <ModalBody>
                        {children}
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

    );
};

export default CustomModal;
// ** PropTypes
CustomModal.propTypes = {
    className: PropTypes.string,
    modalTypeClass: PropTypes.string,
    title: PropTypes.string.isRequired,
    openModal: PropTypes.bool.isRequired,
    handleMainModelSubmit: PropTypes.func.isRequired,
    handleMainModalToggleClose: PropTypes.func.isRequired
};