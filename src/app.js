'use strict';


let React = require('react');
let ReactDom = require('react-dom');

let Cal = require('./components/cal/cal')


ReactDom.render(
  <Cal />,
  document.getElementById('cal')
)

