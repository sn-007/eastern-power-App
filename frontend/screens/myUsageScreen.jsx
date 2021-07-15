import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer';



const myUsageScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='My Usage' navigation={navigation}/>
            <Text>This is My usage screeen baby</Text>
            <Footer/>
        </View>
    )
}

export default myUsageScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
    

})
