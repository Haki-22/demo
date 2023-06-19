import { authorizedFetch } from './authorizedFetch'

const EventTypesQueryJSON = () => ({
    "query":
        `query {
            eventTypePage {
              id,
              name,
              nameEn,
            }
          }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const EventTypesQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(EventTypesQueryJSON()),
    })