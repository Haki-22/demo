import { authorizedFetch } from "queries/authorizedFetch"

import { MedalTypesQuery } from "queries/MedalTypesQuery";
import { MedalTypesActions } from "../reducers/MedalTypesReducers";

/**
 * Helper function fpr fetching medal types data and performs subsequent actions.
 * @param {Function} query - The function that initiates the network request.
 * @param {Function} resultselector - The function that processes the response data.
 * @param {Function} dispatch - The function to dispatch actions to the Redux store.
 * @param {Function} getState - The function to retrieve the current Redux state.
 * @returns {Promise<*>} - A Promise representing the completion of the fetch and subsequent actions.
 */
export const MedalTypesFetchHelper = (query, resultselector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    return query()
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            medalTypes => log('dispatching')(dispatch(MedalTypesActions.updateMedalType(medalTypes))),
            error => error
        )
};

/**
 * Async function for fetching medal types using the helper function.
 * Fetches medal types from the server and puts them into store.
 * @returns {Promise} - A promise that resolves to the fetched medal types.
 */
export const MedalTypesFetch = () => (dispatch, getState) => {
    const medalTypesSelector = (json) => json.data.medalTypePage;
    const bodyfunc = async () => {
        return await MedalTypesFetchHelper(MedalTypesQuery, medalTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}

/**
 * - Doesnt exist on server
 * Async action for updating a medal type.
 * @param {Object} MedalType - The medal type object to update.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const MedalTypeAsyncUpdate= (MedalType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the medal type mutation.
     * @param {Object} MedalType - The medal type object.
     * @returns {Object} - The medal type mutation JSON.
     */
    const MedalTypeMutationJSON = (MedalType) => {
        return {
            query: `mutation (
                $id: ID!, $lastchange: DateTime!, $name: String, $nameEn: String
                ) {
                medalTypeUpdate(
                  medalType: {id: $id, lastchange: $lastchange, name: $name, nameEn: $nameEn}
                ) {
                  medalType {
                    id
                    name
                    nameEn
                    lastchange
                  }
                  msg
                }
              }`,
            variables: {
                id: MedalType.id,
                name: MedalType.name,
                nameEn: MedalType.nameEn,
                lastchange: MedalType.lastchange
            }
            }
        }

    const params = {
        body: JSON.stringify(MedalTypeMutationJSON(MedalType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.medalTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.medalTypeUpdate.medalType.lastchange
                    dispatch(MedalTypesActions.updateExistingMedalType({...MedalType, lastchange: lastchange}))
                    //dispatch(MedalTypesActions.updateMedalType(MedalType))
                   
                }
                return json
            }
        )   
}

/**
 * - Doesnt exist on server
 * Async action for adding a medal type.
 * @param {Object} MedalType - The medal type object to add.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const MedalTypeAsyncAdd = (MedalType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the medal type mutation.
     * @param {Object} MedalType - The medal type object.
     * @returns {Object} - The medal type mutation JSON.
     */
    const MedalTypeMutationJSON = (MedalType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $nameEn: String!
                ) {
                medalTypeInsert(medalType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  medalType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: MedalType.id,
                name: MedalType.name,
                nameEn: MedalType.nameEn

            }
            }
        }

    const params = {
        body: JSON.stringify(MedalTypeMutationJSON(MedalType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.medalTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.medalTypeInsert.medalType.lastchange
                    dispatch(MedalTypesActions.addMedalType({...MedalType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

