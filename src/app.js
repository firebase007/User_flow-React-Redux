import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './utils/router';
import './assets/styles/style.scss';

const App = () => (
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>
);

export default App;
