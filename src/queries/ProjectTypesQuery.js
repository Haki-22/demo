import { authorizedFetch } from './authorizedFetch'

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
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectTypesQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectTypesQueryJSON()),
    })