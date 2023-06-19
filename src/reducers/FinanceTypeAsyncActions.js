
import {actions} from "../pages/AppProvider";

import { FinanceTypesActions } from "./FinanceTypeReducers";
import { FinanceTypesQuery } from "queries/FinanceTypesQuery";

/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id
 * @param query
 * @param resultselector
 * @param dispatch
 * @param getState
 * @returns promise
 */

export const FinanceTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
 * Fetch the financeTypeType from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const FinanceTypesFetch = () => (dispatch, getState) => {
    const financeTypesSelector = (json) => json.data.financeTypePage;
    const bodyfunc = async () => {
        return await FinanceTypesFetchHelper(FinanceTypesQuery, financeTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}


export const FinanceTypeAsyncUpdate = (financeType) => (dispatch, getState) => {
    const financeTypeMutationJSON = (financeType) => {
        return {
            query: `FinanceTypeUpdate? asi ne? mutation {financeUpdate}`,
            variables: financeType
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(financeTypeMutationJSON(financeType))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.financeTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.financeTypeUpdate.financeType.lastchange
                    dispatch(FinanceTypesActions.financeType_update({...financeType, lastchange: lastchange}))
                }
                return json
            }
        )   
}

