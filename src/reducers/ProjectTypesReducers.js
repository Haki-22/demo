import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";

/**
 * Creates a slice of role types in Redux.
 * @property {Array} roleTypes - Array of role types
 * @type {ProjectTypesSlice}
 */
const ProjectTypesSlice = createSlice({
    name: 'projectTypes',
    initialState: {
        projectTypes: [],
    },
    reducers: {
        updateProjectType: updateType,
        addProjectType: addType,
        updateExistingProjectType: updateExistingType,
}
});

// Exported actions from the role types slice.
/**
 * @type {ProjectTypesSliceActions}
 */
export const ProjectTypesActions = ProjectTypesSlice.actions

// Exported reducer from the role types slice.
/**
 * @type {ProjectTypesSliceReducer}
 */
export const ProjectTypesReducer = ProjectTypesSlice.reducer
