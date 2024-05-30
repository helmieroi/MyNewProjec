import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconFeather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
 import CustomAccordionItem from "./CustomAccordion";
const HomeChats = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image
            source={require("../assets/videProfile.jpeg")}
            style={styles.image}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.label}>{"Message"}</Text>
        </View>
        <View
          style={{
            width: "auto",
            height: 35,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={() => console.log("search")}
          >
            <Icon
              name={"search1"}
              size={20}
              color="#4F5E7B"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.header}>
        <View
          style={
            {
              //  margin: 5,
              //  width: "calc(33% - 10px)",
            }
          }
        >
         <TouchableOpacity style={styles.buttonActive} onPress={() => null}>
          <View style={styles.textButton}><Text>{"All chats"}</Text></View>
          </TouchableOpacity> 
        </View>
        <View
          style={{
            margin: 5,
            width: "calc(33% - 10px)",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text style={styles.textButton}>{"Channels"}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 5,
            width: "calc(33% - 10px)",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text style={styles.textButton}>{"Direct Messages"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <CustomAccordionItem
          title="Starred"
          data={[
            {
              label: "Ronald Mccoy",
              icon: (
                <IconFeather
                  name={"hash"}
                  size={20}
                  color="#FFFFFF"
                  style={styles.iconHash}
                />
              ),
              action: () => {
                navigation.navigate("UserChat");
              },
            },
          ]}
        />
        <CustomAccordionItem
          title="Channels"
          data={[]}
          actionButton={() => null}
        />
        <CustomAccordionItem title="Direct Messages" data={[]} />
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  title: {
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    width: "calc(100% - 80px)",
  },
  label: {
    color: "#6A51A3",
    fontSize: 22,
  },
  button: {
    display: "flex",
    paddingLeft: 15,
    paddingRight: 15,
    padding: 10,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
  },
  textButton: {
    color: "#5E5873",
    fontWeight: "500",
    fontSize: 12,
  },
  buttonActive: {
    display: "flex",
    paddingLeft: 15,
    paddingRight: 15,
    padding: 10,
    backgroundColor: "#6E4998",
    borderRadius: 10,
  },
  textButtonActive: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 12,
  },
  iconHash: {
    width: 35,
    height: 35,
    fontSize: 22,
    textAlign: "center",
    alignContent: "center",
    fontWeight: "700",
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
  },
});

export default HomeChats;
