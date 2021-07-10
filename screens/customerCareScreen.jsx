import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Footer from '../components/Footer';
import Header from '../components/Header';

const customerCareScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Customer Care' navigation={navigation} />
            <Text>This is customerCareScreen Baby</Text>
            <Footer/>
        </View>
    )
}

export default customerCareScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:"white"
      }
});
