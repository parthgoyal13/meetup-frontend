import React from "react";
import { Link } from "react-router-dom";


const Header=()=>{
  return(
    <>
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
    <h3><Link to="/" className="text-dark">Meetup</Link>
    </h3>
    <div className="input-group w-50">
    <input type="text" placeholder="Search by title and tags" className="form-control"/>
    </div>
    </header>
    <hr />
    </>
  )
}
export default Header