export const addType = (state, action) => {
    state = [...state, action.payload]
    return state
}

export const updateType = (state, action) => {
    const updatedEventType = action.payload
            
    return action.payload;
}

export const updateExistingType=(state, action) =>{
    const updatedType = action.payload
    console.log("Updated EventType:", updatedType)
    state = state.map(testedType => testedType.id === action.payload.id ? {...testedType, ...action.payload} : testedType)
    return state
}
