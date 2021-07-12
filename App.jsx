import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import IconFunction from './components/IconFunction';
import CustomDrawer from './components/CustomDrawer';

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

      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide"
        backBehavior="initialRoute"
        drawerPosition='left'
        drawerStyle={{ width: "75%" }}
        drawerContent={(props)=> (<CustomDrawer {...props}/>) }
        drawerContentOptions={{
          activeTintColor: 'green',
          labelStyle: { fontWeight: 'bold', fontSize: 15 },


        }}
      >

        <Drawer.Screen name="Home" component={homeScreen} options={{ drawerIcon: IconFunction('home') }} />
        <Drawer.Screen name="Registration" component={registrationScreen} options={{ drawerIcon: IconFunction('new-message') }} />
        <Drawer.Screen name="  Bill Pay" component={billPayScreen} options={{ drawerIcon: IconFunction('rupee-sign') }} />
        <Drawer.Screen name="Customer Care" component={customerCareScreen} options={{ drawerIcon: IconFunction('customerservice') }} />
        <Drawer.Screen name="Consumption" component={consumptionScreen} options={{ drawerIcon: IconFunction('stats-chart') }} />
        <Drawer.Screen name=" Payment History" component={paymentHistoryScreen} options={{ drawerIcon: IconFunction('history') }} />
        <Drawer.Screen name="Supply Position" component={supplyPositionScreen} options={{ drawerIcon: IconFunction('flash') }} />
        <Drawer.Screen name="Connect" component={connectScreen} options={{ drawerIcon: IconFunction('connect-without-contact') }} />
        <Drawer.Screen name="My Usage" component={myUsageScreen} options={{ drawerIcon: IconFunction('calculator') }} />
        <Drawer.Screen name="  Self Meter Reading" component={selfMeterReadingScreen} options={{ drawerIcon: IconFunction('shopping-pos-machine') }} />
        <Drawer.Screen name="Logout" component={logoutScreen} options={{ drawerIcon: IconFunction('ios-power') }} />


      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;