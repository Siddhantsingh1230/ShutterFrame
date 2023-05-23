import { useMemo } from "react";

function Preview({inputs}){
  return (
    inputs.url&&<>
    <div className="rounded"
    style={{
      width:"200px",
      height:"200px",
      backgroundImage:`url(${inputs.url})`,
      backgroundSize:"contain",
      backgroundRepeat:"no-repeat"
    }}
    ></div>
    </>
    
    );
}



function Form({inputs ,isVisible, handleOnSubmit ,handleOnChange}){
  const isDisabled=useMemo(()=>{
    return !! Object.values(inputs).some(input=>!input);
  },[inputs]);
  
  return(
   isVisible && <>
   
   <form id="form" className="mb-3" onSubmit={ handleOnSubmit }>
    <Preview inputs={inputs}/>
      <div>
        <h1 className="text-center">Upload Image </h1>
        <label htmlFor="textInput" className="form-label">Text Input</label>
        <input  onChange={handleOnChange} type="text" className="form-control" id="textInput" placeholder="Enter Title" />
      </div>

      <div className="mb-3">
        <label htmlFor="fileInput" className="form-label">Add Image</label>
        <input onChange={handleOnChange} name="file" type="file" className="form-control" id="fileInput" />
      </div>

      <button disabled={isDisabled} type="submit" className="btn btn-danger ">Submit</button>
    </form>
    </>
    );
}
export default Form;