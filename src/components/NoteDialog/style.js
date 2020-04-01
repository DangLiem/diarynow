import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  dialogAction: { flexDirection: "column", justifyContent: "space-between", alignContent: "space-between" },
  dialogTitle: { width: "100%", paddingBottom: 20, paddingTop: 10 },
  textTitle: { textAlign: "left", paddingLeft: 15, fontSize: 23, fontWeight: "bold" },
  dialogButtonAction: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", paddingTop: 5 },
  dialogButtonActionLeft: { flexGrow: 10, alignItems: "flex-start" },
  dialogButtonActionRight: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "space-between" },
})