import React, { Fragment } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper'

import { VIEWS_NAME } from 'consts'
import Headers from 'components/Headers'
import BlankGoals from './BlankGoals'

import CustomStyle from '../style'
import { getGoals, removeGoal } from 'repositories';
import CustomItem from 'components/CustomItem';
import { getIcon, getIconByTitle } from 'utils/Utils';
import moment from 'moment';

export default class GoalsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    }
  }

  async componentDidMount() {
    try {
      const goals = await getGoals();
      this.setState({
        goals
      })
    } catch (error) {
      console.log(error)
    }
  }

  onPressGoback = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Fragment>
        <Headers left={true} onLeftPress={this.onPressGoback}>
          Goals
        </Headers>
        <ScrollView style={{ paddingTop: 20 }}>
          {
            this.state.goals.map((goal, index) => {
              return (
                <CustomItem
                  key={index}
                  iconLeft={<View style={{ borderWidth: 2, height: 60, width: 60, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 100, padding: 10, borderColor: "#0082ff" }}>{getIconByTitle(goal.activity, 30)}</View>}
                  title={goal.activity}
                  style={{ wrapper: { paddingBottom: 5 } }}
                  midIcons={(
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      {
                        goal.repeat && goal.repeat.split(",").map((r, i) => (<Text key={i}>{r}</Text>))
                      }
                    </View>
                  )}
                  content={(
                    <View>
                      <Text>{moment(goal.timeReminder).format("HH:mm")}</Text>
                    </View>
                  )}
                />
              )
            })
          }
        </ScrollView>
        <View style={CustomStyle.background}>
          <BlankGoals />
        </View>
        <View style={CustomStyle.buttonAdd}>
          <Button
            mode="contained"
            onPress={() => { this.props.navigation.navigate(VIEWS_NAME.CREATE_GOALS) }}
            style={CustomStyle.button}
          >
            Creat Goal
        </Button>
        </View>
      </Fragment>
    )
  }
}