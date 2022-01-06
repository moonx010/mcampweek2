import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export default MenuItem = ({item}) => {
    return(
        <View>
            <InputSpinner
              step={1}
              skin="round"
              value={item.count}
              onChange={(num) => {
                item.count = num;
              }}
            />
        </View>
    )

}