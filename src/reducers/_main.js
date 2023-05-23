import { GroupActions } from "./groupreducers"
import { GroupFetch, GroupFakeFetch, GroupAsyncUpdate } from "./GroupAsyncActions"

import { RanksActions } from "./RanksReducers"
import { RankFetch } from "./RankAsyncActions"
import { RankFakeFetch } from "./RankAsyncActions"



/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch 
 * @returns 
 */
export const bindGroupActions = (dispatch) => {
    return {
        onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
        onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),
    
        onGroupMemberRemove: ({user, group}) => dispatch(GroupActions.group_memberRemove({user, group})),
        onGroupMemberUpdate: (payload) => dispatch(GroupActions.group_memberUpdate(payload)),
    
        groupFetch: (id) => dispatch(GroupFetch(id)),
        
        groupFakeFetch: (id) => dispatch(GroupFakeFetch(id)),    
       
        groupAsyncUpdate: (group) => dispatch(GroupAsyncUpdate(group))
    }
}


export const bindRanksActions = (dispatch) => {
    return {

        onRankRemove: (payload) => dispatch(RanksActions.ranks_memberRemove(payload)),
        onRankUpdate: (payload) => dispatch(RanksActions.ranks_memberUpdate(payload)),

        rankFetch: (id) => dispatch(RankFetch(id)),
        rankFakeFetch: (id) => dispatch(RankFakeFetch(id)),

    }
}
