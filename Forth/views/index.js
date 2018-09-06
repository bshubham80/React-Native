import React, { Component } from "react";
import { Text, View, WebView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export class FirstScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "First",
    tabBarLabelColor: "#fff",
    tabBarIcon: () => <Icon size={24} color="white" name="tv" />
  };

  constructor(props) {
    super(props);
    this.state = { text: "ghdkjgdhghdfgdfjkgdfghkfhkjhkhj" };
  }
  render() {
    return (
      <View>
        <Text
          onPress={() => {
            this.setState({ text: "shubham" });
          }}
        >
          {" "}
          {this.state.text}{" "}
        </Text>
      </View>
    );
  }
}

export class SecondScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Second",
    tabBarLabelTintColor: "#fff",
    tabBarIcon: () => <Icon size={24} color="white" name="search" />
  };

  render() {
    return (
      <View>
        <Text> Second textInComponent </Text>
      </View>
    );
  }
}

export class ThirdScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Third",
    tabBarIcon: () => <Icon size={24} color="white" name="music-note" />
  };

  render() {
    return (
      <View>
        <Text> Third textInComponent </Text>
      </View>
    );
  }
}

export class ForthScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Forth",
    tabBarIcon: () => <Icon size={24} color="white" name="album" />
  };
  render() {
    return (
      <View>
        <Text> Forth textInComponent </Text>
      </View>
    );
  }
}

export class WebViewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params === undefined ? "RB Partners" : params.title,
      headerMode: "screen"
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        source={{
          uri:
            this.props.navigation.getParam("url", "https://www.google.com/") +
            "?source=app"
        }}
        style={{ backgroundColor: "#fff", flex: 1 }}
      />
    );
  }
}
