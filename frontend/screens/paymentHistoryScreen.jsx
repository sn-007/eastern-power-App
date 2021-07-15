import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Footer from '../components/Footer';
import Header from '../components/Header';

const paymentHistoryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Payment History' navigation={navigation} />
            <Text>This is paymentHistoryScreen Baby</Text>
            <Footer/>
        </View>
    )
}

export default paymentHistoryScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:"white"
      }
});
