import React from 'react'
import {Text, View, StyleSheet, Image,} from 'react-native';

/**
 * Renders the app header
 */
const Header = () => {
  let headerStyle = StyleSheet.create({
    headerContainer: {
      flex:1,
      backgroundColor: '#151515',
      maxHeight: 220,
      justifyContent: 'flex-start',
      alignItems:'flex-end',
      paddingRight: 35,
      paddingTop:25
    },
    logo: {
      width: 103,
      height: 50,
    },
    title: {
      paddingTop:20,
      fontSize: 40,
      lineHeight: 35,
      textAlign: 'right',
      color: 'white',
			fontFamily: 'Alef',
			fontWeight: 'bold'    }
  })

  return (
    <View style={headerStyle.headerContainer}>
      <View />
      <Image style={headerStyle.logo} source={require('../../images/BezalelLogo.png')}></Image>

      <Text style={headerStyle.title}>
        מערכת{"\n"}
        הזמנת תורים{"\n"}
        מחסן מרכזי
      </Text>


    </View>
  )
}

export default Header
