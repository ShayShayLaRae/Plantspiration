import React, {Component} from 'react';
import './Wishlist.css';
import axios from 'axios';
import PlantDisplay from '../PlantDisplay/PlantDisplay';



export default class Wishlist extends Component{
    // constructor() {
    //     super();
    //     this.state= {wishlistPlants: []}
    // }

    // allPlants=() => {
    //     axios.get('http://localhost:6727/api/plant-hoard')
    //     .then(results => {
    //         this.setState({wishlistPlants: results.data});
    //     });
    // }
    // componentDidMount() {
    //     this.wishlistPlants()
    // }

    render() {
        return(
            <div>
                Wishlist
                {/* {this.state.wishlistPlants.map(p => <PlantDisplay key={p.plant_id} getWishlist={this.getWishes} />
                )}
                <Link to='edit-plant/:plant_id'>
                    <button>
                        Add New Wish
                    </button>
                </Link> */}
                
            </div>
        )
    }
}