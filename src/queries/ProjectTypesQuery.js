import { authorizedFetch } from './authorizedFetch'

/**
* Generates the JSON object for querying all project types.
*
* @returns {Object} The query JSON object.
*/
const ProjectTypesQueryJSON = () => ({
    "query":
        `query {
            projectTypePage {
              id,
              name,
              nameEn,
            }
          }`
})

/**
* Sends a request to query all project types.
*
* @returns {Promise<Response>} The fetch request promise.
*/
export const ProjectTypesQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectTypesQueryJSON()),
    })