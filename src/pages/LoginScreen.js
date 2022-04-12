import * as React from 'react';
import { View, Text ,Button ,StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",               // to store username
            usernameErrorMessage: "",     // username flag to error message
            password: "",               // to store password
            passwordErrorMessage: "",     // password flag to password message
            validUsernamePassword: "",             // manage loader
        }


    AsyncStorage.getItem("isLoggedin").then((data)=>{
        if(data || data=="true"){
         props.navigation.replace("Home") 
        }
      })
    }

    login(){
       
        const {username,password} = this.state
        this.setState({validUsernamePassword:""})
        if(!username && !password){
            this.setState({usernameErrorMessage:"Username is required"})
            this.setState({passwordErrorMessage:"Password is required"})
        }else if(!username && password){
            this.setState({usernameErrorMessage:"Username is required"})
            this.setState({passwordErrorMessage:""})
         }else if(username && !password){
            this.setState({passwordErrorMessage:"Password is required"})
            this.setState({usernameErrorMessage:""})
         }else if(username!='admin' && password!='admin'){
             this.setState({validUsernamePassword:"User or password missmatch"})
             this.setState({usernameErrorMessage:""})
            this.setState({passwordErrorMessage:""})
         }else{
            this.setState({validUsernamePassword:""})
            this.setState({usernameErrorMessage:""})
            this.setState({passwordErrorMessage:""})

            AsyncStorage.setItem("isLoggedin","true").then(()=>{
                this.props.navigation.replace('Home')

            }).catch(error=>{
                alert("Error"+error)
            })
         }
         
    }
    render(){
        return (
            <SafeAreaView>
                        <Text style={{textAlign:'center', margin:3,fontSize:15,padding:10}}>Welcome to library Management 🎉 {"\n\n\n"}</Text>
                        
            
                         <Text style={styles.errorText}>{this.state.usernameErrorMessage}</Text>
                         <TextInput
                            style={styles.input}
                            placeholder="User Name"
                            onChangeText={username=>this.setState({username})}
                            value={this.state.username} 
                            />
                            
                        <Text style={styles.errorText}>{this.state.passwordErrorMessage}</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={password=>this.setState({password})}
                            value={this.state.password}
                            placeholder="Password"
                            />
                        
                        
                        <Text style={styles.errorText}>{this.state.validUsernamePassword}</Text>
                            <View style={styles.loginButtonSection}>
                                <TouchableOpacity style={styles.signin} onPress={()=>this.login()}>
                                    <Text style={{color:'#fff'}}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>
                  </SafeAreaView>
        );
    }
}



  const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#fff'
        
      },
      signin:{
          backgroundColor:'#800080',
          padding: 10,
      },
      loginButtonSection: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:10
     },
     errorText:{
        margin:5,color:'red'
     }
});
