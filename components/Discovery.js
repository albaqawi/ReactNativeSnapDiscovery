// @flow
import * as React from "react";
import {
  View, StyleSheet, ScrollView, SafeAreaView,
} from "react-native";

import StoryThumbnail from "./StoryThumbnail";
import StoryModel from "./StoryModel";
import type { Story } from "./StoryModel";

// this is part of ORG code
type DiscoveryProps = {
  stories: Story[];
};

//We use this to pass pressed story down to Thumbnail
type DiscoveryState = {
  selectedStory: Story
}

export default class Discovery extends React.PureComponent<DiscoveryProps, DiscoveryState> {
  //method to set the Selected story in the state
  selectedStory = (selectedStory: Story) => {
    this.setState({selectedStory});
    console.log(this.state);
    
  }

  render() {
    // just to read all stories JSON
    //console.log(this.props);
    const { stories } = this.props;
    //bring selected story from state, set on a press action

    //throwing error now
    const { selectedStory } = this.state
    return (
      <View style={stories.container}>
        <ScrollView>
          <SafeAreaView
            style={styles.content}
            contentInsetAdjustmentBehavior="automatic"
          >
            {stories.map(story => (<StoryThumbnail 
            key={story.id} 
            onPress={() => this.selectedStory(story)}
            {...{ story }} />))}
          </SafeAreaView>
        </ScrollView>
        {
          selectedStory && (
            <StoryModel story={this.selectedStory} />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
