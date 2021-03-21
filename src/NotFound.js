import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Sorry we can't find the page you're looking for!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;