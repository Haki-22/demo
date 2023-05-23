import { RanksActions } from "./RanksReducers";
import { RanksQuery, RankQuery } from "queries/RanksQuery";
import { fakeQueryRank } from "queries/fakequeryrank";
import { authorizedFetch } from "queries/authorizedFetch"


/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const RankFetchHelper = (id, query, resultselector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    const p = query(id)
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        // .then(
        //     response => log('received')(response.json()),
        //     error => error
        //     //error
        //     )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            json => log('dispatching')(dispatch(RanksActions.ranks_update(json))),
            error => error
        )

    return p
}

/**
 * Fetch the rank from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const RankFetch = (id) => (dispatch, getState) => {
    const rankSelector = (json) => json.data.roleTypeById
    const bodyfunc = async () => {
        let rankData = await RankFetchHelper(id, RankQuery, rankSelector, dispatch, getState)
        
        if (rankData.type !== "cd49e152-610c-11ed-9f29-001a7dda7110") {
            rankData = await RankFetchHelper(id, RankQuery, rankSelector, dispatch, getState)
        }
        return rankData
    }
    return bodyfunc()
}

/**
 * Fetch the rank from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const RankFakeFetch = (id) => (dispatch, getState) => {
    //console.log('RankFakeFetch')
    const rankSelector = (json) => json.rankById
    const bodyfunc = async () => {
        let rankData = await RankFetchHelper(id, fakeQueryRank, rankSelector, dispatch, getState)
        dispatch(RanksActions.ranks_select(rankData))
        return rankData
    }
    return bodyfunc()
}

/* 
export const RankAsyncUpdate = (group) => (dispatch, getState) => {
    const groupMutationJSON = (group) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                groupUpdate(group: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  group {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: group
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(groupMutationJSON(group))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.groupUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.groupUpdate.group.lastchange
                    dispatch(RanksActions.ranks_update({...group, lastchange: lastchange}))
                }
                return json
            }
        )   
} */