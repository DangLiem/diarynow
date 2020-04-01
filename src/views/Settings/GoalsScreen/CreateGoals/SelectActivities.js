import React, { Fragment } from 'react';

import Headers from 'components/Headers';

import { VIEWS_NAME } from 'consts';
import { ACTIVITIES } from 'consts';
import CustomStyle from '../../style';
import FlatList from 'components/FlatList';
import { ScrollView } from 'react-native-gesture-handler';

export default class GoalsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: ACTIVITIES
    }
  }

  onItemPress = async (event, activity) => {
    this.props.navigation.navigate(VIEWS_NAME.CREATE_GOALS, { activity })
  }

  onPressGoback = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Fragment>
        <Headers left={true} onLeftPress={this.onPressGoback}>
          Select Activities
        </Headers>
        <ScrollView>
          <FlatList source={this.state.activities} onPress={this.onItemPress} />
        </ScrollView>
      </Fragment>
    )
  }
}