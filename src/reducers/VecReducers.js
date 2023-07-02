/**
 * Reducer function for adding a type to the state.
 *
 * @param {Array} state - The current state array.
 * @param {Object} action - The action object containing the payload.
 * @returns {Array} The updated state array with the new type added.
 */
export const addType = (state, action) => {
    state = [...state, action.payload]
    return state
}

/**
 * Reducer function that loads types into store (first load)
 *
 * @param {Array} state - The current state array.
 * @param {Object} action - The action object containing the payload.
 * @returns {Array} The updated state array with the new type added.
 */
export const updateType = (state, action) => {    
    return action.payload; 
}

/**
 * Reducer function for updating an existing type in the state.
 *
 * @param {Array} state - The current state array.
 * @param {Object} action - The action object containing the payload.
 * @returns {Array} The updated state array with the type updated.
 */
export const updateExistingType=(state, action) =>{
    console.log("Updated Type:", action.payload)
    state = state.map(testedType => testedType.id === action.payload.id ? {...testedType, ...action.payload} : testedType)
    return state
}
