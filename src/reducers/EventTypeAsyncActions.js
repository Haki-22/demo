
import {actions} from "../pages/AppProvider";

import { EventTypesActions } from "./EventTypeReducers";
import { EventTypesQuery } from "queries/EventTypesQuery";

/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id
 * @param query
 * @param resultselector
 * @param dispatch
 * @param getState
 * @returns promise
 */

export const EventTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            eventTypes => log('dispatching')(dispatch(EventTypesActions.updateEventType(eventTypes))),
            error => error
        )
};

/**
 * Fetch the eventTypeType from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const EventTypesFetch = () => (dispatch, getState) => {
    const eventTypesSelector = (json) => json.data.eventTypePage;
    const bodyfunc = async () => {
        return await EventTypesFetchHelper(EventTypesQuery, eventTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}


export const EventTypeAsyncUpdate = (eventType) => (dispatch, getState) => {
    const eventTypeMutationJSON = (eventType) => {
        return {
            query: `eventUpdate? eventTypeUpdate-není`,
            variables: eventType
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(eventTypeMutationJSON(eventType))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.eventTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.eventTypeUpdate.eventType.lastchange
                    dispatch(EventTypesActions.eventType_update({...eventType, lastchange: lastchange}))
                }
                return json
            }
        )   
}

