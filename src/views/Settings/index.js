import React, { Fragment } from 'react';
import { ScrollView } from 'react-native'
import Headers from 'components/Headers';

import { SETTINGS_SECTIONS } from 'consts'
import FlatListSections from 'components/FlatListSections';

import GoalsScreen from './GoalsScreen'
import CreateGoals from './GoalsScreen/CreateGoals/CreateGoals'
import SelectActivities from './GoalsScreen/CreateGoals/SelectActivities';
import RemindersScreen from './RemindersScreen'

export {
  GoalsScreen,
  CreateGoals,
  SelectActivities,
  RemindersScreen
}

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...SETTINGS_SECTIONS
    }
  }

  onItemPress = (event, item) => {
    if(!item.isModal) {
      return this.props.navigation.navigate(item.key.split("/").pop())
    }
  }

  render() {
    return (
      <Fragment>
        <Headers>
          Settings
        </Headers>
        <ScrollView>
          <FlatListSections source={this.state} onItemPress={this.onItemPress} />
        </ScrollView>
      </Fragment>
    )
  }
}