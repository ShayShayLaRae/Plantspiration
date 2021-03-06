import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {setStep1} from '../../ducks/reducer';
import store from '../../ducks/store';


export default class Step1 extends Component {
    constructor() {
        super();
        let { img_url, common_name, scientific_name, selected_plant } = store.getState();

        this.state = {
            img_url: img_url,
            common_name: common_name,
            scientific_name: scientific_name,
            selected_plant: selected_plant
        }
    }

    img_urlChangeHandler(event) {
        this.setState({ img_url: event.target.value })
    }
    common_nameChangeHandler(event) {
        this.setState({ common_name: event.target.value })
    }
    scientific_nameChangeHandler(event) {
        this.setState({ scientific_name: event.target.value })
    }


    render() {
        const { img_url, common_name, scientific_name } = this.state;

        return (
            <div className='step1Body'>
                <div className='step1Cont'>
                    <input
                        value={img_url}
                        placeholder='image URL'
                        type='text'
                        onChange={e => this.img_urlChangeHandler(e)}
                    />
                    <hr/>
                    <input
                        value={common_name}
                        placeholder='common name'
                        type='text'
                        onChange={e => this.common_nameChangeHandler(e)}
                    />
                    <hr/>
                    <input
                        value={scientific_name}
                        placeholder='scientific name'
                        type='text'
                        onChange={e => this.scientific_nameChangeHandler(e)}
                    />
                    <hr/>
                    <div className='formBtns'>
                    <Link to='/plant/step2'>
                        <button className='btn'
                            onClick={(event) => {
                                store.dispatch(setStep1(img_url, common_name, scientific_name))
                            }}>
                            Next
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    const { img_url, common_name, scientific_name, selected_plant } = reduxState
    return { img_url: img_url, common_name: common_name, scientific_name: scientific_name, selected_plant: selected_plant }
}

connect(mapStateToProps, {setStep1})(Step1)