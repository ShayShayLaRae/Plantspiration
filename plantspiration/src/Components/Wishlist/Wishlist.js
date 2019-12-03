import React, {Component} from 'react';
import './Wishlist.css';
import axios from 'axios';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import {Link} from 'react-router-dom';



export default class Wishlist extends Component{
    constructor() {
        super();
        this.state= {wishlistPlants: []}
    }

    getWishes=() => {
        axios.get('http://localhost:6727/api/plants/wishlist')
        .then(results => {
            this.setState({wishlistPlants: results.data});
        });
    }
    componentDidMount() {
        this.getWishes()
    }

    render() {
        return(
            <div className='WishlistBody'>
                
                 <Link to='/plant/step1'>
                    <button className='addBtn'>
                        Add New Wish
                    </button>
                </Link>
                {this.state.wishlistPlants.map(p => <PlantDisplay key={p.plant_id} plant={p} getWishlist={this.getWishes} />
                )}
               
                
            </div>
        )
    }
}