import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.headerbg} source={require('./../assets/wall/1.jpg')}
            >
                <View style={styles.headercontainer}>
                    <View style={styles.profilepiccontainer}>
                        <Image style={styles.mypic} source={require('./../assets/wall/1.jpg')}/>
                    </View>
                    <Text style={styles.name}>
                        Manoj Madushanka
                    </Text>
                    <Text style={styles.liner}>
                        Freelancer
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    headerbg: {
        flex: 1,
        width:null,
        alignSelf:'stretch',
    },
    headercontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        backgroundColor:'rgba(0,0,0,0.3)',
    },
    profilepiccontainer:{
        height:180,
        width: 180,
    },
    mypic:{
        flex: 1,
        width:null,
        alignSelf:'stretch',
        borderRadius:90,
        borderWidth:3,
        borderColor:'#fff',
    },
    name:{
        marginTop:18,
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
    },
    liner:{
        color:'#fff',
        fontSize: 15,
    }
});
