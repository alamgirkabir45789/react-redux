import React from 'react'
import './Test.css';
import ReactModal from 'react-modal-resizable-draggable';
import { useState } from 'react';
const TestModal2 = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maiores obcaecati similique aperiam mollitia dolorem, earum vitae dolor alias odit amet in eligendi a dignissimos incidunt reiciendis veniam quia!</p>
                    </div>
                    
                   
                    <div style={{bottom:'0',right:'0',margin:'0',padding:'0',position:'absolute'}} className='mb-2 '>
                       <button type='button' className="mr-5 p-2" style={{width:'100px'}} onClick={() => setOpenModal(!openModal)}>Ok</button>
                    </div>
                </ReactModal>
        </div>
    )
}

export default TestModal2
