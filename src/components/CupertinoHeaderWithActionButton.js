import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithActionButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.leftWrapper,
          {
            backgroundColor: props.leftWrapper || undefined
          }
        ]}
      >
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          style={styles.leftIconButton}
        >
          <Icon
            name={props.leftIcon || "ios-arrow-back"}
            style={styles.leftIcon}
          ></Icon>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.textWrapper,
          {
            backgroundColor: props.textWrapper || undefined
          }
        ]}
      >
        <Text numberOfLines={1} style={styles.title}>
          {props.title || "Title"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#000",
    fontSize: 32
  },
  textWrapper: {
    flex: 1,
    position: "absolute",
    top: '30%',
    right: '-15%',
    justifyContent: "center"
  },
  title: {
    fontSize: 17,
    lineHeight: 17,
    color: "#000",
    height: 30,
    width: '100%',
    alignSelf: "center"
  },
});

export default CupertinoHeaderWithActionButton;
