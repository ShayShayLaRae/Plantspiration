     const initialState = {
    img_url: '',
    common_name: '',
    scientific_name: '',
    propagation_type: '',
    hardiness_zone: '',
    soil_type: '',
    sun: '',
    acquired: '',
    current_list: '',
    selected_plant: {}
}

const SET_STEP1 = 'SET_STEP1';
const SET_STEP2 = 'SET_STEP2';
const CANCEL = 'CANCEL';
const SELECT_PLANT= 'SELECT_PLANT';

//Action Builder
export const selectPlant = (plant) => {
    return{
        type: SELECT_PLANT,
        payload: {
            img_url: plant.img_url,
            common_name: plant.common_name,
            scientific_name: plant.scientific_name,
            propagation_type: plant.propagation_type,
            hardiness_zone: plant.hardiness_zone,
            soil_type: plant.soil_type,
            sun: plant.sun,
            acquired: plant.acquired,
            current_list: plant.current_list,
            selected_plant: plant
        }
    }
}
export const setStep1 = (
    img_url, common_name, scientific_name) => {
    return {
        type: SET_STEP1,
        payload: {
            img_url: img_url, 
            common_name: common_name, 
            scientific_name: scientific_name}
    }
}
export const setStep2 = (propagation_type, hardiness_zone, soil_type, sun, acquired, current_list) => {
    return {
        type: SET_STEP2,
        payload: {
            propagation_type: propagation_type,
            hardiness_zone: hardiness_zone,
            soil_type: soil_type,
            sun: sun,
            acquired: acquired,
            current_list: current_list}
        }
    }
export const cancel = (initialState) => {
    
    return {
        type: CANCEL,
        payload: {initialState}
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_STEP1:
            return {
                ...state,
                ...action.payload
                
            }
        case SET_STEP2:
            return {
                ...state, 
                ...action.payload 
            }

        case CANCEL:
            return {
                img_url: '',
                common_name: '',
                scientific_name: '',
                propagation_type: '',
                hardiness_zone: '',
                soil_type: '',
                sun: '',
                acquired: '',
                current_list: ''
            }
        case SELECT_PLANT:
            return {
                ...state, 
                ...action.payload
            }

        default: return state
    }
}
