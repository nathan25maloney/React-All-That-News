// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">
        <div className="jumbotron">
          <h2><strong>Science Article Search!</strong></h2>
          
          <hr>
          <p>
            <Link to="/search"><a className="btn btn-primary btn-lg">search</a></Link>
            
          </p>
          </hr>
        </div>

        <div className="row">
          {this.props.children}
        </div>
      </div>
      
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
