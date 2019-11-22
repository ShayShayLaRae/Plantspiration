import React, {Component} from 'react';
import './EditPlant.css';
import Step1 from './Step1';
import Step2 from './Step2';
import {Link, Switch, Route} from 'react-router-dom';
import {cancel} from '../../ducks/reducer';
import {connect} from 'react-redux';



export default class EditPlant extends Component{
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
                    <Route path='/edit-plant/step1' component={Step1} />
                    <Route path='/edit-plant/step2' component={Step2} />
                </Switch>
                Edit Plant
            </div>
        )
    }
}
connect(null, {cancel})(EditPlant);