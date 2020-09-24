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
          <Text style={styles.leftText}>{props.leftText || "Back"}</Text>
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
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.rightIconButton}>
          <Text style={styles.rightText}>{props.rightText || "Action"}</Text>
        </TouchableOpacity>
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
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    fontSize: 17,
    color: "#007AFF",
    paddingLeft: 5,
    alignSelf: "center"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 17,
    lineHeight: 17,
    color: "#000"
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {},
  rightText: {
    color: "#007AFF",
    fontSize: 17,
    alignSelf: "center"
  }
});

export default CupertinoHeaderWithActionButton;
