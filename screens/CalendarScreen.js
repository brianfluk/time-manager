import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import WeekView from 'react-native-week-view';

export default function CalendarScreen() {
  return (
    <WeekView 
      numberOfDays={7}
      events={[]}
      selectedDate={new Date()}
      onEventPress={()=> {alert('hi')}}
      headerStyle={{
        backgroundColor: 'black',
        // borderColor: 'blue',
      }}
      customStyles={{
        container: {
          backgroundColor: '#222',
        },
        header: {
          backgroundColor: 'black',
        },
        timeColumn: {
          backgroundColor: 'black',
        },
        timeLabel: {
          backgroundColor: 'black',
        },
        timeText: {
          backgroundColor: 'black',
          color: 'white',
        },
        scrollViewContent: {
          backgroundColor: 'black',
        },
        eventStyle: {
          backgroundColor: 'black',
        },
        viewCellStyle: {
          backgroundColor: '#222',
        }
      }}
    />
    // <ScrollView style={styles.container}>
    //   {/* <Calendar
    //     // Initially visible month. Default = Date()
    //     // current={'2012-03-01'}
    //     // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    //     // minDate={'2012-05-10'}
    //     // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    //     // maxDate={'2012-05-30'}
    //     // Handler which gets executed on day press. Default = undefined
    //     onDayPress={(day) => {console.log('selected day', day)}}
    //     // Handler which gets executed on day long press. Default = undefined
    //     onDayLongPress={(day) => {console.log('selected day', day)}}
    //     // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    //     monthFormat={'MMM yyyy'}
    //     // Handler which gets executed when visible month changes in calendar. Default = undefined
    //     onMonthChange={(month) => {console.log('month changed', month)}}
    //     // Hide month navigation arrows. Default = false
    //     // hideArrows={true}
    //     // Replace default arrows with custom ones (direction can be 'left' or 'right')
    //     // renderArrow={(direction) => (<Arrow />)}
    //     // Do not show days of other months in month page. Default = false
    //     hideExtraDays={true}
    //     // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    //     // day from another month that is visible in calendar page. Default = false
    //     disableMonthChange={true}
    //     // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    //     firstDay={1}
    //     // Hide day names. Default = false
    //     hideDayNames={true}
    //     // Show week numbers to the left. Default = false
    //     showWeekNumbers={true}
    //     // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    //     onPressArrowLeft={substractMonth => substractMonth()}
    //     // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    //     onPressArrowRight={addMonth => addMonth()}
    //   /> */}
    //   <WeekView 
    //     numberOfDays={7}
    //     events={[]}
    //     selectedDate={new Date()}
    //   />
    // </ScrollView>
  );
}

CalendarScreen.navigationOptions = {
  title: 'Calendar',
  headerStyle: {
    backgroundColor: '#000',
    borderBottomColor: '#000',
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  headerContainer: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  contentContainer: {
    paddingTop: 30,
  },
  todoListContainer: {
    marginHorizontal: 18,
  },
  todoListItem: {
    paddingBottom: 18,
  },
  todoListText: {
    fontSize: 20,
    color: '#e1e1e1',
    lineHeight: 24,
  },
});