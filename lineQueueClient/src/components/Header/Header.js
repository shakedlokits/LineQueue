import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native';

/**
 * Renders the app header
 */
const Header = () => {
  let headerStyle = StyleSheet.create({
    logo: {
      width: 103,
      height: 50,
      paddingRight: 18,
      paddingTop: 18,
      justifyContent: 'center',
      left: 250
    },
    containerBlack: {
      backgroundColor: '#151515'
    },
    title: {
      fontSize: 40,
      textAlign: 'right',
      color: 'white',
      paddingRight: 30,
			fontFamily: 'Alef',
			fontWeight: 'bold'
    }
  })

  return (
    <View style={headerStyle.containerBlack}>
      <View style={{
        height: 20
      }}/>
		<Image style={headerStyle.logo} source={require('../../images/BezalelLogo.png')}></Image>
      <View style={{
        height: 20
      }}/>

      <Text style={headerStyle.title}>מערכת</Text>
      <Text style={headerStyle.title}>הזמנת תורים</Text>
      <Text style={headerStyle.title}>מחסן מרכזי</Text>

      <View style={{
        height: 30
      }}/>
    </View>
  )
}

export default Header
