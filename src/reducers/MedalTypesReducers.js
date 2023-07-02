import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";

/**
 * Creates a slice of medal types in Redux.
 * @property {Array} medalTypes - Array of medal types
 * @type {MedalTypesSlice}
 */
const MedalTypesSlice = createSlice({
    name: 'medalTypes',
    initialState: {
        medalTypes: [],
    },
    reducers: {
        updateMedalType: updateType, // Loads medalTypes into store (first load)
        addMedalType: addType,
        updateExistingMedalType: updateExistingType,
}
});

// Exported actions from the medal types slice.
/**
 * @type {MedalTypesSliceActions}
 */
export const MedalTypesActions = MedalTypesSlice.actions

// Exported reducer from the medal types slice.
/**
 * @type {MedalTypesSliceReducer}
 */
export const MedalTypesReducer = MedalTypesSlice.reducer