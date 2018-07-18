import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, ToolbarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  
  render() {
    return (
        <View style={styles.container}>
            <ToolbarAndroid
                style={styles.toolbar}
                title="AwesomeApp"
                navIcon="require('ic_dehaze_white_24dp.png')"
                titleColor='#fff'
                subtitle="This is it."
                subtitleColor="#FFFFFF"
                actions={[
                    {
                        title: 'Settings',
                        icon: require('./ic_alert_white.png'),
                        show: 'always'
                    },
                    {
                        title: 'Call',
                        icon: require('./ic_call_white.png'),
                        show: 'always'
                    }
                ]} />
           
            <View style={styles.body}>
                <Text>The Text</Text>
            </View>

            <View style={styles.bottomNav}>
                <View style={styles.botttomItem}>
                    <Icon name="help" style={styles.icons} />
                    <Text style={styles.BottomText}>Home</Text>
                </View>
                <View style={styles.botttomItem}>
                    <Icon name="home" style={styles.icons} />
                    <Text style={styles.BottomText}>Home</Text>
                </View>
                <View style={styles.botttomItem}>
                    <Icon name="home" style={styles.icons} />
                    <Text style={styles.BottomText}>Home</Text>
                </View>
                <View style={styles.botttomItem}>
                    <Icon name="home" style={styles.icons} />
                    <Text style={styles.BottomText}>Home</Text>
                </View>
                <View style={styles.botttomItem}>
                    <Icon name="home" style={styles.icons} />
                    <Text style={styles.BottomText}>Home</Text>
                </View>
            </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    toolbar: { 
        flexDirection: 'row',
        backgroundColor: '#0089ef',
        height: 56,
        elevation: 8
    },
    header: {
        height: 55,
        backgroundColor: "#0089ef",
        elevation: 8
    },
    body: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
    bottomNav: {
        height: 56,
        backgroundColor: "#FFFFFF",
        elevation: 4,        
        flexDirection: "row",
        justifyContent: "space-around",
    },
    botttomItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icons: {
        fontSize: 30,
        color: "#bbb"
    },
    BottomText: {
        fontSize: 12
    }
});