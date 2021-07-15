import React, { useState, } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from "react-native-elements";
import {AuthContext} from "../App"








const registerScreen = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const triggerRegister = () => {

        signUp({name:name, email:email, password:password});

    }

    return (
        <KeyboardAvoidingView style={styles.container}>



            <View style={styles.input}>

                <Input placeholder="UserName" type="text" autoFocus onChangeText={(text) => { setName(text) }} />

                <Input placeholder="Email" type="email" onChangeText={(text) => { setEmail(text) }} />

                <Input placeholder="Password" type="password" secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />

            </View>

            <Button
                title="Register"
                containerStyle={styles.button}
                onPress={triggerRegister}
            />
            <View style={{ paddingBottom: 20 }}></View>



        </KeyboardAvoidingView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'


    },
    input: {
        width: 300,
    },
    button: {
        width: 200,

    }
});





export default registerScreen;