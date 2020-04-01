import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native'
import { List } from 'react-native-paper'

import { getDiaries, createDiary } from 'repositories'
import CustomItem from 'components/CustomItem';
import Headers from 'components/Headers';
import moment from 'moment';
import MonthPicker from 'components/MonthPicker';
import { ORIGINAL } from 'consts/colors';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      diaries: {},
      date: moment()
    }
  }

  componentDidMount() {
    // createDiary({
    //   content: "Hello",
    //   mood: "Happy",
    //   createdAt: moment().set("month", 11).date(12).toDate()
    // })
    this.onFilterMonthYear(this.state.date)
  }

  /**
   * @param {import('moment').Moment} date
   */
  onFilterMonthYear = (date) => {
    getDiaries()
      .then(diaries => {
        const thisDiaries = {}
        diaries
          .filter(diary => moment(diary.createdAt).get("year") === date.get("year") && moment(diary.createdAt).get("month") === date.get("month"))
          .map(diary => {
            if (thisDiaries[moment(diary.createdAt).format("MMM/DD/YYYY")] instanceof Array) {
              thisDiaries[moment(diary.createdAt).format("MMM/DD/YYYY")].push(diary)
            }
            else {
              thisDiaries[moment(diary.createdAt).format("MMM/DD/YYYY")] = [];
              thisDiaries[moment(diary.createdAt).format("MMM/DD/YYYY")].push(diary)
            }
          })
        this.setState({
          diaries: thisDiaries
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Headers right={true}>
          <MonthPicker onSetDate={this.onFilterMonthYear} />
        </Headers>

        <ScrollView>
          {
            Object.keys(this.state.diaries).map((day, index) => {
              if (this.state.diaries[day] instanceof Array) {
                return (
                  <List.Section
                    key={index}
                    title={day}
                    titleStyle={{ paddingTop: 10, paddingBottom: 0, fontWeight: "bold", color: "#000" }}
                  >
                    {
                      this.state.diaries[day].map((diary, index) => (
                        <CustomItem
                          key={index}
                          time={moment(diary.createdAt)}
                          timeline={true}
                          iconLeft={diary.mood}
                          midIcons={[{ name: "shoppingcart", type: "AntDesign" }, { name: "gift", type: "AntDesign" }, { name: "chrome", type: "AntDesign" }]}
                          content={diary.content}
                          onPress={() => { }}
                        />
                      ))
                    }
                  </List.Section>
                )
              }
              return null
            })
          }
          <View style={{ height: 30 }}></View>
        </ScrollView>
      </Fragment>
    )
  }
} 