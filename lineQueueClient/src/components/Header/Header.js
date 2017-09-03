import React from 'react'
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {colors} from '../../styles/globals.style'

let height = Dimensions.get('window').height

/**
 * Renders the app header
 */
const Header = () => {
  let headerStyle = StyleSheet.create({
    headerContainer: {
      flex: 1,
      backgroundColor: colors.main,
      maxHeight: 220,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 35
    },
    logo: {
      width: 103,
      height: 50,
      paddingRight: 35
    },
    title: {
      paddingTop: height * (1 / 40),
      fontSize: 40,
      lineHeight: 35,
      textAlign: 'right',
      color: 'white',
      fontFamily: 'Alef',
      fontWeight: 'bold'
    }
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
