import * as WebBrowser from 'expo-web-browser';
import Touchable from 'react-native-platform-touchable';
import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  // Modal,
  TouchableHighlight,
} from 'react-native';
import Modal from 'react-native-modal';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    }
    this.setModalVisible = this.setModalVisible.bind(this)
    this.getModalVisible = this.getModalVisible.bind(this)
  }

  componentDidMount() {
    this.props.navigation.setParams({
      setModalVisible: this.setModalVisible,
      getModalVisible: this.getModalVisible,
    })
  }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
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
      headerRight: (
        <View>
          <TouchableOpacity 
            onPress={() =>  params.getModalVisible() ? params.setModalVisible(false)
               : params.setModalVisible(true)}
            hitSlop={{top: 20, left: 20, right: 20, bottom: 10}}
            style={{paddingRight: 12}}>
            <TabBarIcon
              name={'md-add-circle'}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity 
            onPress={() => navigation.navigate('NewTask')}
            hitSlop={{top: 20, left: 20, right: 20, bottom: 10}}
            style={{paddingRight: 12}}>
            <TabBarIcon
              name={
                'md-add-circle'
              }
            />
          </TouchableOpacity> */}
        </View>
      ),
    }
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  getModalVisible() {
    return this.state.modalVisible;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal 
          isVisible={this.state.modalVisible}
          onBackdropPress={() => this.setModalVisible(!this.state.modalVisible)}
          backdropOpacity={0.85}
          animationInTiming={200}
        >
          <View
            style={{
              backgroundColor: '#333',
              marginLeft: 50,
            }}
          >
            <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
              testing new modal
            </Text>
            <SettingsScreen />
          </View>
        </Modal>
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{
            marginTop: 100,
            marginLeft: 100,
            backgroundColor: '#333',
            height: 300,
          }}>
            <View>
              <SettingsScreen />
              <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>New Task</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{color: '#fff', fontSize: 17}}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal> */}

        {/* <View style={[{position: 'absolute', height: 800, width: 800, zIndex: 999}, 
        this.state.modalVisible ? 
        {backgroundColor: 'rgba(0,0,0,0.9)'} : {backgroundColor: 'transparent'}]}>
        </View> */}

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
          <View style={{height:60}}></View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Next: PHY100 (in 1 hr 38 min)</Text>
        </View>
        
      </SafeAreaView>
    );
  }
}

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
    paddingHorizontal: 18,
  },
  todoListItem: {
    paddingBottom: 18,
  },
  todoListText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: 'rgba(31, 32, 48, 0.9)',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    color: '#fff',
    fontSize: 17,
  }
});


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
  {
    "title": "If pirus and crips",
    "total_quota": 100,
    "total_done": 52,
    "daily_quota": 2,
    "daily_done": 1
  },
  {
    "title": "all got along",
    "total_quota": 120,
    "total_done": 75,
    "daily_quota": 1,
    "daily_done": 0
  },
  {
    "title": "wed prolly be dead",
    "total_quota": 100,
    "total_done": 52,
    "daily_quota": 2,
    "daily_done": 1
  },
  {
    "title": "by the end of the song",
    "total_quota": 120,
    "total_done": 75,
    "daily_quota": 1,
    "daily_done": 0
  },
  {
    "title": "Get rich",
    "total_quota": 100,
    "total_done": 52,
    "daily_quota": 2,
    "daily_done": 1
  },
  {
    "title": "or die trying",
    "total_quota": 120,
    "total_done": 75,
    "daily_quota": 1,
    "daily_done": 0
  },
  {
    "title": "Make money",
    "total_quota": 100,
    "total_done": 52,
    "daily_quota": 2,
    "daily_done": 1
  },
  {
    "title": "Drink some cofeee",
    "total_quota": 120,
    "total_done": 75,
    "daily_quota": 1,
    "daily_done": 0
  },
  {
    "title": "Train for GGG",
    "total_quota": 100,
    "total_done": 52,
    "daily_quota": 2,
    "daily_done": 1
  },
  {
    "title": "Fight GGG",
    "total_quota": 120,
    "total_done": 75,
    "daily_quota": 1,
    "daily_done": 0
  },
]
