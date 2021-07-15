import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer';



const connectScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Connect' navigation={navigation}/>
            <Text>This is Connect screeen baby</Text>
            <Footer/>
        </View>
    )
}

export default connectScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
    

})
