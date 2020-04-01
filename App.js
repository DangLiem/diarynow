import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import { VIEWS_NAME } from 'consts'
import {
  Main,
  CreateDiary,
  DiaryDetail,
  GoalsScreen,
  CreateGoals,
  SelectActivities,
  RemindersScreen
} from 'views'

const AppNavigator = createStackNavigator(
  {
    Main,
    [VIEWS_NAME.CREATE_DIARY]: {
      screen: CreateDiary
    },
    [VIEWS_NAME.DIARY_DETAIL]: {
      screen: DiaryDetail
    },
    // Settings tab
    // Goals screen
    [VIEWS_NAME.GOALS]: {
      screen: GoalsScreen
    },
    [VIEWS_NAME.CREATE_GOALS]: {
      screen: CreateGoals
    },
    [VIEWS_NAME.SELECT_ACTIVITIES]: {
      screen: SelectActivities
    },
    // Reminder screen
    [VIEWS_NAME.REMINDERS]: {
      screen: RemindersScreen
    }
    // End settings tab
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);