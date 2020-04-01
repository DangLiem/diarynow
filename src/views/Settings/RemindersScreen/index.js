import React, { Fragment } from 'react';
import uuid from 'uuid/v1'
import moment from 'moment';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { View, TimePickerAndroid, Keyboard } from 'react-native';

import { EVENT_NAME } from 'consts';
import Headers from 'components/Headers'
import FlatList from 'components/FlatList';
import {
  getReminders,
  updateReminder,
  deleteReminder,
  getReminderSetting,
  createReminderSetting,
  updateReminderSetting,
  createReminder
} from 'repositories'

import CustomStyle, { RemindersStyle } from '../style'
import BlankReminders from './BlankReminders';
import Title from 'components/Title';
import { ORIGINAL } from 'consts/colors';


export default class RemindersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: {},
      reminderSetting: {
        Note: {
          title: "Note",
          key: "reminderSetting/Note",
          description: "Wake up and write your today's story!",
          icon: "note-text",
        },
        DisplayPopup: {
          title: "Display Reminder Pop-up",
          icon: "message-text-outline",
          switch: false
        }
      },
      visibleDialog: false,
      note: ""
    }
  }

  async componentDidMount() {
    const state = this.state;
    const [reminders, reminderSetting] = await Promise.all([
      getReminders(),
      getReminderSetting()
    ]);

    reminders.map(reminder => {
      state.reminders[reminder.id] = {
        title: moment(reminder.time).format("kk:mm"),
        value: reminder.time,
        id: reminder.id,
        right: "trash-can-outline"
      }
    })

    if (reminderSetting.length === 0) {
      await createReminderSetting({
        isPopup: true,
        note: "Wake up and write your today's story!"
      })
    }

    state.reminderSetting.DisplayPopup.switch = reminderSetting[0].isPopup;
    state.reminderSetting.DisplayPopup.idSetting = reminderSetting[0].id;
    state.reminderSetting.Note.description = reminderSetting[0].note
    state.reminderSetting.Note.idSetting = reminderSetting[0].id;

    this.setState(state)
  }

  onPressGoback = () => {
    this.props.navigation.goBack()
  }

  onSetTime = async () => {
    const { action, hour, minute } = await TimePickerAndroid.open()
    if (action === "timeSetAction") {
      const date = moment().hour(hour).minute(minute)
      return date;
    }
    return null
  }

  onAddReminders = async () => {
    const date = await this.onSetTime();
    if (date) {
      const reminder = await createReminder({
        time: date.toDate()
      })
      const reminders = this.state.reminders;
      reminders[reminder.id] = {
        title: date.format("kk:mm"),
        value: date,
        right: "trash-can-outline",
        id: reminder.id
      }
      this.setState({
        reminders
      })
    }
  }

  onUpdateReminders = async (item) => {
    const date = await this.onSetTime();
    if (date) {
      let reminders = this.state.reminders;
      let newReminder = reminders[item.id];
      newReminder.value = date;
      newReminder.title = date.format("kk:mm");
      await updateReminder({
        id: item.id,
        time: date.toDate()
      })
      this.setState({
        reminders
      })
    }
  }

  onDeleteReminders = async (item) => {
    const reminders = this.state.reminders;
    delete reminders[item.id];
    await deleteReminder(item.id)
    this.setState({
      reminders
    })
  }

  onSetReminderPopup = async (state) => {
    state.reminderSetting.DisplayPopup.switch = !this.state.reminderSetting.DisplayPopup.switch
    await updateReminderSetting({
      id: state.reminderSetting.DisplayPopup.idSetting,
      isPopup: state.reminderSetting.DisplayPopup.switch
    })
    return state;
  }

  itemSettingPress = (state, item) => {
    if (item.key === "reminderSetting/Note") {
      state.visibleDialog = true;
    }
    return state;
  }

  hideDialog = () => {
    this.setState({
      visibleDialog: !this.state.visibleDialog
    })
  }

  onSetNoteReminders = (text) => {
    this.setState({
      note: text
    })
  }

  onItemPress = (event, item) => {
    if (event.name === EVENT_NAME.ITEM_CLICK) {
      return this.onUpdateReminders(item)
    }
    if (event.name === EVENT_NAME.ITEM_RIGHT_CLICK) {
      return this.onDeleteReminders(item)
    }
  }

  onItemSettingsPress = async (event, item) => {
    const state = this.state;
    if (event.name === EVENT_NAME.ITEM_RIGHT_CLICK) {
      await this.onSetReminderPopup(state);
    }
    if (event.name === EVENT_NAME.ITEM_CLICK) {
      this.itemSettingPress(state, item)
    }
    this.setState(state)
  }

  onDialogCancel = () => {
    this.setState({
      visibleDialog: false
    })
  }

  onDialogSave = async () => {
    const state = this.state;
    state.reminderSetting.Note.description = state.note;
    state.visibleDialog = false;
    await updateReminderSetting({
      id: state.reminderSetting.DisplayPopup.idSetting,
      note: state.note
    })
    this.setState(state);
  }

  render() {
    return (
      <Fragment>
        <Headers left={true} onLeftPress={this.onPressGoback}>
          Reminders
        </Headers>
        <Portal>
          <Dialog
            visible={this.state.visibleDialog}
            onDismiss={this.hideDialog}>
            <Dialog.Actions style={{ ...CustomStyle.dialogAction }}>
              <View style={{ ...CustomStyle.dialogTitle, paddingBottom: 20 }}>
                <Title color={ORIGINAL.BLACK_WHITE.LEVEL2} style={CustomStyle.textTitle}>
                  Custom note
                </Title>
              </View>
              <TextInput
                label='Note'
                style={{ width: "100%" }}
                onChangeText={this.onSetNoteReminders}
                autoFocus={true}
                multiline={true}
              />
              <View style={CustomStyle.dialogButtonAction}>
                <View style={CustomStyle.dialogButtonActionLeft}>
                </View>
                <View style={CustomStyle.dialogButtonActionRight}>
                  <Button onPress={this.onDialogCancel}>
                    Cancel
                  </Button>
                  <Button onPress={this.onDialogSave}>
                    Save
                  </Button>
                </View>
              </View>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <View style={{ marginBottom: 20 }}>
          {
            Object.keys(this.state.reminders).length > 0 ?
              <FlatList
                source={this.state.reminders}
                onPress={this.onItemPress}
                divider={true}
                itemStyle={RemindersStyle.itemReminders}
              /> :
              <BlankReminders />
          }
        </View>
        <FlatList
          source={this.state.reminderSetting}
          onPress={this.onItemSettingsPress}
        />
        <View style={RemindersStyle.buttonAdd}>
          <Button mode="contained" onPress={this.onAddReminders} style={CustomStyle.button}>
            Add Reminders
          </Button>
        </View>
      </Fragment>
    )
  }
}