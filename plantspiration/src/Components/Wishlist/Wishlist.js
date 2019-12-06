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
        axios.get('/api/plants/wishlist')
        .then(results => {
            this.setState({wishlistPlants: results.data});
        });
    }
    componentDidMount() {
        this.getWishes()
    }

    render() {
        return(
            <div className='wishlistBody'>
                
                 <Link to='/plant/step1'>
                    <button className='addBtn'>
                        Add New Wish
                    </button>
                
                </Link>
                <div className='wishlistCont'>
                {this.state.wishlistPlants.map(p => <PlantDisplay key={p.plant_id} plant={p} reloadList={this.getWishes} />
                )} </div>
               
                
            </div>
        )
    }
}