import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import dictionary from './database';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      text2:""
    };
  }render(){
    return (  
    <View style={styles.container}>
      <Text>type the word</Text>
      <TextInput
      style={styles.inputBox}
      onChangeText={text => {
        this.setState({ text: text });
     
      }}
      value={this.state.text}
    />
    <TouchableOpacity
    style={styles.goButton}
    onPress={() => {
      
      dictionary[this.state.text]?(
      
      this.setState({ text2: this.state.text })):alert("this word is not available")
     
    }}>
    <Text style={styles.buttonText}>GO</Text>
  </TouchableOpacity>
    
     <View style={styles.container}>
        <Text>{dictionary[this.state.text2].word } </Text>
        <Text>{dictionary[this.state.text2].lexicalCategory } </Text>
        <Text>{dictionary[this.state.text2].definition } </Text>)
        </View>
    
   
 

    </View>
    
  );
}}


const styles = StyleSheet.create({
  container: {
    container: {
      flex: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderWidth: 4,
    },
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});