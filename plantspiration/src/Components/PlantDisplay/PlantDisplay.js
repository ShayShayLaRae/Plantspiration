import React, { Component } from 'react';
import './PlantDisplay.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {selectPlant} from '../../ducks/reducer';
import store from '../../ducks/store';


export default class PlantDisplay extends Component {

    onClickDelete= (plant_id) => {
        let me = this;
        let shouldDelete = window.confirm('Are you sure?');
        if (shouldDelete) {
            axios.delete(`/api/plant/${plant_id}`)
            .then(() => {
                me.props.reloadList()
            })
        }  
    }

    savePlantRedux(plant) {
        store.dispatch(selectPlant(plant))
    }

    render() {
        const { plant, reloadList } = this.props;
        
        const { plant_id, img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list } = plant;
        return (
            <div key={plant_id} className='plantCont'>
                <div className='plant_imgCont'>
                <img src={img_url} alt='plant' className='plant_img' />
                </div>
                <div className='plantStats'>
                    <div>
                        <strong>{common_name}</strong> 
                    </div>
                    <hr/>
                    <div>
                        <strong>Scientific Name:</strong> 
                        {`  ${scientific_name}`}
                    </div>
                    <div>
                        <strong>Propagation Type:</strong> 
                        {`  ${propagation_type}`}
                    </div>
                    <div>
                        <strong>Hardiness Zones:</strong> 
                        {`  ${hardiness_zone}`}
                    </div>
                    <div>
                        <strong>Soil:</strong> 
                        {`  ${soil_type}`}
                    </div>
                    <div>
                        <strong>Sun:</strong> 
                        {`  ${sun}`}
                    </div>
                    <div>
                        <strong>Acquired:</strong> 
                        {`  ${acquired}`}
                    </div>
                    {/* <div>
                        <strong>List:</strong> 
                        {current_list}
                    </div> */}
                </div>

                <div className='displayBtns'>
                    <button onClick={() => this.onClickDelete(plant_id)} 
                    className='cornerBtn'>
                         X 
                    </button>
    
                    <Link to={`/plant/step1/${plant_id}`}>
                        <button onClick={() => {this.savePlantRedux(plant)}}
                        className='cornerBtn'>
                            Edit
                        </button>
                    </Link>
                </div>


            </div>
        )
    }
}

