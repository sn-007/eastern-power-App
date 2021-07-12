import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Header from '../components/Header'
import Footer from '../components/Footer';

import colors from '../colors';




const registrationScreen = ({ navigation }) => {
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>



            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={-80}
            >
                <Header displayName='Registration' navigation={navigation} />
                <Text style={styles.description}>Register a New Meter Today</Text>
                <View style={styles.inputContainer}>

                    <Input
                        placeholder='Enter 16 digit service number'
                        containerStyle={styles.input}
                        keyboardType='numeric'
                    />

                    <Input
                        placeholder='Optional Nickname'
                        containerStyle={styles.input}
                    />

                    <Button
                        title="Register"
                        type="solid"
                        containerStyle={{ width: 150, }}
                        buttonStyle={{ backgroundColor: colors.statusbar }}
                        titleStyle={{ fontSize: 20 }}

                    />





                </View>
                <Footer />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default registrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white"
    },

    description: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.sidebarText,
        position: 'absolute',
        top: 140
    },

    inputContainer: {
        width: '100%',
        height: 300,
        alignItems: 'center'

    },

    input: {
        width: '90%',
        height: 100,
        paddingTop: 20
    },



})
