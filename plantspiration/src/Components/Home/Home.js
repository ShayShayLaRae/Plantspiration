import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
// import { FilePond } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';


export default class Home extends Component {
    state = {
        plantOfTheDay: {},
        plantsArray: [],
        // selectedFile: null,
        // getUrbanJungle: []
    }

    componentDidMount() {
        axios.get('/api/plants')
            .then(res => {
                let randomIndex = this.getRandomNum(res.data.length);
                let randomPlant = res.data[randomIndex];
                this.setState({
                    plantsArray: res.data,
                    plantOfTheDay: randomPlant
                })
            })
    }

    // getUrbanJungle=() => {
    // axios.get('/api/urbanJungle')
    // .then(res => {
    //     this.setState({getUrbanJungle: res.data})
    //     })
    // }

    getRandomNum(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // fileSelectedHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })

    // }

    // fileUploadHandler = () => {
    //     const db = new FormData();
    //     db.append('image', this.state.selectedFile, this.state.selectedFile.name)
    //     axios.post('/api/urbanJungle', db, {
    //         onUploadProgress: progressEvent => {
    //             console.log('Upload Progress:' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')

    //         }
    //     })
    //     .then(res => {
    //         console.log(res); 
    //     });
    // }

    render() {
        const { plantOfTheDay } = this.state;
        const { img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun } = plantOfTheDay
        const { getUrbanJungle } = this.state;
        // const {room_img} = getUrbanJungle;

        return (
            <div className='body'>
                <div className='randomPlant'>
                    {/* <h2>Wishlist</h2> */}
                    <div className='homePlantImg'>
                        <img src={img_url} alt='plant' className='home_plant_img' />
                    </div>

                    <div className='homePlantStats'>
                        <div>
                            <h3>{common_name}</h3>
                        </div>
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
                    </div>
                </div>
                <div className='homeRight'>
                    <div className='intro'>
                        <h3>Welcome To PlantSpiration!</h3>
                        <p>
                            This is a place to nurture your plant obsession, or help you get started!</p>
                        <p>
                            Once registered you will have the ability to list your current house plants, your propagations, and create a wishlist!</p>
                        <p>Chat plants with other urban jungle owners about identification, swapping plants, disease and pest advice, Whatever you like! (plant chat coming soon)</p>
                        <p>
                            Set up notifications to repot, water, and fertilize your potted beauties and we will send you text notifications on request. </p>
                        <p>
                            To get started, Register above!
                        </p>
                    </div>
                    <div>
                        {/* <img src={room_img} alt='plant room' /> */}
                        {/* <FilePond/> */}
                        {/* <input 
                    type='file' 
                    onChange={this.fileSelectedHandler}/>
                    <button 
                    onClick={this.fileUploadHandler}>
                        Upload
                    </button> */}
                    </div>
                </div>

            </div>
        )
    }
}