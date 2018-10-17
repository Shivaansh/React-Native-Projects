/** @format */

// import a library to help create a component
import React from 'react'; //import React library
import { Text, AppRegistry } from 'react-native'; 
//import only Text property from React Native library
//create component
//components are intelligent objects, create text/content on m. device screen
//have lots of inner working associated

const App = () => (//function, returns some JSX
        <Text>Some Text</Text> //text to show (HTML)
);
//this is a JSX method, JSX follows HTML semantics
//JSX tells react native about the component

//render component to device
//need to tell React to take created component and place
//it somewhere in app

AppRegistry.registerComponent('albums', () => App);
//this method registers component App to project albums
