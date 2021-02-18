import { h } from 'preact';
import { Router } from 'preact-router';
import { useState } from 'preact/hooks';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Endpoints from '../routes/endpoints';
import Login from '../routes/login';
import Signup from '../routes/signup';

const App = () => {

    const isLoggedIn = useState(true);

    return (
        <div id="app">
		<Header authenticated={isLoggedIn} />
            <Router>
                <Home path="/" />
                <Endpoints path="/endpoints/" />
                <Login path="/login/" />
                <Signup path="/signup/" />
            </Router>
	    </div>
    );
}

export default App;
