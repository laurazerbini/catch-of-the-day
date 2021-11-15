// import dependencies:
import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import "./css/style.css";

// this class will be reusable
// every class in react needs at least 01 method inside of it
// render will be the method and it will render the information that will be shown on the screen
render(<Router />, document.querySelector('#main'));