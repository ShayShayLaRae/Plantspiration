import React, {Component} from 'react';
import './PlantForm.css';
import Step1 from './Step1';
import Step2 from './Step2';
import {Link, Switch, Route} from 'react-router-dom';
import {cancel} from '../../ducks/reducer';
import {connect} from 'react-redux';
// import axios from 'axios';



export default class PlantForm extends Component{

    render() {
        const {cancel} = this.props
        return(
            <div className='body'>
                <div className='plantFormCont'>
                <Switch>
                    <Route path='/plant/step1' component={Step1} />
                    <Route path='/plant/step2' component={Step2} />
                </Switch>
                <Link to='/my-plants'>
                    <button className='btn' onClick={cancel}>
                        Cancel
                    </button>
                </Link>
            </div>
            
            </div>
        )
    }
}
connect(null, {cancel})(PlantForm);