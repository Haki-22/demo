
import { authorizedFetch } from "queries/authorizedFetch"

import { GroupTypesQuery } from "queries/GroupTypesQuery";
import { GroupTypesActions } from "../reducers/GroupTypesReducers";

/**
 * Helper function for fetching group types data and performs subsequent actions.
 * @param {Function} query - The function that initiates the network request.
 * @param {Function} resultselector - The function that processes the response data.
 * @param {Function} dispatch - The function to dispatch actions to the Redux store.
 * @param {Function} getState - The function to retrieve the current Redux state.
 * @returns {Promise<*>} - A Promise representing the completion of the fetch and subsequent actions.
 */
export const GroupTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            groupTypes => log('dispatching')(dispatch(GroupTypesActions.updateGroupType(groupTypes))),
            error => error
        )
};

/**
 * Async function for fetching group types using the helper function.
 * Fetches group types from the server and puts them into store.
 * @returns {Promise} - A promise that resolves to the fetched group types.
 */
export const GroupTypesFetch = () => (dispatch, getState) => {
    const groupTypesSelector = (json) => json.data.groupTypePage;
    const bodyfunc = async () => {
        return await GroupTypesFetchHelper(GroupTypesQuery, groupTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}

/**
 * Async function for updating a group type and dispatching the updated group type to the Redux store.
 * @param {Object} GroupType - The group type object to update.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const GroupTypesAsyncUpdate = (groupType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the group type mutation.
     * @param {Object} GroupType - The group type object.
     * @returns {Object} - The group type mutation JSON.
     */
    const groupTypeMutationJSON = (groupType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $lastchange: DateTime!, $nameEn: String
                ) {
                groupTypeUpdate(
                    groupType: {id: $id, name: $name, lastchange: $lastchange, nameEn: $nameEn}
                ) {
                  id
                  msg
                  groupType {
                    id
                    name
                    nameEn
                    lastchange
                  }
                }
              }`,
            variables: {
                id: groupType.id,
                name: groupType.name,
                nameEn: groupType.nameEn,
                lastchange: groupType.lastchange
            }
            }
        }

    const params = {
        body: JSON.stringify(groupTypeMutationJSON(groupType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.groupTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.groupTypeUpdate.groupType.lastchange
                    dispatch(GroupTypesActions.updateExistingGroupType({...groupType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

/**
 * Async action for adding a group type.
 * @param {Object} GroupType - The group type object to add.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const GroupTypeAsyncAdd = (GroupType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the group type mutation.
     * @param {Object} GroupType - The group type object.
     * @returns {Object} - The group type mutation JSON.
     */
    const GroupTypeMutationJSON = (GroupType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $nameEn: String!
                ) {
                groupTypeInsert(groupType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  groupType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: GroupType.id,
                name: GroupType.name,
                nameEn: GroupType.nameEn

            }
            }
        }

    const params = {
        body: JSON.stringify(GroupTypeMutationJSON(GroupType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.groupTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.groupTypeInsert.groupType.lastchange
                    dispatch(GroupTypesActions.addGroupType({...GroupType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}