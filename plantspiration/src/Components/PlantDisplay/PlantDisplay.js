import React, { Component } from 'react';
import './PlantDisplay';
import {Link} from 'react-router-dom';

export default class PlantDisplay extends Component {
    render() {
        const { plant } = this.props
        const { plant_id, img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired } = plant
        return (
            <div>
                <img src={img_url} alt='plant' className='plantimg' />
                <div>{common_name}</div>
                <div>{scientific_name}</div>
                <div>{propagation_type}</div>
                <div>{hardiness_zone}</div>
                <div>{soil_type}</div>
                <div>{sun}</div>
                <div>{acquired}</div>
                <Link to={`/edit-plant/${plant_id}`}>
                    <button>
                        Edit
                    </button>
                </Link>
                PlantDisplay
            </div>
        )
    }
}