import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for querying event types.
 *
 * @returns {Object} The query JSON object.
 */
const EventTypesQueryJSON = () => ({
  "query": `query {
    eventTypePage {
      id,
      name,
      nameEn,
    }
  }`,
});

/**
 * Sends a request to query event types.
 *
 * @returns {Promise<Response>} The fetch request promise.
 */
export const EventTypesQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(EventTypesQueryJSON()),
  });
