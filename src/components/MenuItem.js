import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
var RNFS = require('react-native-fs');
export default MenuItem = ({item, setList, list}) => {
    return(
        <View style={styles.menuContainer}>
            <View style = {styles.container}>
                <Text style={styles.itemName}>{item.name}</Text>
                <InputSpinner
                step={1}
                value={item.count}
                style={styles.spinner}
                onChange={(num) => {
                        setList(
                            list.map(chk => 
                                chk.id == item.id ? {...chk, "count": num} : chk
                                )
                        
                        );
                }}
                fontSize={16}
                height={40}
                width={120}
                />
            </View>
        </View>
        
    );

};

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 12,
        
    },
    spinner: {
        justifyContent: 'flex-end',
    },
    itemName: {
        fontSize: 20,
    }
})