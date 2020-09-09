import React, { Component } from 'react';
import Album from './Album';
import ScrollUpButton from 'react-scroll-up-button';

class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: props.list? props.list : []
        }
    }

    // to receive props form parent component
    componentWillReceiveProps(nextProps) {
        this.setState({ list: nextProps.list? nextProps.list : [] });  
    }

    render() {
        const searchResults = this.state.list.map(result => {
            return(
                <Album key={result.trackId}
                artworkUrl100 = {result.artworkUrl100}
                collectionName = {result.collectionName}
                kind = {result.kind}
                trackName = {result.trackName}
                artistName = {result.artistName}
                addFavourite = {this.props.addFavourite} />
            );
        });

        return(
            <div className="container">
                <div className="results-container">
                    {searchResults}
                </div>
                <ScrollUpButton />
            </div>
        );
    }
}

export default AlbumList;