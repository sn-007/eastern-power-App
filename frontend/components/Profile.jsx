import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from '../colors';

const Profile = () => {
  return (
    <View elevation={2} style={styles.container}>
      <View style={styles.wrapper}>

        <Image style={styles.profileLogo} source={require('../assets/profileLogo.png')} />

        <View style={styles.wrapperText}>
          <Text style={{fontWeight:'bold', fontSize:20, color:colors.sidebarText}}>@snpro</Text>
          <Text style={{fontSize:10, color:colors.sidebarText}}>swamymagnet@gmail.com</Text>
        </View>

        <View style={{position:'absolute', right:20}}>

        <Feather name="edit" size={30} color="black" />

        </View>




      </View>


    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {

    height: 75,
    margin:10,
    // borderWidth:0.5,
    // borderColor:'white',
    // shadowColor: "#000000",
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
    // shadowOffset: { height: 0, width: 0}
  

   },

  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
  },
  profileLogo: {
    width: 50,
    height: 50,
    position:'absolute',
    left:'6%'
  },

  wrapperText:{
    position:'absolute',
    left: '30%'
  }
  


})
