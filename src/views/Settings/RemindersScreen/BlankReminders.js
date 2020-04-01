import React from 'react';
import { View, Image } from 'react-native'

import RemindersBg from 'assets/images/reminder_bg.png'
import CustomStyle from '../style'
import Title from 'components/Title';

const BlankReminders = (props) => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image source={RemindersBg} style={CustomStyle.img} />
      <Title size="medium" color="#000000">
        Add Reminders
      </Title>
    </View>
  )
}

export default BlankReminders