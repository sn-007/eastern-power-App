import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer';



const registrationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Registration' navigation={navigation}/>
            <Text>This is Regisgtration screeen baby</Text>
            <Footer/>
        </View>
    )
}

export default registrationScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
    

})
