import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class ToolBar extends Component {

    style = StyleSheet.create();

    render() {
        return (
            <View>
                <Text>{this.props.heading}</Text>  
                <Text>{this.props.sub_heading}</Text>  
                <Text>{this.props.description}</Text>  
            </View>            
        );
    }
}