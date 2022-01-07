import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export default MenuItem = (item) => {
    return(
        <View style = {styles.container}>
            <Text>{item.name}</Text>
            <InputSpinner
              step={1}
              skin="round"
              value={item.count}
              style={styles.spinner}
              onChange={(num) => {
                item.count = num;
              }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    spinner: {
        justifyContent: 'flex-end'
    }
})