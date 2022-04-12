import React from 'react';
import {  Image, Text, View ,StyleSheet,FlatList,ScrollView,SafeAreaView} from 'react-native';

export default class BookDetailScreen extends React.Component{
    bookDetails={};
    constructor(props) {
        super(props);
        this.bookDetails=props.route.params
    }

  
  render() {
    return (

        <SafeAreaView style={styles.container}>
            
                <View style={styles.container}>
                <View style={{flexDirection:'row',}}>
                    <Image source={{ uri: this.bookDetails.thumbnailUrl}} style={styles.photo} />
                    <View style={{flexDirection:'column',  marginLeft:10}}>
                        <Text style={styles.title}>
                        {this.bookDetails.title}
                        </Text>
                        <Text>
                            <Text style={styles.boldTitle}>Page Count : </Text>
                            <Text style={styles.dataTitle}>{this.bookDetails.pageCount}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.boldTitle}>Status: </Text>
                            <Text style={styles.dataTitle}>{this.bookDetails.status}</Text>
                        </Text>
                        <Text>
                            <Text style={{fontSize:15,fontWeight:'bold',}}>ISBN: </Text>
                            <Text style={styles.dataTitle}>{this.bookDetails.isbn}</Text>
                        </Text>
                        <Text>
                            <Text style={{fontSize:15,fontWeight:'bold',}}>Authors: </Text>
                        </Text>
                        <FlatList
                            keyExtractor={data => data}
                            data={this.bookDetails.authors}
                            renderItem={({ item }) => {
                                return (
                                <Text >
                                    {item}
                                </Text>
                                );
                            }}
                            />
                        
                        <Text>
                            <Text style={{fontSize:15,fontWeight:'bold',}}>categories: </Text>
                        </Text>
                        <FlatList
                            keyExtractor={data => data}
                            data={this.bookDetails.categories}
                            renderItem={({ item }) => {
                                return (
                                <Text >
                                    {item}
                                </Text>
                                );
                            }}
                            />
                    </View>
                </View>
                <ScrollView>
                <Text style={styles.boldTitle}>Short Description : </Text>
                <Text style={styles.dataTitle}>{this.bookDetails.shortDescription || 'NA'}</Text>

                <Text style={styles.boldTitle}>Long Description : </Text>
                <Text style={styles.dataTitle}>{this.bookDetails.longDescription || 'NA'}</Text>
                </ScrollView>
                </View>
            
        </SafeAreaView>
);

    
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      // flexDirection: 'row',
      alignItems: 'flex-start',
      borderWidth:0,
      margin:5,
      backgroundColor:'#F2F2F2',
    },
    title: {
      
      fontSize: 16,
      color:'red'
    },
   
    photo: {
      height: 250,
      width: 150,
    //   borderRadius: 50,
    },
    boldTitle:{
        fontSize:15,
        fontWeight:'bold'
    },
    dataTitle:{
        fontSize:13,
        fontWeight:'normal'
    }
  });