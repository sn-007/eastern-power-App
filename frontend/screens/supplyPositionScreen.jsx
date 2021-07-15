import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer';



const supplyPositionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header displayName='Supply Position' navigation={navigation}/>
            <Text>This is Supply Position screeen baby</Text>
            <Footer/>
        </View>
    )
}

export default supplyPositionScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
    

})
