import React, {Component, Fragment} from 'react';
import {Dimensions, LogBox} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

//For Redux
import Sugar from 'sugar';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './app/Reducers';
import {handleChanges, restoreState} from './app/services/persistHandler';

Sugar.extend();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default class App extends Component {
  render() {
    restoreState(store);
    handleChanges(store);
    return (
      <Provider store={store}>
        <Fragment>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </Fragment>
      </Provider>
    );
  }
}
