import React, { Component } from 'react';
import { Tab } from './navigation/AppNavigator';

export default class App extends Component {
    static navigationOptions = {
        header: null,
      };
      
    render() {
        return( <Tab/>);
    }
}