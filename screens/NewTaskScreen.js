import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native';

export default class NewTaskScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        'title': {
          'name': 'Task',
          'value': ''
        },
        'daily_goal': {
          'name': 'Daily goals (hours)',
          'value': '',
          'keyboardType': 'number-pad',
        },
        'total_goal': {
          'name': 'Total goal (hours)',
          'value': '',
          'keyboardType': 'number-pad',
        },
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
              <View key={key} style={{marginBottom: 12, display:'flex'}}>
                <Text style={{
                  color: '#555', 
                  fontSize: 17, 
                  flex: 1,
                }}>
                  {this.state.fields[field].name}
                </Text>
                <TextInput 
                  keyboardAppearance={'dark'}
                  keyboardType={
                    this.state.fields[field].keyboardType ? 
                    this.state.fields[field].keyboardType : 'default'}
                  style={{
                    height: 50,
                    backgroundColor: '#222',
                    borderRadius: 3,
                    paddingHorizontal: 7,
                    color: 'white',
                    fontSize: 24,
                    flex: 1,
                  }}
                  // onEndEditing={this.setState(field)}
                ></TextInput>
              </View>
            )
          })}
          <Button
          title={'Create'}>
          </Button>
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