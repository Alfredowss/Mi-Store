/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('../css/app.css');
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter, Switch, Route} from 'react-router-dom'
 import Layout from './components/Layout/Layout'
 import Home from './pages/Home/Home'
 import Car from './pages/Car/Car'
 import Buy from './pages/Buy/Buy'
 import Store from './store/Store'
 import Success from './pages/Success/Success'

 function App() {
     return (
        <BrowserRouter>
                 <Store>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/car" component={Car}/>
                            <Route exact path="/buy" component={Buy}/>
                            <Route exact path="/success" component={Success}/>
                        </Switch>
                    </Layout>
                </Store>
        </BrowserRouter>
     );
 }
 

 ReactDOM.render(<App />, document.getElementById('root'));
 