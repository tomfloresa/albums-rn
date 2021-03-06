import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

export default class AlbumsList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
          <AlbumDetail key={ album.title } album={ album } />
        );
    }

    render() {
        return(
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
    }
})