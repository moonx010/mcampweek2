import React from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';

export default function UpdateTime(time) {
        const now = new Date();
        console.log("함수들어옴:::::::::::"+time)
        const TimeDiff = Math.floor((now.getTime() - time) / 1000 / 60);
        const TimeDiffHour = Math.floor(TimeDiff / 60);
        const TimeDiffDay = Math.floor(TimeDiff / 60 / 24);

        if (TimeDiff < 1) {
            return `방금 전`
        } else if (TimeDiff < 60) {
            return `${TimeDiff}분 전`
        } else if (TimeDiffHour < 24) {
            return `${TimeDiffHour}시간 전`
        } else if (TimeDiffDay < 365) {
            return `${TimeDiffDay}일 전`
        }
        return (   
            `${Math.floor(TimeDiffDay / 365)}년 전`
        )
}



