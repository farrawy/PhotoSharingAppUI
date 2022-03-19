import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import theme from "../../assets/themes";

const SharedAlbumTitleCard = ({ album }) => {
  return (
    <ImageBackground source={album.background} style={styles.imageBackground}>
      <View style={styles.imageContentContainer}>
        <View>
          <Text style={styles.imageTitle}>{album.title}</Text>
          <Text style={styles.imageSubtitle}>{`Created by ${album.user}`}</Text>
        </View>

        <View>
          <Text style={styles.imageNumber}>105 photos</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SharedAlbumTitleCard;

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: theme.imageHeight.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: "flex-end",
  },
  imageContentContainer: {
      flexDirection: 'row',
      alignItems: "flex-end",
      justifyContent: "space-between",
  },
  imageTitle: {
      ...theme.textVariants.h1,
      color: theme.colors.white
  },
  imageSubtitle: {
      ...theme.textVariants.body2,
      color: theme.colors.white,
  },
  imageNumber: {
      ...theme.textVariants.body3,
      color: theme.colors.gray,
  },
});
