import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from'@expo/vector-icons';
import { supportsOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation'


export default function Weather({temp,title}) {
    Weather={
        Thunderstorm: {
            icon: 'weather-lightning-rainy',
            backcolor: ['#e9d362', '#333333'],
        },
        Drizzle: {
            icon: 'weather-hail',
            backcolor: ['#005AA7', '#FFFDE4'],
        },
        Rain: {
            icon: 'weather-pouring',
            backcolor: ['#3a7bd5', '#3a6073'],
        },
        Snow: {
            icon: 'weather- snowy',
            backcolor: ['#FFEFBA', '#FFFFFF'],
        },
        Mist: {
            icon: 'weather-fog',
            backcolor: ['#1c92d2', '#f2fcfe'],
        },
        Clear: {
            icon: 'weather-sunny',
            backcolor: ['#CAC531', '#F3F9A7'],
        },
        Clouds: {
            icon: 'weather-cloudy',
            backcolor: ['#bdc3c7', '#2c3e50'],
        },
        
    }
    return (
        <LinearGradient
            colors={this.weather[title].backcolor}
            style={styles.weatherback}>
                <View style={styles.iconarea}>
                    <Text>
                        <MaterialCommunityIcons name={this.weather[title].icon} size={100} />
                    </Text>
                </View>
                <View style={styles.textarea}>
                    <Text>
                        {title}
                    </Text>
                    <Text>
                        {temp}℃
                    </Text>
                </View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({

    weatherback:{
        flex: 1,
    },
    iconarea:{
        flex: 2,

    },
    textarea:{
        flex: 1,
    },
});
