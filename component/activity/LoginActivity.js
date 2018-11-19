import React, { Component } from 'react';
import { 
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

class LoginActivity extends React.Component {
    static navigationOptions = {
        header: null,
      };

  render() {
    return (
        <View style={styles.container}>
        <Text>Login Form</Text>
        <Button
          onPress={() => this.props.navigation.navigate('HomePage')}
          title="Login"
          color="#841584"
          accessibilityLabel="Login to Tajweed Checker"
        />  
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default LoginActivity;
