const globalFetchParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
  }
  
  /**
   * Wrapper function for fetch, providing a communication layer with the server.
   * @param {string} path - The path for the fetch request.
   * @param {Object} params - Additional parameters for the fetch request.
   * @returns {Promise<Response>} - The fetch request promise.
   */
  export const authorizedFetch = (path, params) => {
    const newParams = {...globalFetchParams, ...params}; // Allow overriding default parameters (globalFetchParams)
    const overridenPath = '/api/gql'
    return (
      fetch(overridenPath, newParams) // params.headers should be extended with Authorization TOKEN
  )
}
  