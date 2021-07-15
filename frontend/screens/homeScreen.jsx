import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Footer from '../components/Footer';

const homeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Home' navigation={navigation} />
            <Text>This is HomeScreen Baby</Text>
            <Footer/>
        </View>
    )
}

export default homeScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:"white"
      }
});
