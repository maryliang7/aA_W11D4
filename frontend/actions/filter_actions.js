import { fetchBenches } from "./bench_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds
})

export const updateFilter = (filter) => {
    return (dispatch, getState) => {
        dispatch(updateBounds(filter));
        return fetchBenches(getState().filters.bounds)(dispatch);
    };
}