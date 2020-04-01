import { SCHEMAS_NAME } from 'consts'

export const Diaries = {
  name: SCHEMAS_NAME.DIARIES,
  primaryKey: "id",
  properties: {
    id: {
      type: "string"
    },
    content: 'string',
    mood: 'string',
    activities: "string",
    createdAt: {
      type: 'date',
      default: new Date()
    },
    updatedAt: 'date?'
  }
}

export const Goals = {
  name: SCHEMAS_NAME.GOALS,
  primaryKey: "id",
  properties: {
    id: {
      type: "string"
    },
    activity: 'string',
    repeat: 'string',
    reminder: "bool",
    timeReminder: "date?",
    note: "string?",
    startedAt: {
      type: "date",
    },
    createdAt: {
      type: 'date',
    },
    updatedAt: 'date?'
  }
}

export const Reminders = {
  name: SCHEMAS_NAME.REMINDERS,
  primaryKey: "id",
  properties: {
    id: {
      type: "string"
    },
    time: "date",
    createdAt: {
      type: 'date',
    },
    updatedAt: 'date?'
  }
}

export const ReminderSetting = {
  name: SCHEMAS_NAME.REMINDER_SETTING,
  primaryKey: "id",
  properties: {
    id: {
      type: "string"
    },
    note: "string",
    isPopup: "bool",
    createdAt: {
      type: 'date',
    },
    updatedAt: 'date?'
  }
}