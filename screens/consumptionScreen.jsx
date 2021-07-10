import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Footer from '../components/Footer';
import Header from '../components/Header';

const consumptionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Consumption' navigation={navigation} />
            <Text>This is customerCareScreen Baby</Text>
            <Footer/>
        </View>
    )
}

export default consumptionScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:"white"
      }
});
