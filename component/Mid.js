import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Mid extends React.Component {
    render() {
        return (
            <View style={styles.mid}>
                <View style={[styles.outerView,styles.leftbar]}>
                    <Text style={styles.textone}>75 +</Text>
                    <Text style={styles.texttwo}>Images</Text>
                </View>
                <View style={styles.outerView}>
                    <Text style={styles.textone}>100K +</Text>
                    <Text style={styles.texttwo}>Subscribers</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mid: {
        flexDirection:'row',
        backgroundColor:'#CF000F',
        borderTopWidth:2,
        borderTopColor:'#fff'
    },
    outerView:{
        flex:1,
        alignItems:'center',
        padding:20,
    },
    textone:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    texttwo:{
        color:'#fff',
        fontSize: 18,
    },
    leftbar:{
        borderRightWidth:1,
        borderRightColor:'#fff',
    },
});
