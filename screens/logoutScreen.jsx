import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer';



const logoutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Logout' navigation={navigation}/>
            <Text>This is logout screeen baby</Text>
            <Footer/>
        </View>
    )
}

export default logoutScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
    

})
