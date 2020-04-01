import { StyleSheet } from 'react-native'
import { ORIGINAL, BEACH } from 'consts/colors'

export default StyleSheet.create({
  wrapper: {
    height: 50,
    backgroundColor: ORIGINAL.PRIMARY.LEVEL1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  icon: {
    color: ORIGINAL.BLACK_WHITE.LEVEL6
  },
  left: {
    flex: 1,
    alignItems: "flex-start"
  },
  right: {
    flex: 1,
    alignItems: "flex-end"
  },
  center: {
    flex: 3,
  }
})