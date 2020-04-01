import { StyleSheet, Dimensions } from 'react-native'
import { palette } from 'utils/Palettes'

const { PRIMARY, SECOND_A, SECOND_B, COMPLEMENTARY, BLACK_WHITE } = palette

export default StyleSheet.create({
  primaryIcon: {
    color: PRIMARY.LEVEL4
  },
  secondAIcon: {
    color: SECOND_A.LEVEL4
  },
  secondBIcon: {
    color: SECOND_B.LEVEL4
  },
  complementaryIcon: {
    color: COMPLEMENTARY.LEVEL4
  }
})