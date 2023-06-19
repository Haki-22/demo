import { authorizedFetch } from "./authorizedFetch";

/**
 * Generates the JSON object for querying all group types.
 *
 * @returns {Object} The query JSON object.
 */
export const GroupTypesQueryJSON = () => ({
  "query": `query{
      groupTypePage{
          id, name, nameEn, lastchange
      }
  }`
});

/**
 * Sends a request to query all group types.
 *
 * @returns {Promise<Response>} The fetch request promise.
 */
export const GroupTypesQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupTypesQueryJSON()),
  });
