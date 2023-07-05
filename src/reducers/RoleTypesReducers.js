import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";

/**
 * Creates a slice of role types in Redux.
 * @function
 * @property {Array} roleTypes - Array of role types
 * @type {RoleTypesSlice}
 */
const RoleTypesSlice = createSlice({
    name: 'roleTypes',
    initialState: {
        roleTypes: [],
    },
    reducers: {
        updateRoleType: updateType, // Loads roleTypes into store (first load)
        addRoleType: addType,
        updateExistingRoleType: updateExistingType,
}
});

// Exported actions from the role types slice.
/**
 * @type {RoleTypesSliceActions}
 */
export const RoleTypesActions = RoleTypesSlice.actions

// Exported reducer from the role types slice.
/**
 * @type {RoleTypesSliceReducer}
 */
export const RoleTypesReducer = RoleTypesSlice.reducer