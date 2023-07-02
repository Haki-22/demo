import {authorizedFetch} from "./authorizedFetch";

/**
* Generates the JSON object for querying all medal types.
*
* @returns {Object} The query JSON object.
*/
export const MedalTypesQueryJSON = () => ({
  "query": `query{
      medalTypePage{
          id, name
      }
  }`
});

/**
* Sends a request to query all medal types.
*
* @returns {Promise<Response>} The fetch request promise.
*/
export const MedalTypesQuery = () =>
  authorizedFetch('/gql', {
      body: JSON.stringify(MedalTypesQueryJSON()),
  });
