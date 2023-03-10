import React from "react";
import { View, ActivityIndicator, Modal, Dimensions } from "react-native";

const Screen_Width = Dimensions.get("screen").width;

const Spinner = ({ size, visible, color }) => {
  return (
    <Modal
      animationType={"none"}
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.spinnerStyle}>
        <View style={{ flex: 0.3 }} />

        <View
          style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
        ></View>

        <View style={{ flex: 0.01, alignItems: "center" }}>
          <ActivityIndicator
            visible={true}
            animating={true}
            color={color}
            size={size || "large"}
            style={[styles.activityIndicator, { transform: [{ scale: 1.7 }] }]}
          />
        </View>
        <View
          style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
        ></View>
        <View style={{ flex: 0.3 }} />
      </View>
    </Modal>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
};
export { Spinner };
