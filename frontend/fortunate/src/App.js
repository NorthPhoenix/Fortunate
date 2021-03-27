import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

import Header from './components/Header'
import Footer from './components/Footer'

/*<<<<<<< HEAD
// Pages
  // can add home here
// import Header from './components/Header'
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    primary: {
       main: '#515b5f',
    },
    secondary: {
      main: '#ffb300',
    },
  },
})

class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <div className="App">

        // can add home here

        <Router>
// navbar doesn't change just the content of page changes so not under switch
      <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/signup" component={signup}/>
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
    );
  }
=======*/
/// Pages
import login from "./pages/login";
import signup from "./pages/signup";
import home from './pages/home';
import portfolio from './pages/portfolio';
import dictionary from './pages/dictionary';

// Log-in check
//let authenticated;
const token = localStorage.FBIdToken;
if (token) {
	//let decodedToken = jwtDecode(token);
	console.log(token);
	// if (decodedToken.exp * 1000 < Date.now()) {
	// 	window.location.href = "/login";
	// }
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<style>{"body {background-color: #424242;}"}</style> // #fff
					- white #424242-grey #ffab00 -yellowish
				</Helmet>

				<Router>
         <Header/>
					<div>
						<Switch>
              <Route exact path="/" component={home}/>
							<Route exact path="/login" component={login} />
							<Route exact path="/signup" component={signup} />
              <Route exact path="/portfolio" component={portfolio} />
							<Route exact path="/dictionary" component={dictionary} />
						</Switch>
					</div>
          <Footer/>
				</Router>
			</div>
		);
	}
}

export default App;
