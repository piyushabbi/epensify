import React from 'react';
import { render } from 'react-dom';

import { AppRouter } from './components/router';

import 'normalize-css/normalize.css';
import './styles/styles.scss';

render(<AppRouter />, document.getElementById('root'));
