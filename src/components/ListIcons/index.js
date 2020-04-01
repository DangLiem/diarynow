import React, { Fragment } from 'react';
import { View, Text } from 'react-native'

import CustomIconButton from '../CustomIconButton';

import { ORIGINAL } from 'consts/colors';
import { getIcon } from 'utils/Utils';

/**
 * 
 * @param {Object} props 
 * @param {Object} props.source Object icon defined to render
 * @param {Function} props.onIconPress Handler function press icon
 */
const ListIcons = (props) => {
  return (
    <Fragment>
      <Text style={{ fontSize: 15, fontWeight: "bold", color: ORIGINAL.BLACK_WHITE.LEVEL3, paddingLeft: 18, paddingTop: 15, paddingBottom: 5 }}>{props.source && props.source.title}</Text>
      <View style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingLeft: 10, paddingRight: 10 }}>
        {
          props.source && props.source.activities instanceof Array && props.source.activities.map((activity, index) => {
            return (
              <CustomIconButton
                icon={getIcon({ name: activity.icon, type: activity.type, size: 30 })}
                size={40}
                key={index}
                color={ORIGINAL.BLACK_WHITE.LEVEL3}
                pressColor={ORIGINAL.BLACK_WHITE.LEVEL5}
                onPress={(event) => props.onIconPress(event, activity)}
              />
            )
          })
        }
      </View>
    </Fragment>
  )
}

export default ListIcons;