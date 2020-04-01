import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-paper'
import Ripple from 'react-native-material-ripple';
import moment from 'moment';

import Style from './style'
import Title from '../Title';
import { getIcon, getMoods } from 'utils/Utils';

const getCustomStyle = ({style, title}) => {
  return {
    wrapper: {
      ...Style.wrapper,
      ...style.wrapper
    },

    line: {
      ...Style.line,
      ...style.line
    },
    dotTop: {
      ...Style.dotTop,
      ...style.dotTop
    },
    divider: {
      ...Style.divider,
      ...style.divider
    },
    dotBottom: {
      ...Style.dotBottom,
      ...style.dotBottom
    },
    wrapperContent: {
      ...Style.wrapperContent,
      ...style.wrapperContent
    },
    timeLine: {
      ...Style.timeLine,
      ...style.timeLine
    },
    content: {
      ...Style.content,
      ...style.content
    },
    iconLeft: {
      ...Style.iconLeft,
      ...style.iconLeft
    },
    contentRight: {
      ...Style.contentRight,
      ...style.contentRight
    },
    title: {
      ...Style.title,
      ...style.title
    },
    middleIcons: {
      ...Style.middleIcons,
      ...style.middleIcons
    },
    middleIcon: {
      ...Style.middleIcon,
      ...style.middleIcon
    },
    contentBottom: {
      ...Style.contentBottom,
      ...style.contentBottom
    },
  }
}

/**
 * 
 * @param {Object} props 
 * @param {Boolean} props.timeline show timeline
 * @param {Date} props.time date time
 * @param {String} props.formatTime
 * @param {String|Component} props.iconLeft show icon left, if string then get image from asset
 * @param {Component|String} props.title show title
 * @param {Object[]} props.midIcons show icons bottom of title
 * @param {String} props.midIcons[].type type of icon, ex: MaterialIcon
 * @param {String} props.midIcons[].name name of icon, ex: sleep
 * @param {Number} props.midIcons[].size size of icon, default = 15
 * @param {Component|String} props.content show content bottom of midicons
 * @param {Function} props.onPress
 * @param {Object} props.icon
 * @param {Object} props.style
 * @param {Object} props.style.wrapper
 * @param {Object} props.style.line
 * @param {Object} props.style.dotTop
 * @param {Object} props.style.divider
 * @param {Object} props.style.dotBottom
 * @param {Object} props.style.wrapperContent
 * @param {Object} props.style.timeLine
 * @param {Object} props.style.content
 * @param {Object} props.style.iconLeft
 * @param {Object} props.style.contentRight
 * @param {Object} props.style.title
 * @param {Object} props.style.middleIcons
 * @param {Object} props.style.middleIcon
 * @param {Object} props.style.contentBottom
 */
const CustomItem = props => {
  const CustomStyle = props.style ? getCustomStyle(props) : Style;
  return (
    <View style={{ ...CustomStyle.wrapper, paddingBottom: props.timeline ? 8 : 10 }}>
      {
        props.timeline === true ?
          <View style={CustomStyle.line}>
            <View style={CustomStyle.dotTop}></View>
            <Divider style={CustomStyle.divider} />
            <View style={CustomStyle.dotBottom}></View>
          </View> :
          <View style={{ width: 10 }}></View>
      }
      <View style={CustomStyle.wrapperContent}>
        {
          props.timeline === true ?
            <Text style={CustomStyle.timeLine}>
              {moment(props.time).format(props.formatTime || "HH:mm")}
            </Text> :
            null
        }
        <View style={Style.wrapperRipple}>
          <Ripple>
            <View style={CustomStyle.content}>
              <View style={CustomStyle.iconLeft}>
                {
                  props.iconLeft && typeof props.iconLeft === "string" ?
                    getMoods(props.iconLeft) :
                    props.iconLeft
                }
              </View>
              <View style={CustomStyle.contentRight}>
                {
                  props.iconLeft && typeof props.iconLeft === "string" ?
                    <Title color="#000" style={CustomStyle.title}>
                      {props.iconLeft}
                    </Title> :
                    <Title color="#000" style={CustomStyle.title}>
                      {props.title}
                    </Title>
                }
                <View style={CustomStyle.middleIcons}>
                  {
                    props.midIcons instanceof Array ?
                      props.midIcons.map((icon, index) => (
                        <View key={index} style={CustomStyle.middleIcon}>
                          {getIcon(icon)}
                        </View>
                      )) :
                      props.midIcons
                  }
                </View>
                {
                  props.content && typeof props.content === "string" ?
                    <Text ellipsizeMode="tail" numberOfLines={1} style={CustomStyle.contentBottom}>
                      {props.content}
                    </Text> :
                    props.content
                }
              </View>
            </View>
          </Ripple>
        </View>
      </View>
    </View>
  )
}

export default CustomItem