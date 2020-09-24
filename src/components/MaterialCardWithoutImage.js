import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.lblRequestNumberRow}>
        <Text style={styles.lblRequestNumber}>#N-20156468</Text>
        <Text style={styles.lblServiceName}>ServiceName</Text>
        <Icon
          name="checkbox-marked-circle-outline"
          style={styles.isRead}
        ></Icon>
      </View>
      <Text style={styles.lblDescriptionTask}>
        DescriptionTask DescriptionTask DescriptionTask DescriptionTask
        DescriptionTask
      </Text>
      <View style={styles.btnApproveRow}>
        <TextInput
          placeholder="Approve"
          placeholderTextColor="rgba(0,161,169,1)"
          returnKeyType="send"
          style={styles.btnApprove}
        ></TextInput>
        <TextInput
          placeholder="Reject"
          placeholderTextColor="rgba(219,68,86,1)"
          returnKeyType="send"
          style={styles.btnReject}
        ></TextInput>
        <Text style={styles.lblDateTask}>24-09-2020</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  lblRequestNumber: {
    fontFamily: "roboto-regular",
    color: "rgba(0,161,169,1)",
    marginTop: 3
  },
  lblServiceName: {
    fontFamily: "roboto-regular",
    color: "rgba(88,88,88,1)",
    marginLeft: 71,
    marginTop: 3
  },
  isRead: {
    color: "rgba(0,161,169,1)",
    fontSize: 20,
    marginLeft: '22%'
  },
  lblRequestNumberRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 15,
    marginRight: 48
  },
  lblDescriptionTask: {
    fontFamily: "roboto-regular",
    color: "rgba(169,169,169,1)",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 15
  },
  btnApprove: {
    fontFamily: "roboto-regular",
    color: "rgba(0,161,169,1)",
    width: 45,
    height: 17,
    fontSize: 12
  },
  btnReject: {
    fontFamily: "roboto-regular",
    color: "rgba(0,161,169,1)",
    width: 45,
    height: 17,
    fontSize: 12,
    marginLeft: 14
  },
  lblDateTask: {
    fontFamily: "roboto-regular",
    color: "rgba(175,175,175,1)",
    fontSize: 9,
    marginLeft: '60%',
    marginTop: 3
  },
  btnApproveRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 15,
    marginRight: 48
  }
});

export default MaterialCardWithoutImage;
