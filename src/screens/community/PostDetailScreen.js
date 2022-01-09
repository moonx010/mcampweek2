import React, {useState, useCallback} from 'react';
import {
    View,
    Pressable,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
    Text,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import _ from 'lodash';
import TabHeader from '../../components/TabHeader';
import CommentList from '../../components/Comment/CommentList';
import CommentInput from '../../components/Comment/CommentInput';
import dummy from '../../db/data.json';

const aspectRatio = 640 / 480;
const DEFAULT_IMAGE = require('../../images/DefaultImage.png');

export default function PostDetailScreen({navigator}) {
    const insets = useSafeAreaInsets();
    const route = useRoute();
    const [inputcontent, inputchange] = useState('');

    const categoryName = () => {
        return(_.get(route, 'params.item.post_category', ));
     };
     const postId = () => {
        return(_.get(route, 'params.item.id', ));
     };
     const userId = () => {
        return(_.get(route, 'params.item.user_id', ));
     };

    return (
        <>
            <TabHeader title={_.get(route, 'params.item.post_category', '')}/>
            <ScrollView style={[styles.constainer, { paddingBottom: insets.bottom,
            }]}>
                <View style={styles.contentContainer}>
                    <View style={styles.storeInfo}>

                        <Text style={styles.title}>
                            {_.get(route, 'params.item.post_title', '')}
                        </Text>
                        <Text style={styles.content}>
                            {_.get(route, 'params.item.post_content', '')}
                        </Text>
                        
                    </View>
                    <View>
                        <CommentList category={categoryName()} post_id={postId()}/>
                    </View>
                </View>
            </ScrollView>
                <CommentInput
                    inputContent={inputcontent}
                    inputContentChange={inputchange}
                />
            
        </>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginBottom : 8,
        fontWeight:'bold',
    },
    content: {
        fontSize: 18,
        marginBottom: 20,
        marginLeft: 10,
        marginBottom : 8,
    },

    row: {
        marginBottom: 20,
    },
    contentContainer: {
        //paddingRight: 20,
        //paddingLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 16,
        ...Platform.select({
            ios: {
              shadowColor: "rgb(50, 50, 50)",
              shadowOpacity: 0.5,
              shadowRadius: 1,
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            android: {
              elevation: 3,
            },
          })
    },
    storeInfo: {
        alignItems: 'flex-start',
        marginTop: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    info: {
        paddingBottom: 4,
        fontSize: 14,
    },
    waiting:{
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
              shadowColor: "rgb(50, 50, 50)",
              shadowOpacity: 0.5,
              shadowRadius: 1,
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            android: {
              elevation: 15,
            },
          })
    },
    waitingBtn: {
        height: 48,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00DC99',
        borderRadius: 8,
        marginTop: 20
    },
    reviewBtn: {
        height: 48,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 220
    },
    waitingfont: {
        fontSize: 24,
        color: '#fff',
    }

});