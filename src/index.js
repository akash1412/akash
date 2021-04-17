import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route } from "react-router-dom";
import Resume from "./components/Resume";

const theme = extendTheme({
	boxShadow: {
		xs: {
			50: "box-shadow:0 0.5rem 2rem rgba(0,0,0,0.1)",
			100: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
		},
	},

	colors: {
		text: "#dadada",
		primaryDark: "#127eb1",
		primaryLight: "#089ECA",
		background: "#212121",
		navbar: "rgba(33,33,33,0.95)",
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Route exact path='/' component={App} />
				<Route exact path='/resume' component={Resume} />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
