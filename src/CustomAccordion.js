import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconIonicons from "react-native-vector-icons/Ionicons";

const CustomAccordionItem = ({ title, children, actionButton, data }) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    if (expanded) {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      Animated.timing(animatedHeight, {
        toValue: (data?.length || 0) * 55,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          toggleExpand();
        }}
        style={styles.header}
      >
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.headerText}>{title}</Text>
          <View style={styles.actionButton}>
            {actionButton && (
              <TouchableOpacity onPress={actionButton}>
                <IconIonicons
                  name={"add"}
                  size={20}
                  color="#4F5E7B"
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
            <Icon
              name={expanded ? "chevron-down" : "chevron-up"}
              size={20}
              color="#4F5E7B"
              style={styles.icon}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
        <View style={styles.content}>
          {data
            ? data.map((item, index) => (
                <TouchableOpacity
                  key={index} // Add a unique key for each item
                  onPress={() => {
                    item.action && item.action(); // Call action directly here
                  }}
                >
                  <View style={styles.contentItem}>
                    <Text>{item.icon}</Text>
                    <Text style={styles.label}>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              ))
            : children}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomColor: "#ccc",
    fontWeight: "600",
    fontSize: 18, // Corrected typo here
    alignItems: "flex-end", // or justifyContent: "flex-end" based on layout
    color: "#5E5873",
  },
  headerText: {
    fontSize: 16,
    color: "#5E5873",
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 14,
    color: "#1B1A57",
  },
  actionButton: {
    flexDirection: "row",
  },
  icon: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});
export default CustomAccordionItem;
