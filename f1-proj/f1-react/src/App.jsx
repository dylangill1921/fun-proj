// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; 
import Latest from './layout/Latest'; 
import Video from './layout/Video'; 
import Schedule from './layout/Schedule';
import Results from './layout/Results'; 
import Drivers from './layout/Drivers'; 
import Constructors from './layout/Constructors'; 
import Login from './layout/Login'; 
import Register from './layout/Register';
import './css/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <Router>
            {/* NavBar Component */}
            <NavBar />

                {/* Routes */}
                <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={
                    <div className="App">
                        <header>
                            <h1>Welcome to the Home of FORMULA 1</h1>
                        </header>
                        <main>
                            <section className="text-container">
                            <h3>THIS IS WHERE THE RACE BEGINS!</h3>
                            <h6>
                                <b>
                                <i>DRIVE TO SURVIVE...</i>
                                </b>
                            </h6>
                            </section>
                        </main>
                        <footer>
                            {/* Footer content */}
                        </footer>
                    </div>
                    }
                />

                {/* Other Pages */}
                <Route path="/latest" element={<Latest />} />
                <Route path="/video" element={<Video />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/results" element={<Results />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/constructors" element={<Constructors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;