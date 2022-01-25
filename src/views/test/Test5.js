import React from 'react';
import img from '../../assets/images/9129_1392502450_treehillschool43.png';
const Test5 = () => {
  return <div className='container mt-3'>
      <div className="media mt-3">
    <img src={img} className="align-self-center mr-3" style={{width:'60px'}}/>
    <div className="media-body">
      <h4>Media Bottom</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
    <div className="media border p-3">
    
      <div className="media-body">
        <h4>John Doe <small><i>Posted on February 19,2016</i></small></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut officia doloremque alias itaque aut provident voluptatibus labore dolores corrupti porro, quibusdam animi asperiores dolor temporibus excepturi sint repudiandae illum?</p>
      </div>
      <img src={img} alt="John" className='ml-3 mt-3 align-self-center rounded-circle' style={{width:'60px'}}/>
    </div>
   <div className="d-flex bg-secondary">
  <div className="p-2 mr-auto bg-info">Flex item 1</div>
  <div className="p-2 bg-warning">Flex item 2</div>
  <div className="p-2 ml-auto bg-primary ">Flex item 3</div>
</div>
  </div>;
};

export default Test5;
