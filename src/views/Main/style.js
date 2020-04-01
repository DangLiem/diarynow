import { StyleSheet } from 'react-native'
import { getPalette, palette } from 'utils/Palettes'

const { PRIMARY, SECOND_A, SECOND_B, COMPLEMENTARY, BLACK_WHITE } = palette

export default StyleSheet.create({
  wrapper: {
    height: 50,
    position: "relative",
    backgroundColor: PRIMARY.LEVEL1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: BLACK_WHITE.LEVEL1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  wrapperButton: {
    height: 50,
    width: 30,
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  buttonCreate: {
    position: "absolute",
    height: 55,
    width: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLACK_WHITE.LEVEL6,
    top: -20,
    borderStyle: "solid",
    borderColor: PRIMARY.LEVEL1,
    borderWidth: 3,
    borderRadius: 35,
    shadowColor: BLACK_WHITE.LEVEL1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    height: 50,
    width: 50,
  },
  wrapperIcon: {
    width: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    color: BLACK_WHITE.LEVEL5,
    margin: 0,
    padding: 0
  },
  iconActive: {
    color: BLACK_WHITE.LEVEL6
  }
})