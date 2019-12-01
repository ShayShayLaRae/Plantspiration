import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';


export default class Home extends Component{
    state={
        plantOfTheDay: {},
        plantsArray: []
    }

    componentDidMount(){
        axios.get('http://localhost:6727/api/plants')
        .then(res => {
            let randomIndex= this.getRandomNum(res.data.length);
            let randomPlant= res.data[randomIndex];
            this.setState({
            plantsArray: res.data,
            plantOfTheDay: randomPlant
        })})
    }

    getRandomNum(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    render(){
        const{plantOfTheDay}= this.state;
        const {img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun} = plantOfTheDay
   
        return(
            <div className='plantHome'>
                <h2>Add me to Your Wishlist?</h2>
                <div className='plantStats'>
               <img src={img_url} alt='plant' className='plant_img'/>

               <div><strong>Common Name:</strong>{common_name}</div>

               <div><strong>Scientific Name:</strong>{scientific_name}</div>

               <div><strong>Propagation Type:</strong>{propagation_type}</div>

               <div><strong>Hardiness Zones:</strong>{hardiness_zone}</div>

               <div><strong>Soil:</strong>{soil_type}</div>

               <div><strong>Sun:</strong>{sun}</div>
               </div>
            </div>
        )
    }
}