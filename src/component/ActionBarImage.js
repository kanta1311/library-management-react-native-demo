import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';

export class ActionBarImage extends React.Component {

    constructor(props){
        super(props)
    }
    
  render(){
    return (
        <View style={{flexDirection: 'row'}}>
         <Image 
            source={{
              uri:
                'https://www.pngkey.com/png/full/309-3092261_exit-icon-png-download-transparent-background-logout-icon.png',
            }}
            style={{
              width: 30,
              height: 30,
              
            }}
          />
        </View>
      );
  }
};

export default ActionBarImage;