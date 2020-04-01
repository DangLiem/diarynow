import React from 'react';
import { View } from 'react-native';

import CustomIconButton from 'components/CustomIconButton';
import Title from 'components/Title'
import { getComponentFromProps } from 'utils/Utils'
import CustomStyle from './style'

/**
 * 
 * @param {Object} props
 * @param {React.Component | Boolean} props.left Component to render or default is back button
 * @param {React.Component | Boolean} props.right Component to render or default is search button
 * @param {React.Component | String} props.children
 * @param {Function} props.onLeftPress
 * @param {Function} props.onRightPress
 */
const Headers = (props) => {
  const LeftComponent = getComponentFromProps(props.left, <CustomIconButton name="arrow-back" onPress={props.onLeftPress} hided={!props.left} />)
  const RightComponent = getComponentFromProps(props.right, <CustomIconButton name="search" onPress={props.onRightPress} hided={!props.right} />)
  const Children = typeof props.children === "string" ? <Title>{props.children}</Title> : props.children

  return (
    <View style={CustomStyle.wrapper}>
      <View style={CustomStyle.left}>
        {LeftComponent}
      </View>
      <View style={CustomStyle.center} >
        {Children}
      </View>
      <View style={CustomStyle.right}>
        {RightComponent}
      </View>
    </View>
  )
}

export default Headers