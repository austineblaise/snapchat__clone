import React from "react";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<div className="app__body">
						<Switch>
							<Route path="/chats/view">
								<ChatView />
							</Route>

							<Route path="/chats">
								<Chats />
							</Route>
							<Route path="/preview">
								<Preview />
							</Route>
							<Route exact path="/">
								<WebcamCapture />
							</Route>
						</Switch>
					</div>
				)}
			</Router>
		</div>
	);
}

export default App;
