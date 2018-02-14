/* eslint-disable no-undef */
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <MapView style={styles.map}
                         initialRegion={{
                             latitude: 37.78825,
                             longitude: -122.4324,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                         >

                         <MapView.Marker
                         coordinate={{
                             latitude: 37.78825,
                             longitude: -122.4324,
                         }}
                         title={'My Location! '}
                         description={'Hey here you are!!'}
                         />
                </MapView>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    map:{
        position:'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

