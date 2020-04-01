import React from 'react';
import { Text } from 'react-native'

import CustomStyle from './style'

/**
 * 
 * @param {Object} props 
 * @param {String} props.size
 * @param {String} props.weight
 * @param {Object} props.style
 * @param {Object} props.color
 */
const Title = (props) => {
  const style = {
    ...CustomStyle.title,
    ...CustomStyle[props.size ? props.size : "small"],
    ...CustomStyle[props.weight ? props.weight : "normal"],
    color: props.color || CustomStyle.white.color,
    ...props.style
  }
  return (
    <Text style={style}>{props.children}</Text>
  )
}

export default Title