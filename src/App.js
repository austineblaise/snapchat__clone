import React from "react";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<div className="app__body">
					<Switch>
						<Route exact path="/">
							<WebcamCapture />
						</Route>
						<Route exact path="/">
							<WebcamCapture />
						</Route>

						<Route path="/preview">
							<Preview />
						</Route>
					</Switch>
				</div>
			</Router>
			
		</div>
	);
}

export default App;
