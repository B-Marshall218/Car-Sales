
export const ADD_FEATURE = "ADD_FEATURE";

export function updateFeature(newFeature) {
    console.log(newFeature);
    return {
        type: ADD_FEATURE,
        payload: newFeature
    };
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function removeFeature(featureId) {
    console.log(featureId);
    return {
        type: REMOVE_FEATURE,
        payload: featureId
    };
}