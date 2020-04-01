import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import ICONS, { ICON_TYPE } from 'consts/icons'
import { Avatar } from 'react-native-paper'

export const getComponentFromProps = (props, defaultComponent) => {
  if (props === true) {
    return defaultComponent
  }
  return props

}

export const CustomComponent = (item = {}, CustomComp) => props => (
  <CustomComp {...props} {...item} />
)

/**
 * 
 * @param {String} key KEY_PARENT/KEY_CHILD
 * @param {Object} object 
 * @param {*} update
 */
export const updatePropsObjectByKey = (key, object, update) => {
  const keys = key.split("/");
  const lastKey = keys.pop();

  keys.unshift(object);
  const aaa = keys.reduce((c, n) => c[n]);
  aaa[lastKey] = update
  return object
}

/**
 * 
 * @param {Object} icon 
 * @param {String} icon.type
 * @param {String} icon.name
 * @param {Number} icon.size
 * @param {String} icon.color
 */
export const getIcon = (icon) => {
  switch (icon.type) {
    case ICON_TYPE.AntDesign: return <AntDesign name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.Entypo: return <Entypo name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.EvilIcons: return <EvilIcons name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.Feather: return <Feather name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.FontAwesome: return <FontAwesome name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.FontAwesome5: return <FontAwesome5 name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.Fontisto: return <Fontisto name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.Foundation: return <Foundation name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.Ionicons: return <Ionicons name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.MaterialCommunityIcons: return <MaterialCommunityIcons name={icon.name} size={icon.size || 15} color={icon.color} />
    case ICON_TYPE.MaterialIcons: return <MaterialIcons name={icon.name} size={icon.size || 15} color={icon.color} />
    default: return <Octicons name={icon.name} size={icon.size || 15} />
  }
}
/**
 * 
 * @param {String} title 
 * @param {Number} size 
 * @param {String} color 
 */
export const getIconByTitle = (title, size, color) => {
  color = color ? color : ICONS[title].color;
  return getIcon({ ...ICONS[title], size, color })
}

/**
 * 
 * @param {String} mood 
 */
export const getMoods = mood => {
  if (typeof mood !== 'string') {
    return null
  }
  switch (mood.toLowerCase()) {
    case "angry": return <Avatar.Image source={require('assets/images/emoji/angry.png')} />;
    case "confuse": return <Avatar.Image source={require('assets/images/emoji/confuse.png')} />;
    case "happy": return <Avatar.Image source={require('assets/images/emoji/happy.png')} />;
    case "sad": return <Avatar.Image source={require('assets/images/emoji/sad.png')} />;
    case "surprise": return <Avatar.Image source={require('assets/images/emoji/surprise.png')} />;
    case "worry": return <Avatar.Image source={require('assets/images/emoji/worry.png')} />;
    default: return null;
  }
}