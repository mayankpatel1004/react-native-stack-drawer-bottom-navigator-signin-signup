import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';

// import Home from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';
import DetailsScreen from './screens/DetailsScreen';

import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="ExploreScreen" component={ExploreScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  )
}
export default App