import React from 'react';
import { View } from 'react-native'
import { Portal, Dialog, Title, TextInput, Button } from 'react-native-paper';

import CustomStyle from "./style"
import { ORIGINAL } from 'consts/colors';

export default class  NoteDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "Write your diary now!"
    }
  }
 
  onSetNoteReminders = (text) => {
    this.setState({
      note: text
    })
  }

  onDialogSave = () => {
    this.props.toggleDialog()
    this.props.onSaveDialog(this.state.note)
  }

  render() {
    return (
      <Portal>
        <Dialog
          visible={this.props.visible}
          onDismiss={this.toggleDialog}>
          <Dialog.Actions style={{ ...CustomStyle.dialogAction }}>
            <View style={{ ...CustomStyle.dialogTitle, paddingBottom: 20 }}>
              <Title color={ORIGINAL.BLACK_WHITE.LEVEL2} style={CustomStyle.textTitle}>
                Custom note
                </Title>
            </View>
            <TextInput
              label='Note'
              style={{ width: "100%" }}
              value={this.state.note}
              onChangeText={this.onSetNoteReminders}
              autoFocus={true}
              multiline={true}
            />
            <View style={CustomStyle.dialogButtonAction}>
              <View style={CustomStyle.dialogButtonActionLeft}>
              </View>
              <View style={CustomStyle.dialogButtonActionRight}>
                <Button onPress={this.props.toggleDialog}>
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
    )
  }
}