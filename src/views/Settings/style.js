import { StyleSheet, Dimensions } from 'react-native'
import { palette } from 'utils/Palettes'

const { PRIMARY, SECOND_A, SECOND_B, COMPLEMENTARY, BLACK_WHITE } = palette
const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  wrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 15,
    alignItems: "center"
  },
  wrapperNoContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dialogAction: { flexDirection: "column", justifyContent: "space-between", alignItems: "stretch" },
  dialogTitle: { width: "100%", paddingBottom: 15, paddingTop: 10 },
  textTitle: { textAlign: "left", paddingLeft: 15, fontSize: 23, fontWeight: "bold" },
  dialogButtonAction: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", paddingTop: 5 },
  dialogButtonActionLeft: { flexGrow: 10, alignItems: "flex-start" },
  dialogButtonActionRight: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "space-between" },
  wrapperText: {
    width: "70%"
  },
  buttonAdd: { position: "absolute", bottom: 20, width: "100%", display: "flex", alignItems: "center" },
  button: {width: "50%"},
  background: {width: "100%", position: "absolute", top: "40%", display: "flex", alignItems: "center", zIndex: -999},
  img: {
    height: Math.floor(screenWidth / 2.5),
    width: Math.floor(screenWidth / 2.5)
  },
  text: {
    textAlign: "center"
  }
})

export const RemindersStyle = StyleSheet.create({
  buttonAdd: { position: "absolute", bottom: 20, width: "100%", display: "flex", alignItems: "center" },
  itemReminders: { padding: 0, paddingLeft: 10 }
})