import React, { Component } from 'react';
import './PlantDisplay.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {selectPlant} from '../../ducks/reducer';
import store from '../../ducks/store';


export default class PlantDisplay extends Component {

    getAllPlants=() => {
        axios.get('/api/plants')
        .then(results => {
            this.setState({getAllPlants: results.data})
        })
    }

    onClickDelete(plant_id) {
        axios.delete(`/api/plant/${plant_id}`)
            .then(() => {
                this.getAllPlants()
            })
    }

    savePlantRedux(plant) {
        store.dispatch(selectPlant(plant))
    }

    render() {
        const { plant, getAllPlants, getWishes } = this.props;
        const { plant_id, img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list } = plant;
        return (
            <div className='plantCont'>
                <div className='plant_imgCont'>
                <img src={img_url} alt='plant' className='plant_img' />
                </div>
                <div className='plantStats'>
                    <div>
                        <strong>Common Name:</strong> 
                        {common_name}
                    </div>
                    <div>
                        <strong>Scientific Name:</strong> 
                        {scientific_name}
                    </div>
                    <div>
                        <strong>Propagation Type:</strong> 
                        {propagation_type}
                    </div>
                    <div>
                        <strong>Hardiness Zones:</strong> 
                        {hardiness_zone}
                    </div>
                    <div>
                        <strong>Soil:</strong> 
                        {soil_type}
                    </div>
                    <div>
                        <strong>Sun:</strong> 
                        {sun}
                    </div>
                    <div>
                        <strong>Acquired:</strong> 
                        {acquired}
                    </div>
                    <div>
                        <strong>List:</strong> 
                        {current_list}
                    </div>
                </div>

                <div className='displayBtns'>
                    <button 
                    onClick={() => this.onClickDelete(plant_id)} 
                    className='Xbtn'>
                         X 
                    </button>
    
                    <Link to={`/plant/step1/${plant_id}`}>
                        <button onClick={() => {this.savePlantRedux(plant)}}>
                            Edit
                        </button>
                    </Link>
                </div>


            </div>
        )
    }
}

