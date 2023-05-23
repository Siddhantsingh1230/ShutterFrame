import Card from "./Card.js";
import Form from "./Form.js";
import { useState } from "react";
function Home({ 
    inputs,
    images,handleOnChange,
    handleOnSubmit
}){
   const [isCollapsed,collapseToggle]=useState(false);
   const toggle=()=>collapseToggle(!isCollapsed);
   
  return(
    <>
      <div className="container">
        <div className="row m-3">
          <div className="col">
              <button onClick={toggle} type="button" class="btn btn-success float-end  m-3">{!isCollapsed ? '+Add' : 'Close'}
              </button>
          </div>
          <Form inputs={inputs} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} isVisible={isCollapsed} />
       </div>
       <div className="row justify-content-center">
        <h1 className="text-center mb-5">Gallery</h1>
        {
          images.map((image,index)=>{
            return(
              (images.length>0)&&<Card key={index} imgSrc={image.url} title={image.title}/>
            );
          })
          
        }
      </div>
    </div>
    </>
    );
}

export default Home;