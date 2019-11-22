import React, { Component } from 'react';
import './PlantDisplay.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class PlantDisplay extends Component {

    onClick(plant_id) {
        axios.delete(`http://localhost:6727/api/plant/${plant_id}`) 
        .then(() => {
            this.props.getAllPlants()
        })
    }
    render() {
        const {plant, getAllPlants} = this.props;
        const {plant_id, img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired} = plant;
        return (
            <div>

                <Link to='/edit-plant/step1'>
                    <button>
                        Edit
                    </button>
                </Link>
                <img src={img_url} alt='plant' className='plantimg' />
                <div>{common_name}</div>
                <div>{scientific_name}</div>
                <div>{propagation_type}</div>
                <div>{hardiness_zone}</div>
                <div>{soil_type}</div>
                <div>{sun}</div>
                <div>{acquired}</div>
                <button onClick={() => this.onClick(plant_id)}>
                    X
                </button>
                PlantDisplay
            </div>
        )
    }
}
