import {useState} from "react";
// import "./css/mvp.css";

import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples.jsx";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

/**
 * App component
 * @author Peter Rutschmann
 * @returns {Element}
 */
const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        },
    ]);

    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    return (
        <BrowserRouter>
            <div
                style={{
                    padding: "20px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h1>Event-Planer</h1>

                <nav>
                    <Link to="/">Home</Link>
                    {" | "}
                    <Link to="/examples">Examples</Link>
                    {" | "}
                    <Link to="/form">Form</Link>
                    {" | "}
                    <Link to="/list">List</Link>
                </nav>

                <hr/>

                <Routes>
                    <Route
                        path="/"
                        element={<EventHome/>}
                    />

                    <Route
                        path="/examples"
                        element={<EventExamples/>}
                    />

                    <Route
                        path="/form"
                        element={
                            <EventForm onAddEvent={addEvent}/>
                        }
                    />

                    <Route
                        path="/list"
                        element={
                            <EventList events={events}/>
                        }
                    />

                    <Route
                        path="*"
                        element={<h2>404 - Page not found</h2>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
