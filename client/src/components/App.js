import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Footer from './Footer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='grey lighten-3'>
                <BrowserRouter>
                    <div
                        className='white'
                        style={{ height: '100vh', position: 'relative' }}>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/surveys' component={Dashboard} />
                        <Route path='/surveys/new' component={SurveyNew} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
// assigning actions as props to App
export default connect(null, actions)(App);
