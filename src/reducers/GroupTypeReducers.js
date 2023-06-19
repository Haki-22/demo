import {createSlice} from "@reduxjs/toolkit";
import { CreateItem, DeleteItem, ReplaceItem, SelectItem } from './keyedreducers';
import { updateType } from "./VecReducers";

const GroupTypesSlice = createSlice({
    name: 'groupTypes',
    initialState: {
        groupTypes:[]
    },
    reducers: {
        addGroupType: (state, action) => {
            const newGroupType = action.payload
            
            state = [...state, newGroupType]
            return state
        },

        updateGroupType: updateType,

        updateExistingGroupType:(state, action) =>{
            const updatedGroupType = action.payload
            console.log("Updated GroupType:", updatedGroupType)
            state = state.map(groupType => groupType.id === updatedGroupType.id ? {...groupType, ...updatedGroupType} : groupType)
            return state
        },
    },
});


//z rezu odvozene akce
export const GroupTypesActions = GroupTypesSlice.actions
//z rezu odvozeny stavovy automat
export const GroupTypesReducer = GroupTypesSlice.reducer
