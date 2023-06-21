import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";
import { RoleTypeAsyncUpdate } from "./RoleTypesAsyncActions";

/**
 * Creates a slice of roletypes in Redux.
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
        //updateMutationRoleType: RoleTypeAsyncUpdate
}
});

//z rezu odvozene akce
export const RoleTypesActions = RoleTypesSlice.actions
//z rezu odvozeny stavovy automat
export const RoleTypesReducer = RoleTypesSlice.reducer
