import {useState} from "react";

function Navbar ({onChange}){
  const textChange=(e)=>{
    onChange(e.target.value);
  }
  const navSubmit=(e)=>{
    e.preventDefault();
    onChange("");
  }
  
  return(
    <>
    <nav className="navbar bg-body-tertiary">
   <div className="container-fluid">
    <a className="navbar-brand ">ShutterFrame.io</a>
    <form onSubmit={navSubmit} className="d-flex" role="search">
      <input onChange={textChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Refresh</button>
    </form>
  </div>
</nav>
    </>
    );
}
export default Navbar;