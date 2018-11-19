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

class LearnScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> LEARN PAGE </Text>
        <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('LoginPage')}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />  
        <Button
          onPress={() => this.props.navigation.navigate('RegisterPage')}
          title="Register"
          color="#841584"
          accessibilityLabel="Register"
        />  
      </View>
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

export default LearnScreen;