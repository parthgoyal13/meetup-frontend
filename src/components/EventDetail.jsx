import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

function EventDetail() {
  const { eventId } = useParams();
  const { data, loading, error } = useFetch(
    `https://meetup-backend-lac.vercel.app/event/${eventId}`
  );

  console.log("Event ID:", eventId);
  console.log("Fetched Event Data:", data); // Debugging API response

  if (loading) return <p>Loading event details...</p>;
  if (!data) return <p>No event data found.</p>;

  return (
    <>
      <Header />
      <div className="container event-detail my-4">
        <h1 className="mb-3">{data.eventTitle}</h1>

        <div className="row">
          {/* Left Side: Event Image & Description */}
          <div className="col-md-6">
            <div className="text-center">
              <img
                src={data.eventImage}
                alt={data.eventTitle}
                className="img-fluid rounded my-2"
              />
            </div>
            <p><strong>Details:</strong> {data.eventDescription}</p>

            <h4>Event Tags:</h4>
            {data.eventTags.map((eventTag) => (
              <button
                key={eventTag}
                className="btn btn-outline-primary me-2 mb-2"
              >
                {eventTag}
              </button>
            ))}
          </div>

          {/* Right Side: Event Details & Speakers */}
          <div className="col-md-6">
            <div className="p-3 bg-light shadow rounded">
              <p><strong>Date & Time:</strong> {new Date(data.eventDate).toLocaleString()}, {data.eventTime}</p>
              <p><strong>Venue:</strong> {data.eventVenue}</p>
              <p><strong>Price:</strong> ${data.eventPrice}</p>
            </div>

            {/* Speakers Section */}
            <h4 className="mt-3">Speakers:</h4>
            {data.eventSpeakerName && data.eventSpeakerName.length > 0 ? (
              <div className="row">
                {data.eventSpeakerName.map((name, index) => (
                  <div key={index} className="col-md-6 text-center">
                    <img
                      src={data.eventSpeakerImage[index]}
                      alt={name}
                      className="img-fluid rounded-circle mb-2"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <p className="mb-1"><strong>{name}</strong></p>
                    <p className="text-muted">{data.eventSpeakerDesignation[index]}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No speakers available for this event.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
