import { authorizedFetch } from "queries/authorizedFetch"

import { EventTypesActions } from "../reducers/EventTypeReducers";
import { EventTypesQuery } from "queries/EventTypesQuery";

/**
 * Helper function for fetching event types data and performs subsequent actions.
 * @param {Function} query - The function that initiates the network request.
 * @param {Function} resultselector - The function that processes the response data.
 * @param {Function} dispatch - The function to dispatch actions to the Redux store.
 * @param {Function} getState - The function to retrieve the current Redux state.
 * @returns {Promise<*>} - A Promise representing the completion of the fetch and subsequent actions.
 */
export const EventTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            eventTypes => log('dispatching')(dispatch(EventTypesActions.updateEventType(eventTypes))),
            error => error
        )
};

/**
 * Async function for fetching event types using the helper function.
 * Fetches event types from the server and puts them into store.
 * @returns {Promise} - A promise that resolves to the fetched event types.
 */
export const EventTypesFetch = () => (dispatch, getState) => {
    const eventTypesSelector = (json) => json.data.eventTypePage;
    const bodyfunc = async () => {
        return await EventTypesFetchHelper(EventTypesQuery, eventTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}

/**
 * Async function for updating a event type and dispatching the updated event type to the Redux store.
 * @param {Object} EventType - The event type object to update.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const EventTypeAsyncUpdate = (eventType) => (dispatch, getState) => {
    const eventTypeMutationJSON = (eventType) => {
        return {
            query: `eventUpdate? eventTypeUpdate-není`,
            variables: eventType
            }
        }

    const params = {
        body: JSON.stringify(eventTypeMutationJSON(eventType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.eventTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.eventTypeUpdate.eventType.lastchange
                    dispatch(EventTypesActions.eventType_update({...eventType, lastchange: lastchange}))
                }
                return json
            }
        )   
}

/**
 * Async function for adding a event type and dispatching the updated event type to the Redux store.
 * @param {Object} EventType - The event type object to add.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const EventTypeAsyncAdd = (EventType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the event type mutation.
     * @param {Object} EventType - The event type object.
     * @returns {Object} - The event type mutation JSON.
     */
    const EventTypeMutationJSON = (EventType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $nameEn: String!
                ) {
                eventTypeInsert(eventType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  eventType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: EventType.id,
                name: EventType.name,
                nameEn: EventType.nameEn

            }
            }
        }

    const params = {
        body: JSON.stringify(EventTypeMutationJSON(EventType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.eventTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.eventTypeInsert.eventType.lastchange
                    dispatch(EventTypesActions.addEventType({...EventType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}
