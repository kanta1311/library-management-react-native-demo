import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0,
    margin:5,
    backgroundColor:'#fff',
    borderRadius:5,
    flexDirection:'row'
  },
  title: {
    
    fontSize: 16,
    color:'red'
  },
 
  photo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default  Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.thumbnailUrl}} style={styles.photo} />
    <View style={{flexDirection:'column', width:'80%', marginLeft:10}}>
        <Text style={styles.title}>
        {props.title}
        </Text>
        <Text  numberOfLines={2}> {props.shortDescription}
        </Text>
    </View>
    
  </View>
);

