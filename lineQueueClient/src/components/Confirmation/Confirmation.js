import React from 'react'
import {Text, View} from 'react-native';
import Header from '../Header/Header'
import globals from '../../styles/globals.style'
import confirmationStyle from './Confirmation.style'

const Confirmation = (props) =>
{
  return (
    <View style={globals.sceneContainer}>
      <Header/>
      <View style={globals.contentContainer}>
        <View style={confirmationStyle.textContainer}>
          <Text style={[globals.textLarge, globals.textBold]}>
            תודה על שהשתמשת
            {"\n"}
            במערכת הזמנת התורים
          </Text>
        </View>
        <View style={confirmationStyle.footerContainer}>
          <Text style={globals.textRegular}>
            היה שלום <Text style={globals.textBold}>{props.fullName},</Text>
          </Text>

          <Text style={globals.textRegular}>
            ותודה על הדגים
          </Text>
        </View>

      </View>
    </View>
  )
}

export default Confirmation
