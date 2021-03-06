import 'react-native-gesture-handler';

import * as React from 'react';
import { useMemo, useReducer, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import IconFunction from './components/IconFunction';
import CustomDrawer from './components/CustomDrawer';
import {url} from './constants'

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


import loginScreen from './screens/loginScreen';
import registerScreen from './screens/registerScreen';







export const AuthContext = React.createContext();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();
const topBarOptions = {
    headerStyle: { backgroundColor: "#2c6BED" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",

}


const App = () => {



    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                console.log("Restoring token failed");
            }


            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    

    const memoObject = {
        signIn: async data => {


            const signInUrl = url + "/user/login";
            const signInObj = { email: data.email, password: data.password };
            let signInMessage = "INIT"


            try { const res = await axios.post(signInUrl, signInObj); signInMessage = res.data.message }
            catch { (e) => alert(e); return; }



            if (signInMessage === "OK") {
                dispatch({ type: 'SIGN_IN', token: data.email });
            }
            else if (signInMessage === "USER_NOT_FOUND") {
                alert("USER NOT FOUND");
                return;
            }
            else {
                alert("PASSWORD INCORRECT");
                return
            }

        },

        signOut: () => dispatch({ type: 'SIGN_OUT' }),

        signUp: async data => {
            const signUpUrl = url + "/user/register";
            const signUpObj = { email: data.email, password: data.password, name: data.name };
            let signUpMessage = "INIT"

            try { const res = await axios.post(signUpUrl, signUpObj); signUpMessage = res.data.message }
            catch { (e) => alert(e); return; }

            if (signUpMessage === "OK") {
                dispatch({ type: 'SIGN_IN', token: data.email });
            }
            else if (signUpMessage === "USER_ALREADY_EXISTED") {
                alert("USER ALREADY EXISTED");
                return;
            }

        },
    }


    const authContext = useMemo(() => (memoObject), []);


    return (

        <AuthContext.Provider value={authContext}>
            <>

                {
                    state.userToken === null ?
                        (
                            <NavigationContainer>

                                <AuthStack.Navigator screenOptions={topBarOptions}>
                                    <AuthStack.Screen name="Login" component={loginScreen} />
                                    <AuthStack.Screen name="Register" component={registerScreen} />
                                </AuthStack.Navigator>

                            </NavigationContainer>

                        ) :
                        (
                            <NavigationContainer>

                                <Drawer.Navigator
                                    initialRouteName="Home"
                                    drawerType="slide"
                                    backBehavior="initialRoute"
                                    drawerPosition='left'
                                    drawerStyle={{ width: "75%" }}
                                    drawerContent={(props) => (<CustomDrawer {...props} />)}
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

                            </NavigationContainer >
                        )

                }
            </>
        </AuthContext.Provider>

    );
}

export default App;