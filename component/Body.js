import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Dimensions } from 'react-native';

export default class Body extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView>
                    <View style={styles.bigView}>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                        <View style={styles.smallView}>
                            <Image style={styles.myImage} source={require('./../assets/wall/5.jpg')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigView: {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    smallView:{
        margin:1,
        height:100,
        width:(Dimensions.get('window').width/2)-2,
    },
    myImage:{
        flex:1,
        width:null,
        alignSelf:'stretch',
    }
});
