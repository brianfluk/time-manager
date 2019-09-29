import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function CalendarScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}
      <Text>
        CALENDAR
      </Text>
    </ScrollView>
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