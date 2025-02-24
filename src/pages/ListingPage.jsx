import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useFetch from "../useFetch";
import EventCard from "../components/EventCard";

const ListingPage=()=>{
  const [eventType, setEventType] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTag, setSearchTag] = useState("");
  
  const apiUrl =
  searchTitle && searchTag
    ? `https://meetup-backend-lac.vercel.app/event/titleAndTag/${searchTitle}/${searchTag}`
    : eventType
    ? `https://meetup-backend-lac.vercel.app/events/${eventType}`
    : `https://meetup-backend-lac.vercel.app/readAllEvents`;

  const { data, loading, error } = useFetch(apiUrl);
  const handleEventTypeChange = (e) => {
    setEventType(e.target.value); 
    setSearchTitle("");  
  setSearchTag("");
 
  };
  const handleSearch = (query) => {
    const [title, tag] = query.split(",").map((item) => item.trim());
    setSearchTitle(title || "");
    setSearchTag(tag || "");
    setEventType(""); 
  };

  if (loading) return <p >Loading...</p>;
  if (error) return <p>{error}</p>;
  return(
    <>
    <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="mb-0">Meetup Events</h2>

      <select  id="typesOfEvents" className="form-select w-auto" onChange={handleEventTypeChange}>
        <option value="">Select Event Type</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
        <option value="Both">Both</option>
      </select>
    </div>

    <div className="row">
          {data?.length > 0 ? (
            data.map((event) => (
              <div className="col-md-4" key={event._id}>
                <EventCard event={event} />
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </>
  )
}
export default ListingPage