var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Results = React.createClass({

  // Here we render the component
  render: function() {
    <div><h1>Results</h1></div>
    
  }
});

// Export the component back for use in other files
module.exports = Results;
