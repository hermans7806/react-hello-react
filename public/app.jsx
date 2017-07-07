var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter.jsx');

var firstName = "Herman";

ReactDOM.render(
  <Greeter name={firstName} message="Message from props!"/>,
  document.getElementById('app')
);
