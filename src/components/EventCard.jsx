import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const EventCard=({event})=>{

  const navigate = useNavigate();
  const clickHandler=()=>{
    navigate(`/event/${event._id}`); 
  }

  return(
    <div className="card m-2 shadow-sm position-relative" style={{ width: "18rem", cursor: "pointer" }}
     onClick={clickHandler}>
      <img 
        src={event.eventImage} 
        className="card-img-top" 
        alt={event.title} 
        style={{ height: "180px", objectFit: "cover" }}  
      />
      <span className="badge bg-secondary position-absolute top-0 start-0 m-2 p-2 z-1">
        {event.eventType} Event
      </span>
      <div className="card-body">
        <h5 className="card-title">{event.eventTitle}</h5>
        <p className="card-text text-muted">{new Date(event.eventDate).toLocaleString()}</p>
      </div>
    </div>
  )
}
export default EventCard