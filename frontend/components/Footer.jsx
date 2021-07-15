import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'



const windowHeight = Dimensions.get('window').height;

const Footer = () => {
    return (
        <View style={styles.bottom}>
            <Text style={styles.bottomText}>Powered By APEPDCL</Text>
        </View>
    )
}

export default Footer

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
})
