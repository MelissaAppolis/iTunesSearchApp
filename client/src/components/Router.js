import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import Components to be rendered
import LandingPage from './LandingPage';
import AlbumList from './results/AlbumList';
import FavouriteList from './FavouriteList';
import NavBar from './NavBar';

class Router extends Component {
    constructor(props){ // setting state to pass down list which is the results and favourites
        super(props);
        this.state = {
            favourites: [],
            list: []
        }
        this.setList = this.setList.bind(this);
    }

    setList(myList){
        this.setState({list: myList});      
    }

    addFavourite = (fav) => {
        this.setState({
            favourites: [...this.state.favourites, fav]
        });
    }

    // delete an item from the favourites page
    delete = (index) => {
        // copy current array state
        var array = [...this.state.favourites];
        array.splice(index, 1);
        // set state array to the new state
        this.setState({favourites: array});
    }

    render() {
        return(
            <BrowserRouter>
                <NavBar />
                <div>
                    <Route exact path='/'>{/* Route to home page, passing list and setList */}
                        <LandingPage list={this.state.list} setList={this.setList}/>
                    </Route>
                    {/* Route to results page */}
                    <Route exact path='/search/:name/:type' render={() =>{ 
                        return <AlbumList 
                            addFavourite = {this.addFavourite} 
                            list = {this.state.list}
                        />
                    }
                    }
                    />
                    {/* Route to favourites page */}
                    <Route exact path='/favourites' render={() =>
                        <FavouriteList
                        favourites={this.state.favourites}
                        delete={this.delete} 
                        />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;