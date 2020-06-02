import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'
import './App.css';


		var express = require('express')
		var cors = require('cors')
		var app = express()


class App extends Component{
	constructor()
	{
		super();
		this.state = {
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount()
	{
 

		app.options('*', cors())
		const url="https://jsonplaceholder.typicode.com/users";
		fetch(url)
		.then(response=> response.json())
		.then(users => this.setState({robots : users}));
	}

	onSearchChange =  (event) =>
	{
		this.setState({ searchfield : event.target.value });
	}

	render()
	{
		const { robots,searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!robots.length)
		{
			return <h1>Loading</h1>
		}
		else
		{
			return(
				<div className='tc'>
					<h1 className='f1 shadow-3'>Robo friends</h1>
					<Searchbox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<Cardlist robots= { filteredRobots } />
						</ErrorBoundary>
					</Scroll>
				</div>
				);
		}
	}
}

export default App;