import { GroupActions } from "./groupreducers"
import { GroupFetch, GroupFakeFetch, GroupAsyncUpdate } from "./GroupAsyncActions"

import { RanksActions } from "./RanksReducers"
import { RankFetch } from "./RankAsyncActions"
import { RankFakeFetch } from "./RankAsyncActions"

import { RoleTypeAsyncUpdate, RoleTypesFetch } from "./RoleTypesAsyncActions"

import { RoleTypeAsyncAdd } from "./RoleTypesAsyncActions"
import { RoleTypesActions } from "./RoleTypesReducers"

import { GroupTypeAsyncUpdate, GroupTypesFetch } from "./GroupTypeAsyncActions"
import { GroupTypesActions } from "./GroupTypeReducers"

import { FinanceTypesActions } from "./FinanceTypeReducers"
import { FinanceTypesFetch, FinanceTypeAsyncUpdate } from "./FinanceTypeAsyncActions"

import { EventTypesActions } from "./EventTypeReducers"
import { EventTypesFetch, EventTypeAsyncUpdate } from "./EventTypeAsyncActions"

import {ProjectTypesActions} from "./ProjectTypesReducers"
import { ProjectTypesFetch } from "./ProjectTypesAsyncActions"

import {addType, updateType, updateExistingType} from "./VecReducers"



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

/**
 * Binds role type actions to the dispatch function.
 * Can be accessed by actions throughout the whole app
 * @param {function} dispatch - The dispatch function provided by Redux.
 * @returns {Object} An object containing the bound action functions.
 */
export const bindRoleTypeActions = (dispatch) => {
    return {
        roleTypesFetch: () => dispatch(RoleTypesFetch()),
        onRoleTypeAdd: (payload) => dispatch(RoleTypesActions.addRoleType(payload)), 
        onRoleTypeUpdate: (payload) => dispatch(RoleTypesActions.updateExistingRoleType(payload)),
        onRoleTypeAddMutation: (payload) => dispatch(RoleTypeAsyncAdd(payload)),
        onRoleTypeUpdateMutation: (payload) => dispatch(RoleTypeAsyncUpdate(payload)),
    };
};

export const bindGroupTypeActions = (dispatch) => {
    return {
        groupTypeFetch: () => dispatch(GroupTypesFetch()),
        onGroupTypeAdd: (payload) => dispatch(GroupTypesActions.addGroupType(payload)),
        onGroupTypeUpdate: (payload) => dispatch(GroupTypesActions.updateExistingGroupType(payload))
        //onGroupTypeUpdate: (gt) => dispatch(GroupTypesActions.secondGroupTypeUpdate(gt))
    };
};

export const bindFinanceTypeActions = (dispatch) => {
    return {
        onFinanceTypeUpdate: (ft) => dispatch(FinanceTypesActions.updateExistingFinanceType(ft)),
        onFinanceTypeAdd: (ft) => dispatch(FinanceTypesActions.financeType_add(ft)),

        financeTypesFetch: () => dispatch(FinanceTypesFetch()), 
       
        financeTypeAsyncUpdate: (financeType) => dispatch(FinanceTypeAsyncUpdate(financeType))
    }
}

export const bindEventTypeActions = (dispatch) => {
    return {
        eventTypesFetch: () => dispatch(EventTypesFetch()),
        onEventTypeAdd: (payload) => dispatch(EventTypesActions.addEventType(payload)),
        onEventTypeUpdate: (payload) => dispatch(EventTypesActions.updateExistingEventType(payload))
        //onEventTypeUpdate: (payload) => dispatch(EventTypesActions.updateEventType(payload)),
        //onGroupTypeUpdate: (gt) => dispatch(EventTypesActions.secondGroupTypeUpdate(gt))
    };
};

export const bindProjectTypeActions = (dispatch) => {
    return {
        projectTypesFetch: () => dispatch(ProjectTypesFetch()),
        onProjectTypeAdd: (payload) => dispatch(ProjectTypesActions.addProjectType(payload)), 
        onProjectTypeUpdate: (payload) => dispatch(ProjectTypesActions.updateExistingProjectType(payload)),
        //onProjectTypeAddMutation: (payload) => dispatch(ProjectTypesActions.ProjectTypeAsyncAdd(payload)),
        //onProjectTypeUpdateMutation: (payload) => dispatch(ProjectTypesActions.ProjectTypeAsyncUpdate(payload)),
    };
};
