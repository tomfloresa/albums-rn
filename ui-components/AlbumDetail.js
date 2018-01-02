import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        const { albumHeader, albumTitle, albumImageContainer, artistImage, albumImage } = styles;

        return(
            <Card>
                <CardSection>
                  <View style={ albumImageContainer }>
                      <Image style={ artistImage } 
                             source={{ uri: thumbnail_image }} />
                  </View>
                  <View style={ albumHeader }>
                      <Text style={ albumTitle }>{ title }</Text>
                      <Text>{ artist }</Text>
                  </View>
                </CardSection>

                <CardSection>
                    <Image style={ albumImage } 
                           source={{ uri: image }} />
                </CardSection>

                <CardSection>
                    <Button onPress={ () => Linking.openURL(url) }>
                      Buy me!
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    albumHeader: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    albumTitle: {
        fontSize: 18,
    },
    albumImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    artistImage: {
        height: 50,
        width: 50
    },
    albumImage: {
        flex: 1,
        height: 300,
        width: null
    }
});