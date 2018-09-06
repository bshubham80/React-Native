import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ToolbarAndroid
} from "react-native";
import {
  FirstScreen,
  SecondScreen,
  ThirdScreen,
  ForthScreen,
  WebViewScreen
} from "./views";
import { NavigationActions } from "react-navigation";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Toolbar } from "react-native-material-ui";

const BottomView = createBottomTabNavigator(
  {
    Album: { screen: FirstScreen },
    Library: { screen: SecondScreen },
    History: { screen: ThirdScreen },
    Cart: { screen: ForthScreen },
    Cart2: { screen: ForthScreen }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#fc8704",
        elevation: 3,
        borderTopWidth: 1,
        borderTopColor: "#ece"
      },
      activeTintColor: "#fff",
      inactiveTintColor: "#fff"
    }
  }
);

export class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "ghdkjgdhghdfgdfjkgdfghkfhkjhkhj" };
  }
  navigate = () => {
    //console.warn(this.props);
    this.props.navigation.navigate("WebView", {
      title: "Hello",
      url: "https://www.renewbuy.com"
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Toolbar
          leftElement="menu"
          style={{
            container: {
              backgroundColor: "#fc8704"
            }
          }}
          centerElement={this.state.active}
          onLeftElementPress={() => this.navigate()}
          rightElement={["search", "call", "notifications"]}
        /> */}

        <BottomView style={{ flex: 1 }} />
      </View>
    );
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: DashBoard,
      navigationOptions: ({ navigation, navigationOptions }) => ({
        title: "Hi Shubham",
        headerLeft: (
          <View>
            <Icon
              style={{
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontWeight: navigationOptions.headerTitleStyle.fontWeight
              }}
              size={24}
              color={navigationOptions.headerTintColor}
              name="dehaze"
              onPress={() => {
                console.log(navigationOptions);
                navigation.goBack();
              }}
            />
          </View>
        ),
        headerRight: (
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <FontAwesome
              style={{
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontWeight: navigationOptions.headerTitleStyle.fontWeight
              }}
              size={24}
              color={navigationOptions.headerTintColor}
              name="rupee"
              onPress={() => {
                navigation.goBack();
              }}
            />

            <Icon
              style={{
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontWeight: navigationOptions.headerTitleStyle.fontWeight
              }}
              size={24}
              color={navigationOptions.headerTintColor}
              name="notifications"
              onPress={() => {
                navigation.goBack();
              }}
            />
            
            <Icon
              style={{
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontWeight: navigationOptions.headerTitleStyle.fontWeight
              }}
              size={24}
              color={navigationOptions.headerTintColor}
              name="phone"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        )
      })
      //   navigationOptions: {
      //     header: null
      //   }
    },
    WebView: {
      screen: WebViewScreen,
      navigationOptions: ({ navigation, navigationOptions }) => ({
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <Text
              onPress={() => {
                console.log(navigationOptions);

                // const backAction = NavigationActions.back({
                //   key: null
                // });
                // navigation.dispatch(backAction);
                navigation.goBack();
              }}
              style={{
                color: navigationOptions.headerTintColor,
                fontWeight: navigationOptions.headerTitleStyle.fontWeight
              }}
            >
              Close
            </Text>
          </View>
        )
      })
    }
  },
  {
    navigationOptions: {
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#fc8704"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
export default class App extends React.Component {
  render() {
    return (
      <MainStack style={{ backgroundColor: "#fff" }} />
      //     <View style={styles.container}>
      //         <ToolbarAndroid
      //             style={styles.toolbar}
      //             title="AwesomeApp"
      //             titleColor='#fff'
      //             subtitle="This is it."
      //             subtitleColor="#FFFFFF"
      //             actions={[
      //                 {
      //                     title: 'Settings',
      //                     icon: require('./ic_alert_white.png'),
      //                     show: 'always'
      //                 },
      //                 {
      //                     title: 'Call',
      //                     icon: require('./ic_call_white.png'),
      //                     show: 'always'
      //                 }
      //             ]} />

      //         <View style={styles.body}>
      //             <Text>The Text</Text>
      //         </View>

      //         <View style={styles.bottomNav}>
      //             <View style={styles.botttomItem}>
      //                 <Icon name="help" style={styles.icons} />
      //                 <Text style={styles.BottomText}>Home</Text>
      //             </View>
      //             <View style={styles.botttomItem}>
      //                 <Icon name="home" style={styles.icons} />
      //                 <Text style={styles.BottomText}>Home</Text>
      //             </View>
      //             <View style={styles.botttomItem}>
      //                 <Icon name="home" style={styles.icons} />
      //                 <Text style={styles.BottomText}>Home</Text>
      //             </View>
      //             <View style={styles.botttomItem}>
      //                 <Icon name="home" style={styles.icons} />
      //                 <Text style={styles.BottomText}>Home</Text>
      //             </View>
      //             <View style={styles.botttomItem}>
      //                 <Icon name="home" style={styles.icons} />
      //                 <Text style={styles.BottomText}>Home</Text>
      //             </View>
      //         </View>
      //   </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  toolbar: {
    flexDirection: "row",
    backgroundColor: "#0089ef",
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
    backgroundColor: "#F6F6F6"
  },
  bottomNav: {
    height: 56,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  botttomItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  icons: {
    fontSize: 30,
    color: "#bbb"
  },
  BottomText: {
    fontSize: 12
  }
});
