import { StyleSheet, Dimensions } from 'react-native'
import { palette } from 'utils/Palettes'

const { PRIMARY, SECOND_A, SECOND_B, COMPLEMENTARY, BLACK_WHITE } = palette
const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: ORIGINAL.BLACK_WHITE.LEVEL3,
    paddingLeft: 18,
    paddingTop: 15,
    paddingBottom: 5
  },
  listIcons: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
})