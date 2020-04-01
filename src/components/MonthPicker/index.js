import React, { Fragment } from 'react';
import { View, ScrollView, DatePickerAndroid } from 'react-native';
import { Portal, Dialog, Button } from 'react-native-paper'
import Ripple from 'react-native-material-ripple';
import moment from 'moment';

import Title from '../Title';
import CustomIconButon from '../CustomIconButton';
import { getIcon } from 'utils/Utils';
import { ICON_TYPE } from 'consts/icons';
import { ORIGINAL } from 'consts/colors';
import FlatList from '../FlatList';
import { MONTH } from 'consts';

/**
 * @param {import('moment').Moment} props.date date
 * @param {Function} props.onSetDate set date
 */
export default class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      date: moment(),
      picker: "MONTH",
      yearsPicker: [...Array(Number(moment().format("YYYY")) + 1).keys()]
        .slice(-10)
        .map(year => (
          {
            title: year,
            value: year
          }
        ))
        .reverse()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const state = this.state
    const isUpdate = false;
    if (this.props.date && this.props.date.toString() !== this.state.date.toString()) {
      state.date = this.props.date
      isUpdate = true
    }
    if (isUpdate === true) {
      this.setState(state)
    }
  }

  onDismiss = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  onChoosePicker = (type) => () => {
    this.setState({
      picker: type
    })
  }

  onPickMonth = (event, item) => {
    const date = this.state.date;
    date.set("month", item.value);
    if (typeof this.props.onSetDate === "function") {
      this.props.onSetDate(date);
    }
    this.setState({
      date,
      visible: !this.state.visible
    })
  }

  onPickYear = (event, item) => {
    const date = this.state.date;
    date.set("year", item.value);
    if (typeof this.props.onSetDate === "function") {
      this.props.onSetDate(date);
    }
    this.setState({
      date,
      visible: !this.state.visible
    })
  }

  onChangeMonth = (count) => () => {
    const date = this.state.date;
    date.add(count, "month");
    if (typeof this.props.onSetDate === "function") {
      this.props.onSetDate(date);
    }
    this.setState({ date })
  }

  render() {
    return (
      <Fragment>
        <View
          style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}
        >
          <CustomIconButon
            icon={getIcon({ type: ICON_TYPE.AntDesign, name: "left", size: 20, color: ORIGINAL.BLACK_WHITE.LEVEL6 })}
            onPress={this.onChangeMonth(-1)}
            size={25}
          />
          <Ripple
            style={{ height: 50, display: "flex", justifyContent: "center", paddingLeft: 10, paddingRight: 10 }}
            onPress={() => this.setState({ visible: !this.state.visible })}
          >
            <Title>{this.state.date.format("MMM YYYY")}</Title>
          </Ripple>
          <CustomIconButon
            icon={getIcon({ type: ICON_TYPE.AntDesign, name: "right", size: 20, color: ORIGINAL.BLACK_WHITE.LEVEL6 })}
            onPress={this.onChangeMonth(1)}
            size={25}
          />
        </View>
        <Portal>
          <Dialog
            visible={this.state.visible}
            onDismiss={this.onDismiss}
            style={{ backgroundColor: ORIGINAL.PRIMARY.LEVEL1, marginHorizontal: 60 }}
          >
            <Dialog.Content style={{ paddingHorizontal: 0, paddingBottom: 0 }}>
              <View style={{ height: 60 }}>
                <View style={{ position: "absolute", top: -10, left: 10 }}>
                  <Ripple onPress={this.onChoosePicker("YEAR")}>
                    <Title style={{ textAlign: "left", color: this.state.picker === "YEAR" ? ORIGINAL.BLACK_WHITE.LEVEL6 : ORIGINAL.BLACK_WHITE.LEVEL5 }}> {this.state.date.format("YYYY")} </Title>
                  </Ripple>
                  <Ripple onPress={this.onChoosePicker("MONTH")}>
                    <Title style={{ textAlign: "left", color: this.state.picker === "YEAR" ? ORIGINAL.BLACK_WHITE.LEVEL5 : ORIGINAL.BLACK_WHITE.LEVEL6 }} size="large" weight="bold"> {this.state.date.format("MMMM")} </Title>
                  </Ripple>
                </View>
              </View>
              <View style={{ height: 300, backgroundColor: ORIGINAL.BLACK_WHITE.LEVEL6 }}>
                <ScrollView>
                  {
                    this.state.picker === "MONTH" ?
                      <FlatList
                        source={MONTH} onPress={this.onPickMonth}
                        titleStyle={{ textAlign: "center", fontSize: 22 }}
                      /> :
                      <FlatList
                        source={this.state.yearsPicker}
                        onPress={this.onPickYear}
                        titleStyle={{ textAlign: "center", fontSize: 22 }}
                      />
                  }
                </ScrollView>
                <View style={{ height: 20 }}></View>
              </View>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </Fragment>
    )
  }
}