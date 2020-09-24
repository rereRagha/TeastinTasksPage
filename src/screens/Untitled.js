import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialChipWithCloseButton from "../components/MaterialChipWithCloseButton";
import Icon from "react-native-vector-icons/Entypo";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";

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
          title="Tasks"
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
            style={styles.cardTask1}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask2}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask3}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask4}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask5}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask6}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask7}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask8}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask9}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask10}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask12}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask11}
          ></MaterialCardWithoutImage>
          <MaterialCardWithoutImage
            style={styles.cardTask13}
          ></MaterialCardWithoutImage>
          <TextInput
            placeholder="MORE"
            placeholderTextColor="rgba(0,161,169,1)"
            selectionColor="rgba(74,74,74,1)"
            style={styles.btnMoreTask}
          ></TextInput>
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
    width: 375,
    height: 100,
    marginTop: 32
  },
  headerBar: {
    height: 44,
    backgroundColor: "rgba(15,15, 15,0)",
    overflow: "visible"
  },
  searchBar: {
    height: 56,
    width: 375,
    backgroundColor: "rgba(15,15, 15,0)",
    borderWidth: 0,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
      
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0
  },
  filters: {
    width: 375,
    height: 69,
    marginTop: 4
  },
  rect: {
    width: 375,
    height: 69,
    backgroundColor: "rgba(230,230, 230,0)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flexDirection: "row"
  },
  filter: {
    
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
    width: 119,
    marginLeft: 10
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginLeft: 12,
    marginTop: 3
  },
  filterRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 21
  },
  taskArea: {
    width: 375,
    height: 598,
    marginTop: 9
  },
  taskArea_contentContainerStyle: {
    height: 1725,
    width: 375
  },
  cardTask1: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask2: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask3: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask4: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask5: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask6: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask7: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask8: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask9: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask10: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask12: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask11: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  cardTask13: {
    height: 113,
    width: 327,
    marginTop: 17,
    marginLeft: 24,
    alignSelf: "center"
  },
  btnMoreTask: {
    fontFamily: "roboto-regular",
    color: "rgba(0,161,169,1)",
    width: 53,
    height: 17,
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginLeft: 161
  }
});

export default Untitled;
