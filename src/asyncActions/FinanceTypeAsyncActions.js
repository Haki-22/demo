import { authorizedFetch } from "queries/authorizedFetch"

import { FinanceTypesActions } from "../reducers/FinanceTypeReducers";
import { FinanceTypesQuery } from "queries/FinanceTypesQuery";

/**
 * Helper function for fetching finance types data and performs subsequent actions.
 * @param {Function} query - The function that initiates the network request.
 * @param {Function} resultselector - The function that processes the response data.
 * @param {Function} dispatch - The function to dispatch actions to the Redux store.
 * @param {Function} getState - The function to retrieve the current Redux state.
 * @returns {Promise<*>} - A Promise representing the completion of the fetch and subsequent actions.
 */
export const FinanceTypesFetchHelper = (query, resultselector, dispatch, getState) => {
    /**
     * Logs the given text and object.
     *
     * @param {string} text - The text to be logged.
     * @returns {Function} - A function that logs the given object and returns it.
     */
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
            financeTypes => log('dispatching')(dispatch(FinanceTypesActions.updateFinanceType(financeTypes))),
            error => error
        )
};

/**
 * Async function for fetching finance types using the helper function.
 * Fetches finance types from the server and puts them into store.
 * @returns {Promise} - A promise that resolves to the fetched finance types.
 */
export const FinanceTypesFetch = () => (dispatch, getState) => {
    const financeTypesSelector = (json) => json.data.financeTypePage;
    const bodyfunc = async () => {
        return await FinanceTypesFetchHelper(FinanceTypesQuery, financeTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}

/**
 * Async function for updating a finance type and dispatching the updated finance type to the Redux store.
 * @param {Object} FinanceType - The finance type object to update.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const FinanceTypeAsyncUpdate = (financeType) => (dispatch, getState) => {
    const financeTypeMutationJSON = (financeType) => {
        return {
            query: `FinanceTypeUpdate? asi ne? mutation {financeUpdate}`,
            variables: financeType
            }
        }

    const params = {
        body: JSON.stringify(financeTypeMutationJSON(financeType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.financeTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.financeTypeUpdate.financeType.lastchange
                    dispatch(FinanceTypesActions.financeType_update({...financeType, lastchange: lastchange}))
                }
                return json
            }
        )   
}

/**
 * Async function for adding a finance type and dispatching the updated finance type to the Redux store.
 * @param {Object} FinanceType - The finance type object to add.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const FinanceTypeAsyncAdd = (FinanceType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the finance type mutation.
     * @param {Object} FinanceType - The finance type object.
     * @returns {Object} - The finance type mutation JSON.
     */
    const FinanceTypeMutationJSON = (FinanceType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $nameEn: String!
                ) {
                financeTypeInsert(financeType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  financeType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: FinanceType.id,
                name: FinanceType.name,
                nameEn: FinanceType.nameEn

            }
            }
        }

    const params = {
        body: JSON.stringify(FinanceTypeMutationJSON(FinanceType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.financeTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.financeTypeInsert.financeType.lastchange
                    dispatch(FinanceTypesActions.addFinanceType({...FinanceType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

