import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './Card';

export default class AlbumDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <Text>{ this.props.album.title }</Text>
            </Card>
        );
    }
}