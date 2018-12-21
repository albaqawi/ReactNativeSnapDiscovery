// @flow
import * as React from "react";
import {
  View, StyleSheet, Image, Dimensions,
  TouchableWithoutFeedback
} from "react-native";

import type Story from "./StoryModel";

const width = Dimensions.get("window").width / 2 - 16 * 2;
const height = width * 1.77;

type StoryThumbnailProps = {
  story: Story,
  onPress: () => mixed,
};

export default class StoryThumbnail extends React.PureComponent<StoryThumbnailProps> {
  render() {
    const { story, onPress } = this.props;
    return (
      <TouchableWithoutFeedback {...{ onPress }}>
        <View style={styles.container}>
          <Image source={story.source} style={styles.image} />
        </View>
      </TouchableWithoutFeedback>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    marginTop: 16,
    borderRadius: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 5,
  },
});
