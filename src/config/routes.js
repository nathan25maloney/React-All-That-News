var React = require('react')
var router = require('react-router')

var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;


var Main = require('../components/Main.js')
var Search = require('../components/Search.js');
var Results = require('../components/Results.js');
var Saved = require('../components/Saved.js');


module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>

	      <Route path="/search" component={Search} />
	      <Route path="/results" component={Results} />
	      <Route path="/saved" component={Saved} />

	    </Route>
    </Router>

      
);
