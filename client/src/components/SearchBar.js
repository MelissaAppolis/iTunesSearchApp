import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            list: props.list ? props.list : [],
            setList: props.setList
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    handleSearchInput = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    // get method to fetch api from server
    submitSearch() {
        axios
        .get(`/search/${this.state.name}/${this.state.type}`)
        .then(res => {
            this.setState({ list: res.data.results });
            this.state.setList(res.data.results);
        });
    }

    render() {
        return(
            <div className='search-bar'>
                <h1 id='heading'>iTunes search</h1>
                <div className='searchbar-container'>
                    <input className='searchbar' type='text' placeholder='Search...' name='name' onChange={this.handleSearchInput}/>
                    <br/>
                    <select className='select' name='type' value={this.state.type} onChange={this.handleSearchInput}>
                        <option className="optionSelect"> CATEGORIES</option>
                        <option className="optionSelect" value="musicTrack">Music</option>
                        <option className="optionSelect" value="musicVideo">Music Videos</option>
                        <option className="optionSelect" value="software">Apps</option>
                        <option className="optionSelect" value="ebook">EBooks</option>
                        <option className="optionSelect" value="audiobook">Audio Books</option>
                        <option className="optionSelect" value="podcast">Podcasts</option>
                        <option className="optionSelect" value="movie">Movies</option>
                        <option className="optionSelect" value="tvShow">TV Shows</option>
                        <option className="optionSelect" value="shortFilm">Short Films</option>
                    </select>
                    <Link to={`/search/${this.state.name}/${this.state.type}`}>
                        <button className='search-button' onClick={ () => this.submitSearch() }>SEARCH</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SearchBar;