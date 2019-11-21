import React, {Component} from 'react';
import './MyPlants.css';
import axios from 'axios';
import PlantDisplay from '../PlantDisplay/PlantDisplay';


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
  

    render() {
        return(
            <div>
                MyPlants
                <PlantDisplay/>
            </div>
        )
    }
}