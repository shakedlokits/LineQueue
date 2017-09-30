import React from 'react'
import {Text, View} from 'react-native';
import Header from '../Header/Header'
import globals from '../../styles/globals.style'

const Confirmation = (props) =>
{
  return (
    <View style={globals.sceneContainer}>
      <Header/>
      <View style={globals.ContentContainer}>

        <Text style={globals.textRegular}>
          תודה על שהשתמשת
          במערכת הזמנת התורים
        </Text>


        <Text style={globals.textRegular}>
          היה שלום
        </Text>
        <Text style={[globals.textRegular, globals.textBold]}>
          {props.fullName},
        </Text>
        <Text style={globals.textRegular}>
          ותודה על הדגים
        </Text>

      </View>
    </View>
  )
}

export default Confirmation
