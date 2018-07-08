import React, {Component} from "react";

import {StyleSheet, View, Text, Button, Image} from "react-native";

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: "Homely",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "white"
    }
  };
  render() {
    return (<View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>Chicken Biryani</Text>
          <Text style={styles.itemPrice}>Rs 250</Text>
        </View>
        <View style={styles.addButtonContainer}>
          <Button style={styles.addButton} title="Add" color="#841584"/>
        </View>

      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  itemContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20
  },
  itemDetailsContainer: {
    flex: 2,
    flexDirection: "column"
  },
  itemName: {
    fontSize: 30,
    fontWeight: "bold"
  },
  itemPrice: {
    fontSize: 20
  },
  addButtonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-end'
  }
});
