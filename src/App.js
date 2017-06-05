import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'


class App extends Component {
    componentWillMount(){
        // Initialize Firebase
        const config = {
            apiKey: "SECRET",
            authDomain: "SECRET",
            databaseURL: "SECRET",
            projectId: "SECRET",
            storageBucket: "SECRET",
            messagingSenderId: "SECRET"
        };
        firebase.initializeApp(config);
    }
    render() {

        store=createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                
                    <Router />
                
            </Provider>
        );
    }
}

export default App;