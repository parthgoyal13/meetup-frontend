import React,{useState} from "react";
import { Link } from "react-router-dom";


const Header=({ onSearch })=>{
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); 
  };
  return(
    <>
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
    <h3><Link to="/" className="text-dark">Meetup</Link>
    </h3>
    <div className="input-group w-50">

      
    <input type="text" 
    placeholder="Search by title and tags" className="form-control"
    value={searchQuery}
    onChange={handleSearchChange} />
    </div>
    </header>
    <hr />
    </>
  )
}
export default Header