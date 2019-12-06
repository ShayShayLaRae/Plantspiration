import React, {Component} from 'react';
import './MyPlants.css';
import axios from 'axios';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import {Link} from 'react-router-dom';


export default class MyPlants extends Component{
    constructor() {
        super();
        this.state= {
            myPlantsList: [],
            // propagations: []
        }
    }

    getMyPlants = () => {
        axios.get('/api/plants/myplants')
        .then(results => {
            this.setState({myPlantsList: results.data});
        });
    }
    // getPropagations = () => {
    //     axios.get('/api/plants/myplants')
    //     .then(results => {
    //         this.setState({propagations: results.data});
    //     });
    // }
    componentDidMount() {
        this.getMyPlants()
    }

    render() {
        
        return(

            <div className='myPlantsBody'>

                 <Link to={`/plant/step1`}>
                    <button className='addBtn'>
                        Add Plant
                    </button>
                </Link>
                <div className='plantListCont'>
                {this.state.myPlantsList.map(p => 
                <PlantDisplay key={p.plant_id} plant={p} reloadList={this.getMyPlants}/>
                )}</div>
                
            </div>
        )
    }
}