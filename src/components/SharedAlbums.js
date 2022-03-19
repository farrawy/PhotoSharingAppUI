import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import theme from "../../assets/themes";
import Avatars from "./Avatars";
import SharedAlbumTitleCard from "./SharedAlbumTitleCard";
import ImageGallery from "./ImageGallery";
import backgroundImages from "../../assets/data/backgroundImages";

const SharedAlbums = ({ route }) => {
  const { album } = route.params;
  console.log(album);
  return (
    <ScrollView>
      <SharedAlbumTitleCard album={album} />

      <View style={styles.avatarContainer}>
        <Avatars avatars={album.avatars} />
        <Text
          style={styles.avatarContainerText}
        >{`${album.avatars.length} people`}</Text>
      </View>

      <ImageGallery images={backgroundImages} />
    </ScrollView>
  );
};

export default SharedAlbums;

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.l,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.m,
  },
  avatarContainerText: {
    ...theme.textVariants.body3,
    color: theme.colors.black,
    opacity: 0.3,
  },
});
