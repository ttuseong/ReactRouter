import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Test } from '../pages';
import Menu from '../components/Menu.js';
import Post from '../pages/Posts.js';
class App extends Component {
    render() {
        return (
            <div>
		<Menu />
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
		<Route path="/test" component={Test}/>
		<Route path="/posts" component={Post}/>
            </div>
        );
    }
}

export default App;
