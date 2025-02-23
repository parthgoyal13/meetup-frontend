import React from "react";
import Header from "../components/Header";
import useFetch from "../useFetch";
import EventCard from "../components/EventCard";

const ListingPage=()=>{

  const { data, loading, error } = useFetch("https://meetup-backend-lac.vercel.app/readAllEvents");

  if (loading) return <p >Loading...</p>;

  return(
    <>
    <Header/>
    <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="mb-0">Meetup Events</h2>

      <select  id="typesOfEvents" className="form-select w-auto">
        <option value="">Select Event Type</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
        <option value="">Both</option>
      </select>
    </div>

    <div className="row">
      {data?.map((event)=>(
        <div className="col-md-4" key={event._id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
export default ListingPage