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

class RegisterActivity extends React.Component {
  constructor() {
 
    super()
 
    this.state = {
 
      userName: '',
      userPassword: '',
      userEmail: '',
      userFullname:''
 
    }
 
  }

  UserRegistrationFunction = () =>{
 
    fetch('http://192.168.15.42/User_Site/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        userName: this.state.UserName,
        userPassword: this.state.UserPassword,
        userEmail: this.state.UserEmail,
        userFullname: this.state.userFullname

      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
   
  }

    static navigationOptions = {
        header: null,
      };

  render() {
    return (
      <View style={styles.MainContainer}>
 
        <Text style= {styles.title}>User Registration Form</Text>
  
        <TextInput
          placeholder="Enter User Name"
          onChangeText={userName => this.setState({userName : userName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput
          placeholder="Enter User Password"
          onChangeText={userPassword => this.setState({userPassword : userPassword})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
 
        <TextInput
          placeholder="Enter User Email"
          onChangeText={userEmail => this.setState({userEmail : userEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Full Name"
          onChangeText={userFullname => this.setState({userFullname : userFullname})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          style={styles.TextInputStyleClass}
          />
 
        <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
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

  MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    margin: 10
  },
   
  TextInputStyleClass: {
   
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
   
  title:{
   
    fontSize: 22, 
    color: "#009688", 
    textAlign: 'center', 
    marginBottom: 15
  }
});

export default RegisterActivity;
