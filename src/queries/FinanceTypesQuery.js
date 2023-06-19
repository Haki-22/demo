import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for querying finance types.
 *
 * @returns {Object} The query JSON object.
 */
const FinanceTypesQueryJSON = () => ({
  "query": `query {
    financeTypePage {
      id
      name
      nameEn
    }
  }`,
});

/**
 * Sends a request to query finance types.
 *
 * @returns {Promise<Response>} The fetch request promise.
 */
export const FinanceTypesQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceTypesQueryJSON()),
  });
