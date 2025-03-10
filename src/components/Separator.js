import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import theme from "../../assets/themes";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    height: 1,
    backgroundColor: theme.colors.gray,
  },
});

export default Separator;