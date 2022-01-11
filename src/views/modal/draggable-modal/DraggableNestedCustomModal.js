

import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal-resizable-draggable';

const DraggableNestedCustomModal = ( { title, children, openModalNested, setOpenModalNested, isOpen, className, handleNestedModalCancel, handleNestedModelSubmit } ) => {

    return (
        <div className="Test">
            <ReactModal

                // onFocus={() => console.log("Modal is clicked")}
                className={"my-modal-custom-class"}
                onRequestClose={openModalNested}
                // isOpen={this.state.modalIsOpen}
                isOpen={openModalNested}
                disableResize={true}

            >
                <div className='d-flex justify-content-between p-2'>
                    {title}
                </div>
                <div className="body mt-2">
                    {children}
                </div>
                <div style={{ bottom: '0', right: '0', margin: '0', padding: '0', position: 'absolute' }} className='mb-2 '>
                    <button size='sm' type='button' className="bg-danger mr-5 " onClick={() => { handleNestedModalCancel(); }}
                    >Cancel</button>
                    <button size='sm' type='button' className="bg-primary ml-5 "
                        onClick={() => { handleNestedModelSubmit(); }}
                    >Ok</button>
                </div>
            </ReactModal>
        </div>
    )
}

export default DraggableNestedCustomModal;

// ** PropTypes
DraggableNestedCustomModal.propTypes = {
    title: PropTypes.string.isRequired,
    openModalNested: PropTypes.bool.isRequired,
    className: PropTypes.string,
    handleNestedModelSubmit: PropTypes.func.isRequired,
    handleNestedModalCancel: PropTypes.func.isRequired
}
