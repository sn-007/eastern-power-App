import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import homeScreen from './screens/homeScreen'
import registrationScreen from './screens/registrationScreen'
import billPayScreen from './screens/billPayScreen'
import customerCareScreen from './screens/customerCareScreen'
import consumptionScreen from './screens/consumptionScreen'
import paymentHistoryScreen from './screens/paymentHistoryScreen'
import supplyPositionScreen from './screens/supplyPositionScreen';
import connectScreen from './screens/connectScreen';
import myUsageScreen from './screens/myUsageScreen';
import selfMeterReadingScreen from './screens/selfMeterReading';
import logoutScreen from './screens/logoutScreen';




const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home"            component={homeScreen}         />
        <Drawer.Screen name="Registration"    component={registrationScreen} />
        <Drawer.Screen name="Bill Pay"        component={billPayScreen}      />
        <Drawer.Screen name="Customer Care"   component={customerCareScreen} />
        <Drawer.Screen name="Consumption"     component={consumptionScreen}  />
        <Drawer.Screen name="Supply Position"     component={supplyPositionScreen}  />
        <Drawer.Screen name="Connect"     component={connectScreen}  />
        <Drawer.Screen name="My Usage"     component={myUsageScreen}  />
        <Drawer.Screen name="Self Meter Reading"     component={selfMeterReadingScreen}  />
        <Drawer.Screen name="Logout"     component={logoutScreen}  />


      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;