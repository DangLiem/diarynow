import { StyleSheet, Dimensions } from 'react-native';
import { ORIGINAL } from 'consts/colors';

const screenWidth = Math.round(Dimensions.get('window').width);
const elevationShadowStyle = (elevation) => {
  return {
    elevation: elevation,
    shadowColor: 'black',
    shadowOffset: { width: elevation, height: 0.5 * elevation },
    shadowOpacity: 0.5,
    shadowRadius: 0.8 * elevation
  };
}

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 8,
  },
  wrapperContent: {
    display: "flex",
    flexDirection: "column",
    width: screenWidth - 20,
  },
  wrapperRipple: {
    ...elevationShadowStyle(5),
    backgroundColor: "gray",
    borderRadius: 5
  },
  content: {
    height: 80,
    backgroundColor: ORIGINAL.BLACK_WHITE.LEVEL6,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row"
  },
  timeLine: {
    height: 20,
    paddingLeft: 5
  },
  line: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    width: 14,
    position: "relative"
  },
  divider: {
    borderWidth: 0.9,
    backgroundColor: ORIGINAL.SECOND_A.LEVEL2,
    borderColor: ORIGINAL.SECOND_A.LEVEL2,
    width: 102,
    // zIndex: 1,
    transform: [
      { rotateZ: "90deg" },
      { translateY: 44 },
      { translateX: 15 }
    ]
  },
  dotTop: {   
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: ORIGINAL.COMPLEMENTARY.LEVEL1,
    position: "absolute",
    top: 8,
    left: 4,
    // zIndex: 3
  },
  dotBottom: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: ORIGINAL.COMPLEMENTARY.LEVEL1,
    position: "absolute",
    bottom: -22,
    left: 4,
    // zIndex: 3
  },
  iconLeft: {
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  contentRight: {
    width: screenWidth - 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: { textAlign: "left" },
  middleIcons: { flexGrow: 0.2, display: "flex", justifyContent: 'flex-start', flexDirection: "row", alignItems: "center" },
  middleIcon: { marginLeft: 3, marginRight: 3 },
  contentBottom: { flex: 1, flexWrap: "nowrap", flexGrow: 1 }
})