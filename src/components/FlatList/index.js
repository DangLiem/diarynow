import React, { Fragment } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { List, Switch, Divider, IconButton } from 'react-native-paper';
import { CustomComponent, getIcon } from 'utils/Utils'
import CustomStyle from './style';
import CustomIconButon from '../CustomIconButton';
import { ORIGINAL } from 'consts/colors';
import { EVENT_NAME } from 'consts';

const IconLeft = props => (
  <Fragment>
    {
      props.item.icon ?
        <List.Icon
          {...props}
          icon={p => getIcon({ ...props.item.icon, size: 30 })}
        /> :
        null
    }
  </Fragment>
)

const IconRight = props => (
  <Fragment>
    {
      props.item.right ?
        <List.Icon
          {...props}
          icon={p => (
            <CustomIconButon
              icon={<Icon {...p} name={props.item.right} size={30} style={CustomStyle[`${props.item.color}Icon`]} />}
              onPress={typeof props.onPress === "function" ? (event) => { event.name = EVENT_NAME.ITEM_RIGHT_CLICK; props.onPress(event, props.item) } : null}
              size={30}
              pressColor={ORIGINAL.BLACK_WHITE.LEVEL3}
            />
          )}
        /> :
        null
    }
  </Fragment>
)

const SwitchRight = props => (
  <Switch
    onValueChange={typeof props.onPress === "function" ? (event) => {
      const newEvent = {
        ...event,
        name: EVENT_NAME.ITEM_RIGHT_CLICK
      }
      props.onPress(newEvent, props.item)
    } : null}
    value={props.item.switch}
  />
)

/**
 * 
 * @param {Object} props 
 * @param {Object | Array} props.source
 * @param {Function} props.onPress
 * @param {React.Component} props.right
 * @param {React.Component} props.left
 * @param {Boolean} props.divider
 * @param {Object} props.itemStyle
 * @param {Object} props.titleStyle
 */
const FlatList = (props) => {
  const propLeft = (item) => {
    if (props.left instanceof React.Component) {
      return CustomComponent({ item }, props.left)
    }
    return CustomComponent({ ...props, item }, IconLeft)
  }
  const propRight = (item) => {
    if (props.right instanceof React.Component) {
      CustomComponent({ item }, props.right)
    }
    if (Object.keys(item).includes("switch")) {
      return CustomComponent({ ...props, item }, SwitchRight)
    }
    if (typeof item.right === 'string') {
      return CustomComponent({ ...props, item }, IconRight)
    }
    return null
  }
  const source = props.source && props.source instanceof Array ? props.source : Object.values(props.source)
  return (
    <Fragment>
      {
        source && source.map((item, index) => {
          if (typeof item === "object") {
            return item.hided ? null : (
              <View key={index} >
                <List.Item
                  title={item.title}
                  description={item.description}
                  disabled={item.disabled}
                  left={propLeft(item)}
                  right={propRight(item)}
                  onPress={
                    typeof props.onPress === "function" && !Object.keys(item).includes("switch") ?
                      (event) => { event.name = EVENT_NAME.ITEM_CLICK; props.onPress(event, item) } :
                      null}
                  style={props.itemStyle || {}}
                  titleStyle={props.titleStyle || {}}
                />
                {props.divider ? <Divider /> : null}
              </View>
            )
          }
        })
      }
    </Fragment>
  )
}

export default FlatList