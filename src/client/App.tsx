import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddBlog from './components/AddBlog';

const App: React.FC<IAppProps> = () => {

	return (
		<Router>
			<nav className="navbar sticky-top navbar-light bg-info">
				<Link to={'/'}>
					<button className="btn btn-outline-secondary" type="button">Blogs</button>
				</Link>
				<Link to={'/addBlog'}>
					<button className="btn btn-outline-secondary" type="button">New Blog Entry</button>
				</Link>
			</nav>
			<Switch>
				<Route exact path="/" component={HomePage} />
				{/* <Route path="/blogs" component={Blogs} /> */}
				{/* <Route path="/:id/admin" component={EditBlog} /> */}
				<Route path="/addblog" component={AddBlog} />
			</Switch>
		</Router>
	)
};

interface IAppProps { }

export default App;