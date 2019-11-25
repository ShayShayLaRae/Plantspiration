import React, { Component } from 'react';
import './PlantDisplay.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class PlantDisplay extends Component {

    onClickDelete(plant_id) {
        axios.delete(`http://localhost:6727/api/plant/${plant_id}`)
            .then(() => {
                this.props.getAllPlants()
            })
    }
    render() {
        const { plant, getAllPlants } = this.props;
        const { plant_id, img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list } = plant;
        return (
            <div className='plantCont'>

                <img src={img_url} alt='plant' className='plant_img' />
                <div className='plantStats'>
                    <div><strong>Common Name:</strong> {common_name}</div>
                    <div><strong>Scientific Name:</strong> {scientific_name}</div>
                    <div><strong>Propagation Type:</strong> {propagation_type}</div>
                    <div><strong>Hardiness Zones:</strong> {hardiness_zone}</div>
                    <div><strong>Soil:</strong> {soil_type}</div>
                    <div><strong>Sun:</strong> {sun}</div>
                    <div><strong>Acquired:</strong> {acquired}</div>
                    <div><strong>List:</strong> {current_list}</div>
                </div>

                <div className='displayBtns'>
                    <button onClick={() => this.onClickDelete(plant_id)} className='Xbtn'>
                        X
                </button>

                    <Link to={`/plant/step1/${plant_id}`}>
                        <button>
                            Edit
                    </button>
                    </Link>
                </div>


            </div>
        )
    }
}
//location/pathname
