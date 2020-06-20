export const ADD_ADDITIONALFEATURE = "ADD_ADDITIONALFEATURE";
export const REMOVE_ADDITIONALFEATURE = "REMOVE_ADDITIONALFEATURE";

export const addAdditionalFeature = (feature) => {
    return {
        type: ADD_ADDITIONALFEATURE,
        payload: {
            id: feature.id,
            name: feature.name,
            price: feature.price
        }
    }
}

export const removeAdditionalFeature = (feature) => {
    return {
        type: REMOVE_ADDITIONALFEATURE,
        payload: {
            id: feature.id,
            name: feature.name,
            price: feature.price
        }
    }
}