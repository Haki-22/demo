import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';

/**
 * stavova funkce, ktera odebere hodnost 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RankMemberRemove = (state, action) => {
    console.log('volani stavove funkce, smazat hodnost')
    const r = action.payload.rank
    
    delete state[r.id]
    return state
}

/**
 * Stavova funkce, ktera provede update hodnosti daného id
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RankMemberUpdate = (state, action) => { //Doesnt update :C
    const r = action.payload.rank
    state[r.name] = {...state[r.name], ...r}
    return state
}

/* const RankMemberUpdate = (state, action) => {
    const r = action.payload.rank;
    const updatedState = {
      ...state,
      [r.name]: { ...state[r.name], ...r }
    };
    return updatedState;
  }; */
  


/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const RanksSlice = createSlice({
    name: 'ranks',
    initialState: {},
    reducers: {
        ranks_add: CreateItem,
        ranks_delete: DeleteItem,
        ranks_replace: ReplaceItem,
        ranks_update: UpdateItem,
        ranks_select: SelectItem,

        ranks_memberRemove: RankMemberRemove,
        ranks_memberUpdate: RankMemberUpdate
    }
})

//z rezu odvozene akce
export const RanksActions = RanksSlice.actions
//z rezu odvozeny stavovy automat
export const RanksReducer = RanksSlice.reducer