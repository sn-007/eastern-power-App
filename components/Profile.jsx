import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        <Image style={styles.profileLogo} source={require('../assets/profileLogo.png')} />

        <View style={styles.wrapperText}>
          <Text style={{fontWeight:'bold', fontSize:20, color:'#6b6a6b'}}>@snpro</Text>
          <Text style={{fontSize:10, color:'#6b6a6b'}}>swamymagnet@gmail.com</Text>
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
    margin:10
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
