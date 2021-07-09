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


const Header = ({displayName}) => {
  return (



    <View style={styles.container}>

      <StatusBar style="light" backgroundColor="#2087c1" />

      <View style={styles.header}>

        <View style={styles.leftHeaderContainer}>

          <View style={styles.leftHeader1}>

            <TouchableOpacity style={{paddingLeft:15, paddingBottom:5}}>

            <Feather name="menu" size={24} color="white" />

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

             <TouchableOpacity style={{position:"absolute", right:20, top:25}} >

             <SimpleLineIcons name="options-vertical" size={17} color="white" />

             </TouchableOpacity>



          </View>

        </View>

      </View>


      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Powered By APEPDCL</Text>
      </View>

    </View>

  );
}

export default Header;

const styles = StyleSheet.create({

  bottom: {
    width: "100%",
    height: windowHeight / 22,
    backgroundColor: "#2087c1",
    position: 'absolute',
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"

  },

  bottomText: {
    color: "white",
    fontWeight: "700"

  },

  container: {

    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
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
    backgroundColor: "#69d5f5",
    display: "flex",
    flexDirection: "column"
  },

  leftHeader1: {

    width: "100%",
    height: "50%",
    backgroundColor: "#69d5f5",
    justifyContent:'center',
    alignItems:"flex-start"
  },
  leftHeader2: {

    width: "100%",
    height: "50%",
    backgroundColor: "white",
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
    backgroundColor: "#69d5f5",
    borderBottomEndRadius: 70,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: 'center',
  }




});






