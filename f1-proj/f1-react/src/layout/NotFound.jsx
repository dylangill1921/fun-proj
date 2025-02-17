// layout/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

function NotFound() {
    return (
        <div className='not-found'>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist...</p>
            <Link to="/" className='home-link'>
                Go Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
