import React from 'react';
import { View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IconButton } from 'react-native-paper';

import { ORIGINAL } from 'consts/colors'

/**
 * 
 * @param {Object} props 
 * @param {String} props.name
 * @param {String} props.icon
 * @param {String} props.size
 * @param {Function} props.onPress
 * @param {Boolean} props.disabled
 * @param {Boolean} props.hided
 * @param {String} props.color
 * @param {String} props.pressColor
 */

const CustomIconButon = (props) => {
  let opacityIcon = 1
  let disabled = props.disabled
  if (props.hided) {
    disabled = true;
    opacityIcon = 0
  }
  return (
    <IconButton
      icon={(p) => {
        return (
          <View>
            {
              props.icon ? props.icon : <MaterialIcons name={props.name} size={30} color={props.color || ORIGINAL.BLACK_WHITE.LEVEL6} style={{ opacity: opacityIcon }} />
            }
          </View>
        )
      }}
      style={{height: props.size, width: props.size}}
      color={props.pressColor || ORIGINAL.BLACK_WHITE.LEVEL6}
      onPress={props.onPress ? props.onPress : () => { }}
      disabled={disabled}
    />
  )
}

export default CustomIconButon