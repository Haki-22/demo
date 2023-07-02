import {createSlice} from "@reduxjs/toolkit";
import { addType, updateExistingType, updateType } from "./VecReducers";

/**
 * Creates a slice of event types in Redux.
 * @property {Array} eventTypes - Array of event types
 * @type {EventTypesSlice}
 */
const EventTypesSlice = createSlice({
    name: 'eventTypes',
    initialState: {
        eventTypes: [],
    },
    reducers: {
        updateEventType: updateType, // Loads eventTypes into store (first load)
        addEventType: addType,
        updateExistingEventType: updateExistingType,
}
});

// Exported actions from the event types slice.
/**
 * @type {EventTypesSliceActions}
 */
export const EventTypesActions = EventTypesSlice.actions

// Exported reducer from the event types slice.
/**
 * @type {EventTypesSliceReducer}
 */
export const EventTypesReducer = EventTypesSlice.reducer