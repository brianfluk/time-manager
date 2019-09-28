import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { black } from 'ansi-colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          September 28, 2019
          {/* maybe put an icon representing day evening or night */}
        </Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.todoListContainer}>
          <Text style={styles.todoListText}>
            Item 1
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 40,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { width: 0, height: -5 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 5,
    //   },
    //   android: {
    //     elevation: 20,
    //   },
    // }),
    backgroundColor: 'rgba(96,100,109, 0.6)',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  contentContainer: {
    paddingTop: 30,
  },
  todoListContainer: {
    marginHorizontal: 50,
  },
  todoListText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
