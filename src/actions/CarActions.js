
export const ADD_FEATURE = "ADD_FEATURE";

export function updateFeature(newFeature) {
    console.log(newFeature);
    return {
        type: ADD_FEATURE,
        payload: newFeature
    };
}