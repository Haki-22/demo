import {createSlice} from "@reduxjs/toolkit";
import { addType, updateType, updateExistingType } from "./VecReducers";

/**
 * Creates a slice of group types in Redux.
 * @property {Array} groupTypes - Array of group types
 * @type {GroupTypesSlice}
 */
const GroupTypesSlice = createSlice({
    name: 'groupTypes',
    initialState: {
        groupTypes:[]
    },
    reducers: {
        addGroupType: addType,
        updateGroupType: updateType,
        updateExistingGroupType: updateExistingType,
    },
});

// Exported actions from the group types slice.
/**
 * @type {GroupTypesSliceActions}
 */
export const GroupTypesActions = GroupTypesSlice.actions

// Exported reducer from the group types slice.
/**
 * @type {GroupTypesSliceReducer}
 */
export const GroupTypesReducer = GroupTypesSlice.reducer

/*
        addGroupType: (state, action) => {
            const newGroupType = action.payload
            
            state = [...state, newGroupType]
            return state
        },
         updateExistingGroupType:(state, action) =>{
            const updatedGroupType = action.payload
            console.log("Updated GroupType:", updatedGroupType)
            state = state.map(groupType => groupType.id === updatedGroupType.id ? {...groupType, ...updatedGroupType} : groupType)
            return state
        },
*/