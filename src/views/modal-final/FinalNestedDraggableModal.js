import React from 'react'
import ReactDynamicModal from 'react-draggable-resizable-modal';
import { Button } from 'reactstrap';

const FinalNestedDraggableModal = ({ children,
	openNestedModal,
	setOpenNested,
	modalTypeClass,
	className,
	title,
	handleNestedModalSubmit,
	handleNestedModalCancel
}) => {
    return (
        <div
        style={{
            // position: 'absolute',
            // top: "-125%",
            // left: "-85%"

            position:"fixed",
            top:"0%",
            left:"0%",
            transform:"translate(-50%, -50%)",
         backdropFilter:"revert",
         display: "block"
           
        }}
        // style={{
        //     position: 'absolute',
        //     top: "-25%",
        //     left: "-137%",
        //     right: ""
        // }}
        
        >
            
		  <ReactDynamicModal initWidth={500} initHeight={400} onRequestClose={openNestedModal} isOpen={openNestedModal}
          isCloseButton={true}
                    data={
                        <div className="body">

                    {children}
                        </div>
                         }
                    headerValue={title}     
                    actions={
                    <div>
                        {/* <div style={{bottom:'0',right:'0',margin:'0',padding:'0',position:'absolute'}} className='mb-2 '>
                       <Button size='sm' type='button' className="bg-danger mr-5 "  onClick={() => { handleNestedModalCancel(); }}
                       >Cancel</Button>
                       <Button size='sm' type='button' className="bg-primary ml-5 " style={{marginLeft:'5px',marginRight:'20px'}}  
                        onClick={() => { handleNestedModelSubmit(); }}
                       >Ok</Button>
                    </div> */}
                        <button
                        onClick={() => { handleNestedModalSubmit(); }}
                         >Close</button>
                        <button
                        onClick={() => { handleNestedModalSubmit(); }}
                         >Ok</button>
                        
                        </div>
                }
                    footerText={'You can add some notes here'}
                    style={{
                        header: { color: 'Black', backgroundColor: '#FFF9F9' },
                        footer: { color: 'blue' },
                        actions: { textAlign: 'right' },
                       
                    }}
                />

        </div>
    )
}

export default FinalNestedDraggableModal
