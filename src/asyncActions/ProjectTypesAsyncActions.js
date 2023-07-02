import { authorizedFetch } from "queries/authorizedFetch"

import { ProjectTypesQuery } from "queries/ProjectTypesQuery";
import { ProjectTypesActions } from "../reducers/ProjectTypesReducers";


/**
 * Helper function for fetching project types data and performs subsequent actions.
 * @param {Function} query - The function that initiates the network request.
 * @param {Function} resultselector - The function that processes the response data.
 * @param {Function} dispatch - The function to dispatch actions to the Redux store.
 * @param {Function} getState - The function to retrieve the current Redux state.
 * @returns {Promise<*>} - A Promise representing the completion of the fetch and subsequent actions.
 */
export const ProjectTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            projectTypes => log('dispatching')(dispatch(ProjectTypesActions.updateProjectType(projectTypes))),
            error => error
        )
};

/**
 * Async function for fetching project types using the helper function.
 * Fetches project types from the server and puts them into store.
 * @returns {Promise} - A promise that resolves to the fetched project types.
 */
export const ProjectTypesFetch = () => (dispatch, getState) => {
    const projectTypesSelector = (json) => json.data.projectTypePage;
    const bodyfunc = async () => {
        return await ProjectTypesFetchHelper(ProjectTypesQuery, projectTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}


/**
 * Async function for updating a project type and dispatching the updated project type to the Redux store.
 * @param {Object} ProjectType - The project type object to update.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const ProjectTypeAsyncUpdate= (ProjectType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the project type mutation.
     * @param {Object} ProjectType - The project type object.
     * @returns {Object} - The project type mutation JSON.
     */
    const ProjectTypeMutationJSON = (ProjectType) => {
        return {
            query: `mutation (
                $id: ID!, $lastchange: DateTime!, $name: String, $nameEn: String
                ) {
                projectTypeUpdate(
                  projectType: {id: $id, lastchange: $lastchange, name: $name, nameEn: $nameEn}
                ) {
                  projectType {
                    id
                    name
                    nameEn
                    lastchange
                  }
                  msg
                }
              }`,
            variables: {
                id: ProjectType.id,
                name: ProjectType.name,
                nameEn: ProjectType.nameEn,
                lastchange: ProjectType.lastchange
            }
            }
        }

    const params = {
        body: JSON.stringify(ProjectTypeMutationJSON(ProjectType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.projectTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.projectTypeUpdate.projectType.lastchange
                    dispatch(ProjectTypesActions.updateExistingProjectType({...ProjectType, lastchange: lastchange}))
                    //dispatch(ProjectTypesActions.updateProjectType(ProjectType))
                }
                return json
            }
        )   
}

/**
 * Async function for adding a project type and dispatching the updated project type to the Redux store.
 * @param {Object} ProjectType - The project type object to add.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
export const ProjectTypeAsyncAdd = (ProjectType) => (dispatch, getState) => {
    /**
     * Constructs the JSON for the project type mutation.
     * @param {Object} ProjectType - The project type object.
     * @returns {Object} - The project type mutation JSON.
     */
    const ProjectTypeMutationJSON = (ProjectType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $nameEn: String!
                ) {
                projectTypeInsert(projectType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  projectType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: ProjectType.id,
                name: ProjectType.name,
                nameEn: ProjectType.nameEn

            }
            }
        }

    const params = {
        body: JSON.stringify(ProjectTypeMutationJSON(ProjectType))
    }

    return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.projectTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update failed")
                } else {
                    //Change lastchange with new one from server
                    const lastchange = json.data.projectTypeInsert.projectType.lastchange
                    dispatch(ProjectTypesActions.addProjectType({...ProjectType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

