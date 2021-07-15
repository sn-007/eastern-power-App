import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer';



const selfMeterReadingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Self Meter Reading' navigation={navigation}/>
            <Text>This is Self Meter Reading screeen baby</Text>
            <Footer/>
        </View>
    )
}

export default selfMeterReadingScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
    

})
