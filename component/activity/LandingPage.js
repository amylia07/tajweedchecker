import React, { Component } from 'react';
import { 
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Image
} from 'react-native';


class LandingPage extends React.Component {
    static navigationOptions = {
        header: null,
      };

  render() {
    return (
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

export default LandingPage;
