import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal-resizable-draggable';

const DraggableCustomModal = ( { children, title, openModal, setOpenModal, isOpen, className, handleMainModelSubmit, handleMainModalCancel } ) => {

    return (
        <div

            style={{
                position: 'static'

            }}
        >

            <ReactModal


                // onFocus={() => console.log("Modal is clicked")}
                className={"my-modal-custom-class"}
                onRequestClose={openModal}
                // isOpen={this.state.modalIsOpen}
                isOpen={openModal}
                disableResize={true}

            >

                <div className='d-flex justify-content-between p-2'>
                    {title}

                </div>
                <div className="body mt-2">

                    {children}
                </div>


                <div style={{ bottom: '0', right: '0', margin: '0', padding: '0', position: 'absolute' }} className='mb-2 '>
                    <button size='sm' type='button' className="bg-danger  " onClick={() => { handleMainModalCancel(); }}
                    >Cancel</button>
                    <button size='sm' type='button' className="bg-primary ml-5 " 
                        onClick={() => { handleMainModelSubmit(); }}
                    >Ok</button>
                </div>

            </ReactModal>
        </div>
    )
}

export default DraggableCustomModal;

// ** PropTypes
DraggableCustomModal.propTypes = {
    title: PropTypes.string.isRequired,
    openModal: PropTypes.bool.isRequired,
    className: PropTypes.string,
    handleMainModelSubmit: PropTypes.func.isRequired,
    handleMainModalCancel: PropTypes.func.isRequired

}
