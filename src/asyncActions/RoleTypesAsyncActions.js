import { authorizedFetch } from "queries/authorizedFetch"

import { RoleTypesQuery } from "queries/RoleTypesQuery";
import { RoleTypesActions } from "../reducers/RoleTypesReducers";

/**
 * Helper function for fetching role types data and performs subsequent actions.
 * @param {Function} query - The function that initiates the network request.
 * @param {Function} resultselector - The function that processes the response data.
 * @param {Function} dispatch - The function to dispatch actions to the Redux store.
 * @param {Function} getState - The function to retrieve the current Redux state.
 * @returns {Promise<*>} - A Promise representing the completion of the fetch and subsequent actions.
 */
export const RoleTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            roleTypes => log('dispatching')(dispatch(RoleTypesActions.updateRoleType(roleTypes))),
            error => error
        )
};

/**
 * Async function for fetching role types using the helper function.
 * Fetches role types from the server and puts them into store.
 * @returns {Promise} - A promise that resolves to the fetched role types.
 */
export const RoleTypesFetch = () => (dispatch, getState) => {
    const roleTypesSelector = (json) => json.data.roleTypePage;
    const bodyfunc = async () => {
        return await RoleTypesFetchHelper(RoleTypesQuery, roleTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}

/**
 * Async function for updating a role type and dispatching the updated role type to the Redux store.
 * @param {Object} RoleType - The role type object to update.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const RoleTypeAsyncUpdate= (RoleType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the role type mutation.
     * @param {Object} RoleType - The role type object.
     * @returns {Object} - The role type mutation JSON.
     */
    const RoleTypeMutationJSON = (RoleType) => {
        return {
            query: `mutation (
                $id: ID!, $lastchange: DateTime!, $name: String, $nameEn: String
                ) {
                roleTypeUpdate(
                  roleType: {id: $id, lastchange: $lastchange, name: $name, nameEn: $nameEn}
                ) {
                  roleType {
                    id
                    name
                    nameEn
                    lastchange
                  }
                  msg
                }
              }`,
            variables: {
                id: RoleType.id,
                name: RoleType.name,
                nameEn: RoleType.nameEn,
                lastchange: RoleType.lastchange
            }
            }
        }

    const params = {
        body: JSON.stringify(RoleTypeMutationJSON(RoleType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.roleTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.roleTypeUpdate.roleType.lastchange
                    dispatch(RoleTypesActions.updateExistingRoleType({...RoleType, lastchange: lastchange}))
                    //dispatch(RoleTypesActions.updateRoleType(RoleType))
                }
                return json
            }
        )   
}

/**
 * Async function for adding a role type and dispatching the updated role type to the Redux store.
 * @param {Object} RoleType - The role type object to add.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const RoleTypeAsyncAdd = (RoleType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the role type mutation.
     * @param {Object} RoleType - The role type object.
     * @returns {Object} - The role type mutation JSON.
     */
    const RoleTypeMutationJSON = (RoleType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $nameEn: String!
                ) {
                roleTypeInsert(roleType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  roleType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: RoleType.id,
                name: RoleType.name,
                nameEn: RoleType.nameEn

            }
            }
        }

    const params = {
        body: JSON.stringify(RoleTypeMutationJSON(RoleType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.roleTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.roleTypeInsert.roleType.lastchange
                    dispatch(RoleTypesActions.addRoleType({...RoleType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

