
import { ProjectTypesQuery } from "queries/ProjectTypesQuery";
import { ProjectTypesActions } from "./ProjectTypesReducers";


/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const ProjectTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
 * Fetch the role from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const ProjectTypesFetch = () => (dispatch, getState) => {
    const projectTypesSelector = (json) => json.data.projectTypePage;
    const bodyfunc = async () => {
        return await ProjectTypesFetchHelper(ProjectTypesQuery, projectTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}
