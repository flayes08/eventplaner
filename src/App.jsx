import React, { useState } from "react";
import './css/mvp.css';
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples.jsx";

/**
 * App component
 * @author Peter Rutschmann
 * @returns {Element}
 * @constructor
 */
const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        }
    ]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
            <h1>Event-Planer</h1>
            <EventHome/>
            <hr/>
            <EventExamples/>
            <hr/>
            <EventForm onAddEvent={addEvent}/>
            <hr/>
            <EventList events={events}/>
        </div>
    );
};

export default App;