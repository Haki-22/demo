import { RanksActions } from "./RanksReducers";
import { RanksQuery, RankQuery } from "queries/RanksQuery";
import { fakeQueryRank } from "queries/fakequeryrank";
import { authorizedFetch } from "queries/authorizedFetch"

import { GroupTypesQuery } from "queries/GroupTypesQuery";
import { GroupTypesActions } from "./GroupTypeReducers";


/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const GroupTypesFetchHelper = (query, resultselector, dispatch, getState) => {
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
            groupTypes => log('dispatching')(dispatch(GroupTypesActions.updateGroupType(groupTypes))),
            error => error
        )
};

/**
 * Fetch the groupTypeType from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const GroupTypesFetch = () => (dispatch, getState) => {
    const groupTypesSelector = (json) => json.data.groupTypePage;
    const bodyfunc = async () => {
        return await GroupTypesFetchHelper(GroupTypesQuery, groupTypesSelector, dispatch, getState);
    };
    return bodyfunc()
}


export const GroupTypeAsyncUpdate = (groupType) => (dispatch, getState) => {
    const groupTypeMutationJSON = (groupType) => {
        return {
            query: `mutation (
                $id: ID!, $name: String!, $lastchange: DateTime!
                ) {
                groupTypeUpdate(groupType: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  groupType {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: {
                id: groupType.id,
                name: groupType.name,
                lastchange: groupType.lastchange

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
        body: JSON.stringify(groupTypeMutationJSON(groupType))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json(),
        )
        .then(
            json => {
                const msg = json.data.groupTypeUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.groupTypeUpdate.groupType.lastchange
                    dispatch(GroupTypesActions.groupType_Update({...groupType, lastchange: lastchange}))
                   
                }
                return json
            }
        )   
}

