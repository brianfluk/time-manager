import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

export default class NewTaskScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        "title": "",
        "daily_goal": "",
        "total_goal": ""
      }
    }
  }
  
  static navigationOptions = {
    title: 'New Task',
    headerStyle: {
      backgroundColor: '#000',
      borderBottomColor: '#000',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView 
        style={styles.container}
        contentContainerStyle={[styles.contentContainer, styles.todoListContainer]}>
          {Object.keys(this.state.fields).map((field, key) => {
            return (
              <Text style={{color: 'white', fontSize: 17}}>
              {field}
              </Text>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }
  
}

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