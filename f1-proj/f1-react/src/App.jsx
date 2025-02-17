// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Header/Header'; 
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
import NotFound from './layout/NotFound';
import Footer from './components/Footer/Footer'
import SimpleSlider from './components/SlickCarousel/Slick';


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
                        <main>
                            <section id='f1-intro' className="intro-section">
                                <div className='intro-text'>
                                    <h1>WELCOME TO THE HOME OF FORMULA 1</h1>
                                    <p>Experience the pinnacle of motorsport where speed, technology, aero dynamics, 
                                        and glamour fuse into one thrilling spectacle.</p>
                                    <h3>THIS IS WHERE THE RACE BEGINS!</h3>
                                    <p>Join us for a season of unbeatable racing, exclusive behind-the-scenes access, and weekend in and weekend out race coverage.
                                        Your journey into the heart of F1 starts here.</p>
                                </div>
                            </section>
                            <section id="f1-current-regs" className="current-regs-section">
                                <div className="current-regs-text">
                                    <h2>Current Generation Regulations</h2>
                                    <SimpleSlider />
                                </div>
                            </section>
                            <section id='f1-new-regs' className='new-regs-section'>
                                <div className='new-regs-text'>

                                </div>
                            </section>
                            <section id='f1-drivers' className='drivers-section'>
                                <div className='drivers-text'>
                                
                                </div>
                            </section>
                            <section id='f1-constructors' className='constructors-section'>
                                <div className='constructors-text'>

                                </div>
                            </section>
                            <section id='f1-members' className='members-section'>
                                <div className='members-text'>

                                </div>
                            </section>
                        </main>
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

                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Footer Component */}
            <Footer />
        </Router>
    );
}

export default App;