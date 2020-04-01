import React from 'react';
import { View, Animated } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { VIEWS_NAME } from 'consts'
import CustomStyle from './style'

let iii = 0;

export default class BottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [VIEWS_NAME.DASHBOARD]: {
        animate: new Animated.Value(1),
        status: 1
      },
      [VIEWS_NAME.ANALYSIS]: {
        animate: new Animated.Value(0),
        status: 0
      },
      [VIEWS_NAME.CALENDAR]: {
        animate: new Animated.Value(0),
        status: 0
      },
      [VIEWS_NAME.SETTINGS]: {
        animate: new Animated.Value(0),
        status: 0
      },
      butonActive: VIEWS_NAME.DASHBOARD
    }
  }

  onButtonPress = (name) => {
    return () => {
      const state = this.state
      if (name !== state.butonActive) {
        Animated.timing(state[name].animate, {
          toValue: state[name].status ? 0 : 1,
          duration: 200
        }).start()
        Animated.timing(state[state.butonActive].animate, {
          toValue: state[state.butonActive].status ? 0 : 1,
          duration: 200
        }).start()
        this.setState({
          [name]: {
            ...state[name],
            status: state[name].status ? 0 : 1
          },
          [state.butonActive]: {
            ...state[state.butonActive],
            status: state[state.butonActive].status ? 0 : 1
          },
          butonActive: name
        })
      }
      this.props.jumpTo(name)
    }
  }

  getIconStyle = (name) => {
    return {
      transform: [{
        translateY: this.state[name].animate.interpolate({
          inputRange: [0, 1],
          outputRange: [8, 0]
        })
      }]
    }
  }

  getTextStyle = (name) => {
    return {
      color: Colors.white,
      transform: [{
        scale: this.state[name].animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0.01, 0.9]
        })
      }]
    }
  }

  render() {
    const props = this.props
    const state = this.state

    return (
      <View style={CustomStyle.wrapper}>
        <IconButton
          icon={() => (
            <View style={CustomStyle.wrapperIcon}>
              <Animated.View style={this.getIconStyle(VIEWS_NAME.DASHBOARD)}>
                <Icon name={"book"} size={27} style={state.butonActive === VIEWS_NAME.DASHBOARD ? CustomStyle.iconActive : CustomStyle.icon} />
              </Animated.View>
              <Animated.Text style={this.getTextStyle(VIEWS_NAME.DASHBOARD)}>
                Dashboard
              </Animated.Text>
            </View>
          )}
          size={27}
          color={Colors.white}
          style={CustomStyle.button}
          onPress={this.onButtonPress(VIEWS_NAME.DASHBOARD)}
        />
        <IconButton
          icon={() => (
            <View style={CustomStyle.wrapperIcon}>
              <Animated.View style={this.getIconStyle(VIEWS_NAME.ANALYSIS)}>
                <Icon name={"chart-donut-variant"} size={27} style={state.butonActive === VIEWS_NAME.ANALYSIS ? CustomStyle.iconActive : CustomStyle.icon} />
              </Animated.View>
              <Animated.Text style={this.getTextStyle(VIEWS_NAME.ANALYSIS)}>
                Analysis
              </Animated.Text>
            </View>
          )}
          size={27}
          color={Colors.white}
          style={CustomStyle.button}
          onPress={this.onButtonPress(VIEWS_NAME.ANALYSIS)}
        />
        <View style={CustomStyle.wrapperButton}>
          <IconButton
            icon={() => <Icon name={"plus"} size={27} color={"#0082FF"} />}
            size={25}
            color={Colors.white}
            style={CustomStyle.buttonCreate}
            onPress={() => { props.navigation.navigate(VIEWS_NAME.CREATE_DIARY) }}
          />
        </View>
        <IconButton
          icon={() => (
            <View style={CustomStyle.wrapperIcon}>
              <Animated.View style={this.getIconStyle(VIEWS_NAME.CALENDAR)}>
                <Icon name={"calendar-today"} size={27} style={state.butonActive === VIEWS_NAME.CALENDAR ? CustomStyle.iconActive : CustomStyle.icon} />
              </Animated.View>
              <Animated.Text style={this.getTextStyle(VIEWS_NAME.CALENDAR)}>
                Calendar
              </Animated.Text>
            </View>

          )}
          size={27}
          color={Colors.white}
          style={
            state.buttonActive === VIEWS_NAME.CALENDAR ?
              { ...CustomStyle.button, ...CustomStyle.buttonActive } :
              CustomStyle.button
          }
          onPress={this.onButtonPress(VIEWS_NAME.CALENDAR)}
        />
        <IconButton
          icon={() => (
            <View style={CustomStyle.wrapperIcon}>
              <Animated.View style={this.getIconStyle(VIEWS_NAME.SETTINGS)}>
                <Icon name={"settings"} size={27} style={state.butonActive === VIEWS_NAME.SETTINGS ? CustomStyle.iconActive : CustomStyle.icon} />
              </Animated.View>
              <Animated.Text style={this.getTextStyle(VIEWS_NAME.SETTINGS)}>
                Settings
              </Animated.Text>
            </View>
          )}
          size={27}
          color={Colors.white}
          style={
            state.buttonActive === VIEWS_NAME.SETTINGS ?
              { ...CustomStyle.button, ...CustomStyle.buttonActive } :
              CustomStyle.button
          }
          onPress={this.onButtonPress(VIEWS_NAME.SETTINGS)}
        />
      </View>
    )
  }
}