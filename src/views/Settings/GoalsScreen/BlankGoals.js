import React from 'react';
import { Image, View, Text } from 'react-native';

import TargetImage from 'assets/images/target.png';
import Title from 'components/Title';

import CustomStyle from '../style'

const BlankGoals = (props) => (
  <View style={CustomStyle.wrapperNoContent}>
    <Image source={TargetImage} style={CustomStyle.img} />
    <Title size="medium" color="#000000">
      Set up a goal now!
    </Title>
    <View style={CustomStyle.wrapperText}>
      <Text style={CustomStyle.text}>
        Goal help you to create a nudge for your desired behavior change
      </Text>
    </View>
  </View>
)

export default BlankGoals