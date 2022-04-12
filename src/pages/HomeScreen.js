import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Row from '../component/Row';

export default class HomeScreen extends React.Component{
  constructor(props) {

    AsyncStorage.getItem("isLoggedin").then((data)=>{
      if(!data || data!="true"){
       props.navigation.replace("Login") 
      }
    })

    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getBookList() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json');
      const json = await response.json();
      json.map((item,index)=>{
        item['index']=index
        return item
      })

      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getBookList();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View >
        {isLoading ? <ActivityIndicator/> : (
          
          <FlatList
            data={data}
            keyExtractor={item => item.index}
            renderRow={(data) => <Row {...data} />}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>{this.props.navigation.push('BookDetail',item)}}>
                <Row {...item}></Row>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  }
}

