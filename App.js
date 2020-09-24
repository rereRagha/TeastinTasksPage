import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import CupertinoHeaderWithActionButton from "./src/components/CupertinoHeaderWithActionButton";
import MaterialSearchBar from "./src/components/MaterialSearchBar";
import MaterialChipWithCloseButton from "./src/components/MaterialChipWithCloseButton";
import Icon from "react-native-vector-icons/Entypo";
import MaterialCardWithoutImage from "./src/components/MaterialCardWithoutImage";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CupertinoHeaderWithActionButton
          leftIconName="ios-arrow-back"
          rightText="Action"
          textWrapper="rgba(255,255,255,1)"
          leftWrapper="rgba(255,255,255,1)"
          leftIconButton="Go Back"
          leftIcon="ios-arrow-round-back"
          leftText=" "
          rightText=" "
          title="Tasks jhdsgiufgujoidskj iohiufhgio"
          style={styles.headerBar}
        ></CupertinoHeaderWithActionButton>
        <MaterialSearchBar
          rect1="#FFFFFF"
          rightIconButton="Go Back"
          rect1="rgba(255,255,255,1)"
          style={styles.searchBar}
        ></MaterialSearchBar>
      </View>
      <View style={styles.filters}>
        <View style={styles.rect}>
          <View style={styles.filterRow}>
            <Text style={styles.filter}>Filter</Text>
            <MaterialChipWithCloseButton
              style={styles.materialChipWithCloseButton1}
            ></MaterialChipWithCloseButton>
            <MaterialChipWithCloseButton
              style={styles.materialChipWithCloseButton}
            ></MaterialChipWithCloseButton>
            <Icon name="circle-with-plus" style={styles.icon}></Icon>
          </View>
        </View>
      </View>
      <View style={styles.taskArea}>
        <ScrollView
          contentContainerStyle={styles.taskArea_contentContainerStyle}
        >
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask}
          ></MaterialCardWithoutImage>
          <View style={styles.TextMoreView}>
          <TextInput
            placeholder="MORE"
            placeholderTextColor="rgba(0,161,169,1)"
            selectionColor="rgba(74,74,74,1)"
            style={styles.btnMoreTask}
          ></TextInput>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    marginTop: 32
  },
  headerBar: {
    height: 44,
    backgroundColor: "rgba(15,15, 15,0)",
    overflow: "visible",
    width: 344
  },
  searchBar: {
    height: 56,
    backgroundColor: "rgba(230, 230, 230,0)"
  },
  filters: {
    height: 69
  },
  rect: {
    height: 69,
    backgroundColor: "rgba(230,230, 230,0)",
    flexDirection: "row"
  },
  filter: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
  },
  materialChipWithCloseButton1: {
    height: 27,
    width: 120,
    marginLeft: 23
  },
  materialChipWithCloseButton: {
    height: 27,
    width: 121,
    marginLeft: 10
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 50,
    marginTop: 3
  },
  filterRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 20,
    marginTop: 21
  },
  taskArea: {
    height: '100%',
    marginTop: 13,
    alignItems: "center",
    justifyContent: 'center'
  },
  taskArea_contentContainerStyle: {
    height: 1950
  },
  cardTask: {
    height: 113,
    width: '85%',
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: '5%',
    marginRight: '5%',
  },
  TextMoreView: {
    marginTop: 20,
    width: '100%',
    alignItems: "center",
    justifyContent: 'center'
  },
  btnMoreTask: {
    fontFamily: "roboto-regular",
    color: "rgba(0,161,169,1)",
    width: '100%',
    height: 17,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Untitled;
