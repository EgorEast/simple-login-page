import React from 'react';
import {
	Route,
	Switch,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';
import './App.css';
import ProfilePage from './components/ProfilePage';
import StartPage from './components/StartPage';

function App() {
	return (
		<Router>
			<div className='container'>
				<Switch>
					<Route exact path='/' component={StartPage} />
					<Route exact path='/profile' component={ProfilePage} />
					<Redirect to='/' />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
