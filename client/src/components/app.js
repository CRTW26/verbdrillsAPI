import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Endpoints from '../routes/endpoints';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Endpoints path="/endpoints/" />
		</Router>
	</div>
)

export default App;
