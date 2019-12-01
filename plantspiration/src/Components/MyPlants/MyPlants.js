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

    MyPlants=() => {
        axios.get('http://localhost:6727/api/plants/myplants')
        .then(results => {
            this.setState({myPlantsList: results.data});
        });
    }
    componentDidMount() {
        this.MyPlants()
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
                <PlantDisplay key={p.plant_id} plant={p} getMyPlants={this.MyPlants}/>
                )}
                
            </div>
        )
    }
}