
import './Test.css';
import ReactModal from 'react-modal-resizable-draggable';



import React, { useState } from 'react'
import TestModal2 from './TestModal2';
import { Button } from 'reactstrap';



const TestModal = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openNestedModal, setOpenNestedModal] = useState(false)

    return (
        <div className="Test">
                <button   onClick={() => setOpenModal(!openModal)}>
                    Open modal
                </button>
                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    // onFocus={() => console.log("Modal is clicked")}
                    // className={"my-modal-custom-class"}
                     onRequestClose={openModal} 
                    // isOpen={this.state.modalIsOpen}
                    isOpen={openModal}
                    >
                    
                    <div className='d-flex justify-content-between p-2'>
                       <div>Modal Title</div>
                       <span  onClick={() => setOpenModal(openModal)}>x</span>
                    </div>
                   
                    <div className="body mt-2">
                    <button   onClick={() => setOpenNestedModal(!openNestedModal)}>
                    Open modal
                </button>

               
                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    // onFocus={() => console.log("Modal is clicked")}
                    // className={"my-modal-custom-class"}
                     onRequestClose={openNestedModal} 
                    // isOpen={this.state.modalIsOpen}
                    isOpen={openNestedModal}
                    >
                    
                    <div className='d-flex justify-content-between p-2'>
                       <div>Modal Title</div>
                       <button id='close' type="button"  onClick={() => setOpenModal(!openModal)}>x</button>
                    </div>
                   
                    <div className="body mt-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maiores obcaecati similique aperiam mollitia dolorem, earum vitae dolor alias odit amet in eligendi a dignissimos incidunt reiciendis veniam quia!</p>
                    </div>
                    
                   
                    <div style={{bottom:'0',right:'0',margin:'0',padding:'0',position:'absolute'}} className='mb-2 '>
                       <button type='button' className="mr-5 p-2" style={{width:'100px'}} onClick={() => setOpenNestedModal(!openNestedModal)}>Nested Ok</button>
                    </div>
                </ReactModal>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maiores obcaecati similique aperiam mollitia dolorem, earum vitae dolor alias odit amet in eligendi a dignissimos incidunt reiciendis veniam quia!</p>
                    </div>
                    
                   
                    <div style={{bottom:'0',right:'0',margin:'0',padding:'0',position:'absolute'}} className='mb-2 '>
                       <Button size='sm' type='button' className="bg-danger mr-5 "  onClick={() => setOpenModal(!openModal)}>Cancel</Button>
                       <Button size='sm' type='button' className="bg-primary ml-5 " style={{marginLeft:'5px',marginRight:'20px'}}  onClick={() => setOpenModal(!openModal)}>Ok</Button>
                    </div>
                </ReactModal>
              
            </div>
    )
}

export default TestModal
