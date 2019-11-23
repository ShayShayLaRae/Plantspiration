import React, {Component} from 'react';
import './PlantForm.css';
import Step1 from './Step1';
import Step2 from './Step2';
import {Link, Switch, Route} from 'react-router-dom';
import {cancel} from '../../ducks/reducer';
import {connect} from 'react-redux';



export default class PlantForm extends Component{
    constructor() {
        super();
        this.state = {
            image_url: '',
            common_name: '',
            scientific_name: '',
            propagation_type: '',
            hardiness_zone: '',
            soil_type: '',
            sun: '',
            acquired: '',
            updateHasExecuted: false,
            isEditingMode: false,
            editSelectedPlant: {}
        };
    }
    componentDidMount() {
        // console.log('form componentDidMount')
        const { selectedPlant } = this.props
        if (Object.keys(selectedPlant).length > 0) {
            this.getAPlant(selectedPlant.plant_id)
        }
    }
    // getAPlant = (plant_id) => {
    //     axios.get(`http://localhost:6727/${plant_id}`)
    //         .then(result => {

    //             // console.log('is editSelectedProduct getting results', result.data)
    //             this.setState({ editSelectedPlant: result.data })
    //         })
    // }
    render() {
        const {cancel} = this.props
        return(
            <div>
    
                  <Link to='/my-plants'>
                    <button onClick={this.props.cancel}>
                        Cancel
                    </button>
                </Link>
                <Switch>
                    <Route path='/plant/step1' component={Step1} />
                    <Route path='/plant/step2' component={Step2} />
                </Switch>
            
            </div>
        )
    }
}
connect(null, {cancel})(PlantForm);