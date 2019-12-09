import React, {Component} from 'react';
import './Wishlist.css';
import axios from 'axios';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import {Link} from 'react-router-dom';
import store from '../../ducks/store';



export default class Wishlist extends Component{
    constructor() {
        super();
        this.state= {
            wishlistPlants: []
        }
    }

    getWishes=() => {
        let {current_user} = store.getState()
        
        axios.get(`/api/plants/wishlist/${current_user.user_id}`)
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
                {this.state.wishlistPlants.map(p => <PlantDisplay key={p.plant_id + p.common_name} plant={p} reloadList={this.getWishes} />
                )} </div>
               
                
            </div>
        )
    }
}