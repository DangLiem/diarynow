import React, { Fragment } from 'react'
import { List, Divider } from 'react-native-paper';

import FlatList from 'components/FlatList'

/**
 * 
 * @param {Object} props 
 * @param {Object} props.source
 * @param {Function} props.onItemPress
 */
const FlatListSections = (props) => {
  return (
    <Fragment>
      {
        props.source && Object.values(props.source).map((section, index) => (
          <List.Section
            key={index}
            title={section.title}
            titleStyle={{paddingTop: 0}}
          >
            <FlatList source={section} onPress={props.onItemPress} />
            <Divider />
          </List.Section>
        ))
      }
    </Fragment>
  );
}

export default FlatListSections