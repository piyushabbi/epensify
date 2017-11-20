import React from 'react';
import {Link} from 'react-router-dom';

export const NotFoundPage = () => (
  <div>
    404! Page Not Found<br/>
    <Link to='/'>Home</Link>
  </div>
);
