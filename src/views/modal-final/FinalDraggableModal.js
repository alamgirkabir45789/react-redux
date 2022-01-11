import React from 'react'
import ReactDynamicModal from 'react-draggable-resizable-modal';
import { Button } from 'reactstrap';
import FinalNestedDraggableModal from './FinalNestedDraggableModal';
import Nested2 from './Nested2';
// import './Final.css';
const FinalDraggableModal = ({ children,
	openModal,
	setOpenModal,
	modalTypeClass,
	className,
	title,
	handleMainModelSubmit,
	handleMainModalCancel
}) => {
    return (
        <div style={{
			position:'static',
						top:'0',
						bottom: "0"
		}}
        
        >          
		  <ReactDynamicModal
		
		   initWidth={500}
		    initHeight={400}
			 onRequestClose={openModal} 
			 isOpen={openModal}
            

                    data={
                        <div className="body">
{children}
                        </div>
                         }
                    headerValue={title}  

                    actions={
					<div>
						{/* <div style={{bottom:'0',right:'0',margin:'0',padding:'0',position:'absolute'}} className='mb-2 '>
                       <Button size='sm' type='button' className="bg-danger mr-5 "   onClick={() => { handleMainModalCancel(); }}
                       >Cancel</Button>
                       <Button size='sm' type='button' className="bg-primary ml-5 " style={{marginLeft:'5px',marginRight:'20px'}} 
                        onClick={() => { handleMainModelSubmit(); }}
                        >Ok</Button>
                    </div> */}

						<button 
						 onClick={() => { handleMainModelSubmit(); }}>Close</button>

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
    );
};

export default FinalDraggableModal
