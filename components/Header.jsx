import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
// {60=== windowHeight/13}
// {60=== windowWidth/6.5}


import colors from '../colors';


const Header = ({displayName, navigation}) => {


  return (



    <View style={styles.container}>

      <StatusBar style="light" backgroundColor={colors.statusbar} />

      <View style={styles.header}>

        <View style={styles.leftHeaderContainer}>

          <View style={styles.leftHeader1}>

            <TouchableOpacity style={{paddingLeft:15, paddingBottom:5}} onPress={()=>  navigation.toggleDrawer()}>

            <Feather name="menu" size={30} color="white" />

            </TouchableOpacity>

          


          </View>

          <View style={styles.leftHeader2}>


          </View>


        </View>

        <View style={styles.rightHeaderContainer}>

          <View style={styles.rightHeader}>

            <Image
              style={styles.logo}
              source={require('../assets/eastLogo.png')}
            />

             <Text style={styles.headerText}>{displayName}</Text>

             <TouchableOpacity style={{position:"absolute", right:20, top:25}}  >

             <SimpleLineIcons name="options-vertical" size={17} color="white"  />

             </TouchableOpacity>



          </View>

        </View>

      </View>


    

    </View>

  );
}

export default Header;

const styles = StyleSheet.create({

  container: {

    marginTop: Constants.statusBarHeight,
    display:'flex'
    
  },

  header: {

    height: windowHeight / 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start"
  },

  headerText:{
    position:"absolute",
    top:23,
    left:40,
    fontSize:21,
    fontWeight:"700",
    color:"white"


  },

  leftHeaderContainer: {

    width: "25%",
    height: "100%",
    backgroundColor: colors.header,
    display: "flex",
    flexDirection: "column"
  },

  leftHeader1: {

    width: "100%",
    height: "50%",
    backgroundColor: colors.header,
    justifyContent:'center',
    alignItems:"flex-start"
  },
  leftHeader2: {

    width: "100%",
    height: "50%",
    backgroundColor:"white",
    borderTopLeftRadius: 100
  },

  logo: {

    width: windowWidth / 6.5,
    height: windowHeight / 13,
    position: 'absolute',
    left: -30,
    top: 0



  },


  rightHeaderContainer: {
    width: "75%",
    height: "100%",
    display: "flex",
  },

  rightHeader: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: colors.header,
    borderBottomEndRadius: 70,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: 'center',
  }




});






