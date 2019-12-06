import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setStep2} from '../../ducks/reducer';
import store from '../../ducks/store';
import axios from 'axios';


export default class Step2 extends Component {
    constructor(){
        super();
        const {img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list, selected_plant} = store.getState()
        
        this.state = {
            propagation_type: propagation_type,
            hardiness_zone: hardiness_zone,
            soil_type: soil_type,
            sun: sun,
            acquired: acquired,
            current_list: current_list,
            img_url: img_url,
            common_name: common_name,
            scientific_name: scientific_name,
            selected_plant: selected_plant,
            isEditing: Object.keys(selected_plant).length > 0
        }
    }

    addPlant() {
        axios.post(`/api/plant`, {
            img_url: this.state.img_url,
            common_name: this.state.common_name,
            scientific_name: this.state.scientific_name,
            propagation_type: this.state.propagation_type,
            hardiness_zone: this.state.hardiness_zone,
            soil_type: this.state.soil_type,
            sun: this.state.sun,
            acquired: this.state.acquired,
            current_list: this.state.current_list
        })
            .then(() => {
                store.getState()
            })
      
    }

    clickCompleteHandler() {
        const {isEditing, selected_plant} = this.state;
        if (isEditing) {
            this.editPlant(selected_plant.plant_id)
          } else {
            this.addPlant()
          }
    }

    editPlant(plant_id) {
        console.log(this.state, plant_id)
        axios
            .put(`/api/plant/${plant_id}`, {
                img_url: this.state.img_url,
                common_name: this.state.common_name,
                scientific_name: this.state.scientific_name,
                propagation_type: this.state.propagation_type,
                hardiness_zone: this.state.hardiness_zone,
                soil_type: this.state.soil_type,
                sun: this.state.sun,
                acquired: this.state.acquired,
                current_list: this.state.current_list
            })
            .then(() => {
                store.getState()
            })
        }

    propagation_typeChangeHandler(event) {
        this.setState({ propagation_type: event.target.value })
    }
    hardiness_zoneChangeHandler(event) {
        this.setState({ hardiness_zone: event.target.value })
    }
    soil_typeChangeHandler(event) {
        this.setState({ soil_type: event.target.value })
    }
    sunChangeHandler(event) {
        this.setState({ sun: event.target.value })
    }
    acquiredChangeHandler(event) {
        this.setState({ acquired: event.target.value })
    }
    current_listChangeHandler(event) {
        this.setState({ current_list: event.target.value })
    }


    render(){
        const {propagation_type, hardiness_zone, soil_type, sun, acquired, current_list} = this.state;
        return(
            <div className='step2body'>
                <div className='step2Cont'>
                <input
                value={propagation_type}
                placeholder='propagation type'
                type='text'
                onChange={e => this.propagation_typeChangeHandler(e)}
                />
                <hr/>
                <input
                value={hardiness_zone}
                placeholder='hardiness zones'
                type='text'
                onChange={e => this.hardiness_zoneChangeHandler(e)}
                />
                <hr/>
                <input
                value={soil_type}
                placeholder='soil type'
                type='text'
                onChange={e => this.soil_typeChangeHandler(e)}
                />
                <hr/>
                <input
                value={sun}
                placeholder='sun needs'
                type='text'
                onChange={e => this.sunChangeHandler(e)}
                />
                <hr/>
                <input
                value={acquired}
                placeholder='when did you get it?'
                type='text'
                onChange={e => this.acquiredChangeHandler(e)}
                />
                <hr/>
                <input
                value={current_list}
                placeholder='MyPlants, Wishlist, or Propagation?'
                type='text'
                onChange={e => this.current_listChangeHandler(e)}
                />
                <hr/>
                <div className='formBtns'>
                  <Link to='/my-plants'>
                    <button className='btn'
                    onClick={() => this.clickCompleteHandler()}>
                        Complete
                    </button>
                </Link>
                <Link to='/plant/step1'>
                <button className='btn'
                onClick={(event) => {
                        store.dispatch(setStep2(propagation_type, hardiness_zone, soil_type, sun, acquired, current_list))
                        setTimeout(() => { console.log('store: ', store.getState()) }, 500);
                    }}>
                    Previous
                </button>
                </Link>
                </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    const { img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list, selected_plant} = reduxState
    return { img_url: img_url, common_name: common_name, scientific_name: scientific_name, propagation_type: propagation_type, hardiness_zone: hardiness_zone, soil_type: soil_type, sun: sun, acquired: acquired, current_list: current_list, selected_plant: selected_plant}
}
connect(mapStateToProps, {setStep2})(Step2)