import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView } from 'react-native';

import { Input, Button } from 'react-native-elements';

import {AuthContext} from "../App"


const loginScreen = ({ navigation }) => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useContext(AuthContext);


    const triggerLogin = () => {

        signIn({email:email,password:password});
    }




    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>



            <View style={styles.input}>
                <Input
                    placeholder="Email"
                    autoFocus={true}
                    leftIcon={{ type: 'Feather', name: 'mail' }}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                />

                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'EvilIcons', name: 'lock' }}
                    secureTextEntry={true}
                    onChangeText={(text) => { setPassword(text) }}
                    value={password}
                />
            </View>
            <Button
                title="Login"
                containerStyle={styles.button}
                type="solid"
                onPress={triggerLogin}
            />
            <Button
                title="Register"
                containerStyle={styles.button}
                type="outline"
                onPress={()=> navigation.push("Register") }
            />

        </KeyboardAvoidingView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    
    input: {
        width: 300,
        paddingBottom: 5
    },

    button: {
        width: 200,
        paddingBottom: 10,
    }
});
export default loginScreen;
