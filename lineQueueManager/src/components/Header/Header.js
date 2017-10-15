import React from 'react'
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import {colors} from '../../styles/globals.style'

/**
 * Renders the app header
 */
const Header = () => {
  let headerStyle = StyleSheet.create({
    headerContainer: {
      flex: 1,
      backgroundColor: colors.main,
      maxHeight: 210,
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingRight: 100,
      padding: 20,
    },
    logo: {
      marginTop:15,
      width: 103,
      height: 50,
      marginRight:40,
      marginLeft: 20,
    },
    title: {
      fontSize: 45,
      textAlign: 'right',
      color: 'white',
      fontFamily: 'Alef Bold',
      lineHeight: 47,
      marginRight:10,
    },
  })

  return (
    <View style={headerStyle.headerContainer}>
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
