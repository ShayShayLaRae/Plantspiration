import React, {Component} from 'react';
import './MyPlants.css';
import axios from 'axios';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import {Link} from 'react-router-dom';


export default class MyPlants extends Component{
    constructor() {
        super();
        this.state= {myPlantsList: []}
    }

    allPlants=() => {
        axios.get('http://localhost:6727/api/plant-hoard')
        .then(results => {
            this.setState({myPlantsList: results.data});
        });
    }
    componentDidMount() {
        this.allPlants()
    }

    render() {
        
        return(

            <div>
                 <Link to={`/plant/step1`}>
                    <button>
                        Add New Plant
                    </button>
                </Link>
    
                {this.state.myPlantsList.map(p => 
                <PlantDisplay key={p.plant_id} plant={p} getAllPlants={this.allPlants}/>
                )}
            </div>
        )
    }
}