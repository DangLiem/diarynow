import ICONS, { ICON_TYPE } from "./icons"

export const VIEWS_NAME = {
  MAIN: "MAIN",
  DASHBOARD: "DASHBOARD",
  ANALYSIS: "ANALYSIS",
  SETTINGS: "SETTINGS",
  CALENDAR: "CALENDAR",
  CREATE_DIARY: "CREATE_DIARY",
  DIARY_DETAIL: "DIARY_DETAIL",
  GOALS: "GOALS",
  CREATE_GOALS: "CREATE_GOALS",
  WEEKLY_REPORTS: "WEEKLY_REPORTS",
  ACHIEVMENTS: "ACHIEVMENTS",
  REMINDERS: "REMINDERS",
  EDIT_MOODS: "EDIT_MOODS",
  EDIT_ATIVITIES: "EDIT_ATIVITIES",
  CHANGE_COLORS: "CHANGE_COLORS",
  PIN_LOCK: "PIN_LOCK",
  START_WEEK: "START_WEEK",
  LANGUAGES: "LANGUAGES",
  SYNC: "SYNC",
  EXPORT: "EXPORT",
  SELECT_ACTIVITIES: "SELECT_ACTIVITIES"
}

export const THEMES_NAME = {
  ORIGINAL: "ORIGINAL",
  BEACH: "BEACH"
}

export const SCHEMAS_NAME = {
  DIARIES: "Diaries",
  GOALS: "Goals",
  REMINDERS: "Reminders",
  REMINDER_SETTING: "ReminderSetting"
}

export const EVENT_NAME = {
  ITEM_CLICK: "ITEM_CLICK",
  ITEM_RIGHT_CLICK: "ITEM_RIGHT_CLICK"
}

export const SETTINGS_SECTIONS = {
  REPORTS: {
    title: "Reports",
    GOALS: {
      title: "Goals",
      icon: ICONS.Goals,
      key: "REPORTS/GOALS",
    },
    WEEKLY_REPORTS: {
      title: "Weekly Reports",
      icon: ICONS.WeeklyReports,
      key: "REPORTS/WEEKLY_REPORTS",
    },
    ACHIEVMENTS: {
      title: "Achievements",
      icon: ICONS.Achievements,
      key: "REPORTS/ACHIEVMENTS",
    },
  },
  NOTIFICATIONS: {
    title: "Notifications",
    REMINDERS: {
      title: "Reminders",
      icon: ICONS.Reminders,
      key: "NOTIFICATIONS/REMINDERS",
    }
  },
  CONFIGS: {
    title: "Configs",
    EDIT_MOODS: {
      title: "Edit Moods",
      icon: ICONS.EditMoods,
      key: "CONFIGS/EDIT_MOODS",
    },
    EDIT_ATIVITIES: {
      title: "Edit Activities",
      icon: ICONS.EditActivities,
      key: "CONFIGS/EDIT_ATIVITIES",
    },
    CHANGE_COLORS: {
      title: "Change Colors",
      icon: ICONS.ChangeColors,
      key: "CONFIGS/CHANGE_COLORS",
    },
    PIN_LOCK: {
      title: "PIN Lock",
      icon: ICONS.PINLock,
      key: "CONFIGS/PIN_LOCK",
    },
    START_WEEK: {
      title: "Start of the Week",
      description: "Monday",
      icon: ICONS.StartOfTheWeek,
      isModal: true,
      key: "CONFIGS/START_WEEK",
    },
    LANGUAGES: {
      title: "Languages",
      description: "English",
      icon: ICONS.Languages,
      isModal: true,
      key: "CONFIGS/LANGUAGES",
    }
  },
  BACKUP_RESTORE: {
    title: "Backup & Restore",
    SYNC: {
      title: "Sync",
      icon: ICONS.Sync,
      key: "BACKUP_RESTORE/SYNC",
    },
    EXPORT: {
      title: "Export Diaries",
      icon: ICONS.ExportDiaries,
      isModal: true,
      key: "BACKUP_RESTORE/EXPORT",
    }
  }
}

export const CREATE_GOALS_MENU = {
  ACTIVITIES: {
    title: "Activities",
    SELECT_ACTIVITIES: {
      title: "Select activity",
      key: "ACTIVITIES/SELECT_ACTIVITIES",
      icon: ICONS.SelectActivity,
    }
  },
  SETTINGS: {
    title: "Settings",
    REPEAT: {
      title: "Repeat",
      key: "SETTINGS/REPEAT",
      icon: ICONS.Repeat,
    },
    REMINDERS: {
      title: "Reminders",
      key: "SETTINGS/REMINDERS",
      icon: ICONS.Reminders,
      switch: true
    },
    TIMES: {
      title: "Times",
      key: "SETTINGS/TIMES",
      icon: ICONS.Times,
      hided: false
    },
    NOTES: {
      title: "Notes",
      description: "Write your diary now!",
      key: "SETTINGS/NOTES",
      icon: ICONS.Notes,
      hided: false
    }
  }
}

export const DAY = {
  Monday: {
    title: "Monday",
    key: "Monday",
    switch: false,
    value: "Mon"
  },
  Tueday: {
    title: "Tueday",
    key: "Tueday",
    switch: false,
    value: "Tue"
  },
  Wednesday: {
    title: "Wednesday",
    key: "Wednesday",
    switch: false,
    value: "Wed"
  },
  Thursday: {
    title: "Thursday",
    key: "Thursday",
    switch: false,
    value: "Thu"
  },
  Friday: {
    title: "Friday",
    key: "Friday",
    switch: false,
    value: "Fri"
  },
  Saturday: {
    title: "Saturday",
    key: "Saturday",
    switch: false,
    value: "Sat"
  },
  Sunday: {
    title: "Sunday",
    key: "Sunday",
    switch: false,
    value: "Sun"
  }
}

export const MONTH = {
  January: {
    title: "January",
    key: "January",
    value: 0
  },
  February: {
    title: "February",
    key: "February",
    value: 1
  },
  March: {
    title: "March",
    key: "March",
    value: 2
  },
  April: {
    title: "April",
    key: "April",
    value: 3
  },
  May: {
    title: "May",
    key: "May",
    value: 4
  },
  Juny: {
    title: "Juny",
    key: "Juny",
    value: 5
  },
  July: {
    title: "Juny",
    key: "Juny",
    value: 6
  },
  August: {
    title: "August",
    key: "August",
    value: 7
  },
  September: {
    title: "September",
    key: "September",
    value: 8
  },
  October: {
    title: "October",
    key: "October",
    value: 9
  },
  November: {
    title: "November",
    key: "November",
    value: 10
  },
  December: {
    title: "December",
    key: "December",
    value: 11
  }
}

export const ACTIVITIES = {
  Work: {
    title: "Work",
    icon: ICONS.Work
  },
  Relax: {
    title: "Relax",
    icon: ICONS.Relax
  },
  Family: {
    title: "Family",
    icon: ICONS.Family
  },
  Friends: {
    title: "Friends",
    icon: ICONS.Friends
  },
  Date: {
    title: "Date",
    icon: ICONS.Date
  },
  Sport: {
    title: "Sport",
    icon: ICONS.Sport
  },
  Party: {
    title: "Party",
    icon: ICONS.Party
  },
  Movies: {
    title: "Movies",
    icon: ICONS.Movies
  },
  Reading: {
    title: "Reading",
    icon: ICONS.Reading
  },
  Gaming: {
    title: "Gaming",
    icon: ICONS.Gaming
  },
  Shopping: {
    title: "Shopping",
    icon: ICONS.Shopping
  },
}