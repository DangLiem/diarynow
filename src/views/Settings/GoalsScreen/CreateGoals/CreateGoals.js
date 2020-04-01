import React, { Fragment } from 'react';
import { View, TimePickerAndroid } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import Toast from 'react-native-root-toast';
import VectorIcon from 'react-native-vector-icons'

import Headers from 'components/Headers'
import FlatListSections from 'components/FlatListSections'

import CustomStyle from '../../style'
import { VIEWS_NAME, CREATE_GOALS_MENU, DAY } from 'consts';
import Title from 'components/Title';
import { ORIGINAL } from 'consts/colors';
import { createGoal } from 'repositories';
import moment from 'moment';
import NoteDialog from 'components/NoteDialog';
import FlatList from 'components/FlatList';

export default class GoalsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      day: JSON.parse(JSON.stringify(DAY)),
      visibleDialog: false,
      visibleNote: false,
      visibleRepeat: false,
      isCreating: false
    }
  }

  componentDidMount() {
    const now = moment()
    CREATE_GOALS_MENU.SETTINGS.TIMES.description = now.format("HH:mm");
    CREATE_GOALS_MENU.SETTINGS.TIMES.value = now;
    const initMenu = JSON.parse(JSON.stringify(CREATE_GOALS_MENU));
    initMenu.SETTINGS.TIMES.value = now;
    this.setState({
      menu: initMenu
    })
  }

  componentDidUpdate() {
    const newActivity = this.props.navigation.getParam("activity");
    const state = this.state;
    let isUpdateState = false;

    if (newActivity && newActivity.title !== this.state.menu.ACTIVITIES.SELECT_ACTIVITIES.title) {
      this.onSelectActivity(state, newActivity);
      isUpdateState = true;
    }

    if (isUpdateState) {
      this.setState(state);
    }
  }

  onSelectActivity = (state, newActivity) => {
    state.menu.ACTIVITIES.SELECT_ACTIVITIES.title = newActivity.title;
    state.menu.ACTIVITIES.SELECT_ACTIVITIES.icon = newActivity.icon;
  }

  onReminders = (state) => {
    state.menu.SETTINGS.REMINDERS.switch = !state.menu.SETTINGS.REMINDERS.switch;
    state.menu.SETTINGS.TIMES.hided = !state.menu.SETTINGS.TIMES.hided
    state.menu.SETTINGS.NOTES.hided = !state.menu.SETTINGS.NOTES.hided
  }

  onPickTimesReminders = async (state) => {
    try {
      const timePicker = state.menu.SETTINGS.TIMES.value
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: timePicker.get("hour"),
        minute: timePicker.get("minute"),
        is24Hour: true
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        timePicker
          .set("hour", hour)
          .set("minute", minute);
        state.menu.SETTINGS.TIMES.description = timePicker.format("HH:mm")
        state.menu.SETTINGS.TIMES.value = timePicker;
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker: ', message);
    }
  }

  onDialogNoteSave = (note) => {
    const menu = this.state.menu;
    menu.SETTINGS.NOTES.description = note;
    this.setState({ menu })
  }

  onItemPress = async (event, item) => {
    let state = this.state;
    let isChangeState = false;

    if (item.key === CREATE_GOALS_MENU.SETTINGS.REMINDERS.key) {
      isChangeState = true
      this.onReminders(state);
    }
    if (item.key === CREATE_GOALS_MENU.SETTINGS.TIMES.key) {
      isChangeState = true
      await this.onPickTimesReminders(state);
    }
    if (item.key === CREATE_GOALS_MENU.SETTINGS.NOTES.key) {
      isChangeState = true;
      state.visibleNote = true;
    }
    if (item.key === CREATE_GOALS_MENU.SETTINGS.REPEAT.key) {
      this.toggleRepeatDialog()
    }
    if (item.key === CREATE_GOALS_MENU.ACTIVITIES.SELECT_ACTIVITIES.key) {
      this.props.navigation.navigate(VIEWS_NAME.SELECT_ACTIVITIES)
    }
    if (isChangeState === true) {
      this.setState(state)
    }
  }

  onPressGoback = () => {
    const state = this.state;
    delete state.visibleDialog;
    if (JSON.stringify(state.menu) !== JSON.stringify(CREATE_GOALS_MENU)) {
      return this.setState({
        visibleDialog: true
      })
    }
    return this.props.navigation.goBack()
  }

  onPressCreateGoals = async () => {
    this.setState({
      isCreating: true
    })
    const goal = {
      activity: this.state.menu.ACTIVITIES.SELECT_ACTIVITIES.icon.title,
      repeat: this.state.menu.SETTINGS.REPEAT.description || "Everyday",
      reminder: this.state.menu.SETTINGS.REMINDERS.switch,
      timeReminder: this.state.menu.SETTINGS.TIMES.value.toDate(),
      note: this.state.menu.SETTINGS.NOTES.description,
      startedAt: new Date()
    }
    try {
      if (goal.activity === "SelectActivity") {
        this.setState({
          isCreating: false
        })
        return Toast.show("Please select activity!", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP,
          backgroundColor: "red"
        })
      }
      const instance = await createGoal(goal)
      this.setState({
        isCreating: false
      })
      this.props.navigation.navigate(VIEWS_NAME.GOALS, { goal: instance })
    } catch (error) {
      console.log(error)
    }
  }

  onDialogCancel = () => {
    this.hideDialog()
  }

  onDialogDiscard = () => {
    this.hideDialog()
    this.props.navigation.goBack()
  }

  onDialogSave = () => {
    this.onPressCreateGoals()
  }

  hideDialog = () => {
    this.setState({
      visibleDialog: !this.state.visibleDialog
    })
  }

  toggleRepeatDialog = () => {
    this.setState({
      visibleRepeat: !this.state.visibleRepeat
    })
  }

  onRepeatDialogCancel = () => {
    this.toggleRepeatDialog()
  }

  onRepeatDialogSave = () => {
    const menu = this.state.menu
    const repeats = Object.values(this.state.day)
      .filter(d => d.switch === true)
      .map(d => d.value);
    if (repeats.length === 7) {
      menu.SETTINGS.REPEAT.description = "Everyday"
    }
    else menu.SETTINGS.REPEAT.description = repeats.join(", ");
    this.setState({
      menu,
      visibleRepeat: !this.state.visibleRepeat
    })
  }

  onRepeatDayPress = (event, item) => {
    const day = this.state.day;
    day[item.key].switch = !day[item.key].switch;
    this.setState({ day })
  }

  render() {
    return (
      <Fragment>
        <View style={CustomStyle.wrapper}>
          <Portal>
            <Dialog
              visible={this.state.visibleDialog}
              onDismiss={this.hideDialog}>
              <Dialog.Actions style={CustomStyle.dialogAction}>
                <View style={CustomStyle.dialogTitle}>
                  <Title color={ORIGINAL.BLACK_WHITE.LEVEL2} style={CustomStyle.textTitle}>
                    Do you want to save your goal?
                  </Title>
                </View>
                <View style={CustomStyle.dialogButtonAction}>
                  <View style={CustomStyle.dialogButtonActionLeft}>
                    <Button onPress={this.onDialogCancel}>
                      Cancel
                    </Button>
                  </View>
                  <View style={CustomStyle.dialogButtonActionRight}>
                    <Button onPress={this.onDialogDiscard}>
                      Discard
                    </Button>
                    <Button onPress={this.onDialogSave}>
                      Save
                    </Button>
                  </View>
                </View>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          <NoteDialog
            visible={this.state.visibleNote}
            toggleDialog={() => this.setState({ visibleNote: !this.state.visibleNote })}
            onSaveDialog={this.onDialogNoteSave}
          />
          <Portal>
            <Dialog
              visible={this.state.visibleRepeat}
              onDismiss={this.toggleRepeatDialog}
            >
              <Dialog.Actions style={CustomStyle.dialogAction}>
                <View style={CustomStyle.dialogTitle}>
                  <Title color={ORIGINAL.BLACK_WHITE.LEVEL2} style={CustomStyle.textTitle}>
                    Select day to repeat
                  </Title>
                </View>
                <View>
                  <FlatList source={this.state.day} onPress={this.onRepeatDayPress} />
                </View>
                <View style={CustomStyle.dialogButtonAction}>
                  <View style={CustomStyle.dialogButtonActionLeft}></View>
                  <View style={CustomStyle.dialogButtonActionRight}>
                    <Button onPress={this.onRepeatDialogCancel}>
                      Cancel
                    </Button>
                    <Button onPress={this.onRepeatDialogSave}>
                      Save
                    </Button>
                  </View>
                </View>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          <View style={{ width: "100%" }}>
            <Headers left={true} onLeftPress={this.onPressGoback}>
              Create Goals
            </Headers>
            <FlatListSections source={this.state.menu} onItemPress={this.onItemPress} />
          </View>
          <View style={CustomStyle.buttonAdd}>
            <Button
              mode="contained"
              onPress={this.onPressCreateGoals}
              style={CustomStyle.button}
              loading={this.state.isCreating}
            >
              Creat Goal
            </Button>
          </View>
        </View>
      </Fragment>
    )
  }
}