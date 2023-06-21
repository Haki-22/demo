import { authorizedFetch } from "queries/authorizedFetch"

import { RoleTypesQuery } from "queries/RoleTypesQuery";
import { RoleTypesActions } from "./RoleTypesReducers";


/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const RoleTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            roleTypes => log('dispatching')(dispatch(RoleTypesActions.updateRoleType(roleTypes))),
            error => error
        )
};

/**
 * Fetch the role from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const RoleTypesFetch = () => (dispatch, getState) => {
    const roleTypesSelector = (json) => json.data.roleTypePage;
    const bodyfunc = async () => {
        return await RoleTypesFetchHelper(RoleTypesQuery, roleTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}


export const RoleTypeAsyncAdd = (RoleType) => (dispatch, getState) => {
    const RoleTypeMutationJSON = (RoleType) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $nameEn: String!) {
                roleTypeInsert(roleType: {id: $id, name: $name, nameEn: $nameEn}) {
                  id
                  msg
                  roleType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: RoleType.id,
                name: RoleType.name,
                nameEn: RoleType.nameEn

            }
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(RoleTypeMutationJSON(RoleType))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.roleTypeInsert.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.roleTypeInsert.roleType.lastchange
                    dispatch(RoleTypesActions.addRoleType({...RoleType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

export const RoleTypeAsyncUpdate= (RoleType) => (dispatch, getState) => {
    const RoleTypeMutationJSON = (RoleType) => {
        return {
            query: `mutation ($id: ID!, $lastchange: DateTime!, $name: String, $nameEn: String) {
                roleTypeUpdate(
                  roleType: {id: $id, lastchange: $lastchange, name: $name, nameEn: $nameEn}
                ) {
                  roleType {
                    id
                    name
                    nameEn
                    lastchange
                  }
                  msg
                }
              }`,
            variables: {
                id: RoleType.id,
                name: RoleType.name,
                nameEn: RoleType.nameEn,
                lastchange: RoleType.lastchange
            }
            }
        }

    const params = {
        /* method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error */
        body: JSON.stringify(RoleTypeMutationJSON(RoleType))
    }

    return authorizedFetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.roleTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.roleTypeUpdate.roleType.lastchange
                    dispatch(RoleTypesActions.updateExistingRoleType({...RoleType, lastchange: lastchange}))
                    //dispatch(RoleTypesActions.updateRoleType(RoleType))
                   
                }
                return json
            }
        )   
}



