import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  // return <ExpoConfigView />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      style={styles.container}
      contentContainerStyle={[styles.contentContainer, styles.todoListContainer]}>
        <View>
          {settingsData.map(((setting, i) => {
            return (
              <Touchable key={i} style={{paddingBottom: 22}}>
                <Text style={{color: 'white', fontSize: 17}}>
                  {setting.title}
                </Text>
              </Touchable>
            )
          }))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerStyle: {
    backgroundColor: '#000',
    borderBottomColor: '#000',
  },
  headerTitleStyle: {
    color: '#fff',
  }
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

const settingsData = [
  {
    "title": "Adjust work schedule",
    "details": [
      {
        "title": "Working days of week",
        "data": [true, false, true, true, true, true, false],
        "type": "week-select"
      },
      {
        "title": "Working hours",
        "data": [(9,11), (12,17)]
      }
    ]
  },
  {
    "title": "Theme and Appearance",
    "details": [
      
    ]
  },
  {
    "title": "Notifications",
    "details": []
  },
  {
    "title": "Sync with Calendars",
    "details": []
  },
  {
    "title": "Insights and Statistics",
    "details": []
  },
]