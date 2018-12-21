// @flow
import * as React from "react";
import {
    View,
    StyleSheet,
    Image
} from "react-native";
import type {
    Story
} from "./StoryModel";

type StoryModalProps = {
    story: Story,
}

export default class StoryModal extends React.PureComponent <StoryModalProps> {

    render() {
    const {story} = this.props
    console.log("Inside StoryModal the passed story is:" + story);
        
        return ( <
            View style = {
                styles.container
            } >
            <
            Image source = {
                story.source
            }
            style = {
                styles.image
            }
            /> <
            /View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: null,
        height: null,
        borderRadius: 5,
    },
})