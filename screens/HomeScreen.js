import * as WebBrowser from 'expo-web-browser';
import Touchable from 'react-native-platform-touchable';
import TabBarIcon from '../components/TabBarIcon';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Tasks',
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: '#000',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'left',
      },
      headerLeft: <TouchableOpacity 
        onPress={() => navigation.navigate('Settings')}
        hitSlop={{top: 20, left: 20, right: 20, bottom: 10}}
        style={{paddingLeft: 12}}>
          <TabBarIcon
            name={
              'md-settings'
            }
          />
      </TouchableOpacity>,
    }
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[styles.container, styles.todoListContainer]}
        contentContainerStyle={styles.contentContainer}>
        
        {sampleData.map((goal, key) => {
          return (<Touchable style={styles.todoListItem} key={key}>
            <Text style={styles.todoListText}>
              {goal.title} {'\n'}
              <Text style={{fontSize: 17, color: 'grey', fontWeight: 'normal'}}>
              Daily goals: {goal.daily_done} / {goal.daily_quota}
              </Text>
            </Text>
          </Touchable>)
        })}
      </ScrollView>
    </SafeAreaView>
  );
}}

const sampleData = [
  {
    "title": "Learn Chinese",
    "total_quota": 100,
    "total_done": 52,
    "daily_quota": 2,
    "daily_done": 1
  },
  {
    "title": "Soda app",
    "total_quota": 120,
    "total_done": 75,
    "daily_quota": 1,
    "daily_done": 0
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  headerContainer: {
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingBottom: 0,
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
    fontSize: 17,
    // fontWeight: 'bold',
    color: 'white',
    lineHeight: 24,
  },
});
