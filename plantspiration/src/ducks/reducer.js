    const initialState = {
    img_url: '',
    common_name: '',
    scientific_name: '',
    propagation_type: '',
    hardiness_zone: '',
    soil_type: '',
    sun: '',
    acquired: ''
}

const SET_STEP1 = 'SET_STEP1';
const SET_STEP2 = 'SET_STEP2';
const CANCEL = 'CANCEL';

//Action Builder
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
export const setStep2 = (propagation_type, hardiness_zone, soil_type, sun, acquired) => {
    return {
        type: SET_STEP2,
        payload: {
            propagation_type: propagation_type,
            hardiness_zone: hardiness_zone,
            soil_type: soil_type,
            sun: sun,
            acquired: acquired}
        }
    }
export const cancel = (initialState) => {
    console.log('hit reducer');
    
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
                img_url: action.payload,
                common_name: action.payload,
                scientific_name: action.payload
            }
        case SET_STEP2:
            return {
                ...state,
                propagation_type: action.payload,
                hardiness_zone: action.payload,
                soil_type: action.payload,
                sun: action.payload,
                acquired: action.payload
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
                acquired: ''
            }
        default: return state
    }
}
