import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";

/**
 * Creates a slice of finance types in Redux.
 * @property {Array} financeTypes - Array of finance types
 * @type {FinanceTypesSlice}
 */
const FinanceTypesSlice = createSlice({
    name: 'financeTypes',
    initialState: {
        financeTypes: [],
    },
    reducers: {
        updateFinanceType: updateType, // Loads financeTypes into store (first load)
        addFinanceType: addType,
        updateExistingFinanceType: updateExistingType,
}
});

// Exported actions from the finance types slice.
/**
 * @type {FinanceTypesSliceActions}
 */
export const FinanceTypesActions = FinanceTypesSlice.actions

// Exported reducer from the finance types slice.
/**
 * @type {FinanceTypesSliceReducer}
 */
export const FinanceTypesReducer = FinanceTypesSlice.reducer