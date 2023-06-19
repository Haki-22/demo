import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid1 } from 'uuid';


import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';


/**
 * Stavova funkce, ktera přidá typ financí
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */


/*
const FinanceTypeUpdate = (state, action) => {
    const updatedft = action.payload;
    console.log(updatedft, "updatedft");
    if(state){
        console.log(state, "state");
    }
    
    state = state.map(financeTypes =>
    financeTypes.id === updatedft.id ? { ...financeTypes, ...updatedft } : financeTypes
    );
    return state;
  }; */
  /*
const FinanceTypeUpdate = (state, action) => {
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    
    return state
}*/

const FinanceTypeAdd =  (state, action) => {
    const newFinanceType = action.payload
    console.log("Adding new financeType: ",newFinanceType)
    state = [...state, newFinanceType]
    return state
}

/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const FinanceTypeSlice = createSlice({
    name: 'financeTypes',
    initialState: {
        financeTypes: [],
    },
    reducers: {
        financeType_add: FinanceTypeAdd,
        updateExistingFinanceType:(state, action) =>{
            const updatedEventType = action.payload
            console.log("Updated EventType:", updatedEventType)
            state = state.map(eventType => eventType.id === updatedEventType.id ? {...eventType, ...updatedEventType} : eventType)
            return state
        },
        updateFinanceType: (state, action) => {
            return action.payload;
    },
}
})

//z rezu odvozene akce
export const FinanceTypesActions = FinanceTypeSlice.actions
//z rezu odvozeny stavovy automat
export const FinanceTypesReducer = FinanceTypeSlice.reducer

/*(state, action) => {
            return action.payload;
        },*/