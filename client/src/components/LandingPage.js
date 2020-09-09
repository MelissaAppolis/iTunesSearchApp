import React, { Component } from 'react';
import SearchBar from './SearchBar';
import '../App.css';

class LandingPage extends Component {

    constructor(props){

        super(props);

        this.state = {
            list: props.list,
            setList: props.setList
        };

    }
    // pass list and setList to SearchBar component
    render() {
        return(
            <div className="landing-page">
                <SearchBar list={this.state.list} setList={this.state.setList}/>
            </div>
        );
    }
}

export default LandingPage;