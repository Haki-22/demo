import {authorizedFetch} from "./authorizedFetch";

/**
 * Generates the JSON object for querying a role type by ID.
 *
 * @param {string} id - The ID of the role type.
 * @returns {Object} The query JSON object.
 */
export const RoleQueryJSON = (id) => ({
  "query": `query ($id: ID!) {
      roleTypeById(id: $id){
          id, name, nameEn, lastchange
      }
  }`,
  "variables": {
      "id": id
  }
});

/**
* Generates the JSON object for querying all role types.
*
* @returns {Object} The query JSON object.
*/
export const RoleTypesQueryJSON = () => ({
  "query": `query{
      roleTypePage(limit: 30){
          id, name, nameEn, lastchange
      }
  }`
});

/**
* Sends a request to query a role type by ID.
*
* @param {string} id - The ID of the role type.
* @returns {Promise<Response>} The fetch request promise.
*/
export const RoleQuery = (id) =>
  authorizedFetch('/gql', {
      body: JSON.stringify(RoleQueryJSON(id)),
  });

/**
* Sends a request to query all role types.
*
* @returns {Promise<Response>} The fetch request promise.
*/
export const RoleTypesQuery = () =>
  authorizedFetch('/gql', {
      body: JSON.stringify(RoleTypesQueryJSON()),
  });
