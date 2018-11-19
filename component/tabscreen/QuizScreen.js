import React, { Component } from 'react';
import { 
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

class QuizScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> QUIZ PAGE </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
  fontSize: 50,
  marginTop: 300,
  },
});

export default QuizScreen;