import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Footer from '../components/Footer';

const billPayScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Bill Pay' navigation={navigation} />
            <Text>This is billPayScreen Baby</Text>
            <Footer/>
        </View>
    )
}

export default billPayScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:"white"
      }
});
