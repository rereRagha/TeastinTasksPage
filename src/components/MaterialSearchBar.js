import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.rect1,
          {
            backgroundColor: props.rect1 || "#FFFFFF"
          }
        ]}
      >
        <View style={styles.leftIconButtonRow}>
          <TouchableOpacity style={styles.leftIconButton}>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={styles.leftIcon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
        </View>
        <View style={styles.leftIconButtonRowFiller}></View>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          style={styles.rightIconButton}
        >
          <MaterialCommunityIconsIcon
            name="close"
            style={styles.rightIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  rect1: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftIconButton: {
    paddingTop: 11,
    marginTop: 1
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 257,
    lineHeight: 16,
    marginLeft: 45
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: 2,
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 0,
    alignItems: "center",
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  }
});

export default MaterialSearchBar;
