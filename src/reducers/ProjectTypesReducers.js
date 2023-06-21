import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";
import { ProjectTypeAsyncUpdate } from "./ProjectTypesAsyncActions";

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

//z rezu odvozene akce
export const ProjectTypesActions = ProjectTypesSlice.actions
//z rezu odvozeny stavovy automat
export const ProjectTypesReducer = ProjectTypesSlice.reducer
