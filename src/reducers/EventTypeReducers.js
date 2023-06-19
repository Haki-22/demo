import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the finances
export const EventTypeSlice = createSlice({
    name: "eventTypes",
    initialState: {
        eventTypes: [],
    },
    reducers: {
        addEventType: (state, action) => {
            const newEventType = action.payload
            
            state = [...state, newEventType]
            return state
        },

        updateEventType: (state, action) => {
            const updatedEventType = action.payload
            
            return action.payload;
        },

        updateExistingEventType:(state, action) =>{
            const updatedEventType = action.payload
            console.log("Updated EventType:", updatedEventType)
            state = state.map(eventType => eventType.id === updatedEventType.id ? {...eventType, ...updatedEventType} : eventType)
            return state
        },

       /*  eventType_add: (state, action) =>{ //pošle všechny types
            const newEventType = action.payload
            console.log("Adding new eventType: ",newEventType)
            state = [...state, newEventType]
            return state
        }, */
    },
})

export const EventTypesActions = EventTypeSlice.actions

export const EventTypesReducer = EventTypeSlice.reducer