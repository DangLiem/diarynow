import Realm from 'realm'

import uuid from 'uuid/v1'
import { SCHEMAS_NAME } from 'consts'
import { Diaries, Goals, Reminders, ReminderSetting } from './schemas'

const databaseOptions = {
  path: "diarynow.realm",
  schema: [Diaries, Goals, Reminders, ReminderSetting]
}

const create = (schema, object) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {
      realm.write(() => {
        object.id = uuid()
        object.createdAt = new Date()
        const instance = realm.create(schema, object)
        resolve(instance);
      })
    })
    .catch(err => reject(err))
})

const update = (schema, object) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {
      realm.write(() => {
        const instance = realm.objectForPrimaryKey(schema, object.id)
        if (!instance) {
          throw Error(`${schema} id = ${object.id} not found`)
        }
        Object.keys(instance).map(key => {
          if (object[key] !== undefined && key !== "id") {
            instance[key] = object[key]
          }
        })
        instance.updatedAt = new Date()
        resolve(instance)
      })
    })
    .catch(err => reject(err))
})

const remove = (schema, objectId) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {
      realm.write(() => {
        const instance = realm.objectForPrimaryKey(schema, objectId);
        if (!instance) {
          throw Error(`${schema} id = ${object.id} not found`)
        }
        realm.delete(instance)
        resolve();
      })
    })
    .catch(err => reject(err))
})

const get = (schema) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {
      resolve(realm.objects(schema))
    })
    .catch(err => reject(err))
})

export const getDiaries = () => get(SCHEMAS_NAME.DIARIES)
export const createDiary = (diary) => create(SCHEMAS_NAME.DIARIES, diary);
export const updateDiary = (diary) => update(SCHEMAS_NAME.DIARIES, diary);
export const removeDiary = (diaryId) => remove(SCHEMAS_NAME.DIARIES, diaryId);

export const getGoals = () => get(SCHEMAS_NAME.GOALS)
export const createGoal = (goal) => {
  if (!goal.statedAt) {
    goal.startedAt = new Date()
  }
  return create(SCHEMAS_NAME.GOALS, goal)
}
export const updateGoal = (goal) => update(SCHEMAS_NAME.GOALS, goal);
export const removeGoal = (goalId) => remove(SCHEMAS_NAME.GOALS, goalId);

export const getReminders = () => get(SCHEMAS_NAME.REMINDERS)
export const createReminder = (reminder) => create(SCHEMAS_NAME.REMINDERS, reminder)
export const updateReminder = (reminder) => update(SCHEMAS_NAME.REMINDERS, reminder)
export const deleteReminder = (reminderId) => remove(SCHEMAS_NAME.REMINDERS, reminderId)

export const getReminderSetting = () => get(SCHEMAS_NAME.REMINDER_SETTING)
export const createReminderSetting = (setting) => create(SCHEMAS_NAME.REMINDER_SETTING, setting)
export const updateReminderSetting = (setting) => update(SCHEMAS_NAME.REMINDER_SETTING, setting)