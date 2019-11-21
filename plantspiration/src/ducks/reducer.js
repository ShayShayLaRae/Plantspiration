initialState = {
    img_url: '',
    common_name: '',
    scientific_name: '',
    propagation_type: '',
    hardiness_zone: '',
    soil_type: '',
    sun: '',
    acquired: ''
}

const SET_PLANT = 'SET_PLANT';
const CANCEL = 'CANCEL';

//Action Builder
export const setPlant = (
    img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired
    ) => {
    return {
        type: SET_PLANT,
        payload: {
            img_url: img_url, common_name: common_name, scientific_name: scientific_name, propagation_type: propagation_type, hardiness_zone: hardiness_zone, soil_type: soil_type, sun: sun, acquired: acquired}
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
        case SET_PLANT:
            return{
                ...state,
                img_url: action.payload,
                common_name: action.payload,
                scientific_name: action.payload,
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
