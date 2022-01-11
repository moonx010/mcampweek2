import React, {useCallback} from 'react';
import { ImageBackground, Pressable, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Category = ({category, reload, setReload}) => {
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate('CategoryCommunityScreen', {
            category, reload, setReload
        });
    }, [navigation, category,  reload, setReload]);
    const CategorySubject = {
        Restuarant: [
                <ImageBackground source={require('../images/CategoryFoodImage.jpg')} style={styles.imageContainer} blurRadius={8} resizeMode={"cover"}>
                    <Text style={styles.categoryName}>{category}</Text>
                </ImageBackground>
        ],
        Cafe: [
            <ImageBackground source={require('../images/cafe.jpg')} style={styles.imageContainer} blurRadius={2} resizeMode={"cover"}>
                <Text style={styles.categoryName}>{category}</Text>
            </ImageBackground>
        ],
        Pub: [
            <ImageBackground source={require('../images/CategoryFoodImage.jpg')} style={styles.imageContainer} blurRadius={2} resizeMode={"cover"}>
                <Text style={styles.categoryName}>{category}</Text>
            </ImageBackground>
        ],
    };

    return (
        <Pressable onPress={onPress} style={styles.container}>
            {() => {
                if(category == "식당") return CategorySubject.Restuarant[0];
                if(category == "카페") return CategorySubject.Cafe[0];
                if(category == "주점") return CategorySubject.Pub[0];
            }}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        fontFamily:'GodoB'
        
    },
    imageContainer: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 12,
        margin: 8,
        borderRadius: 12,
        overflow: 'hidden',
        
    },
    categoryName: {
        fontSize: 24,
        color: '#fff',
        fontFamily:'GodoM',
    }
})
export default Category;