import { RoleTypeAsyncUpdate, RoleTypesFetch, RoleTypeAsyncAdd } from "../asyncActions/RoleTypesAsyncActions"
import { RoleTypesActions } from "./RoleTypesReducers"

import { GroupTypesAsyncUpdate, GroupTypesFetch, GroupTypeAsyncAdd } from "asyncActions/GroupTypesAsyncActions"
import { GroupTypesActions } from "./GroupTypesReducers"

import { FinanceTypesActions } from "./FinanceTypeReducers"
import { FinanceTypesFetch, FinanceTypeAsyncUpdate } from "../asyncActions/FinanceTypeAsyncActions"

import { EventTypesActions } from "./EventTypeReducers"
import { EventTypesFetch, EventTypeAsyncUpdate } from "../asyncActions/EventTypeAsyncActions"

import {ProjectTypesActions} from "./ProjectTypesReducers"
import { ProjectTypesFetch } from "../asyncActions/ProjectTypesAsyncActions"

import { MedalTypeAsyncUpdate, MedalTypesFetch, MedalTypeAsyncAdd } from "../asyncActions/MedalTypesAsyncActions"
import { MedalTypesActions } from "./MedalTypesReducers"


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

/**
 * Binds group type actions to the dispatch function.
 * Can be accessed by actions throughout the whole app
 * @param {function} dispatch - The dispatch function provided by Redux.
 * @returns {Object} An object containing the bound action functions.
 */
export const bindGroupTypeActions = (dispatch) => {
    return {
        groupTypesFetch: () => dispatch(GroupTypesFetch()),
        onGroupTypeAdd: (payload) => dispatch(GroupTypesActions.addGroupType(payload)),
        onGroupTypeUpdate: (payload) => dispatch(GroupTypesActions.updateExistingGroupType(payload)),
        
        onGroupTypeUpdateMutation: (payload) => dispatch(GroupTypesAsyncUpdate(payload)),
        onGroupTypeAddMutation: (payload) => dispatch(GroupTypeAsyncAdd(payload)),
    };
};

/**
 * Binds event type actions to the dispatch function.
 * Can be accessed by actions throughout the whole app
 * @param {function} dispatch - The dispatch function provided by Redux.
 * @returns {Object} An object containing the bound action functions.
 */
export const bindEventTypeActions = (dispatch) => {
    return {
        eventTypesFetch: () => dispatch(EventTypesFetch()),
        onEventTypeAdd: (payload) => dispatch(EventTypesActions.addEventType(payload)),
        onEventTypeUpdate: (payload) => dispatch(EventTypesActions.updateExistingEventType(payload))
    };
};

/**
 * Binds finance type actions to the dispatch function.
 * Can be accessed by actions throughout the whole app
 * @param {function} dispatch - The dispatch function provided by Redux.
 * @returns {Object} An object containing the bound action functions.
 */
export const bindFinanceTypeActions = (dispatch) => {
    return {
        financeTypesFetch: () => dispatch(FinanceTypesFetch()),
        onFinanceTypeUpdate: (ft) => dispatch(FinanceTypesActions.updateExistingFinanceType(ft)),
        onFinanceTypeAdd: (ft) => dispatch(FinanceTypesActions.financeType_add(ft)),
    }
}

/**
 * Binds project type actions to the dispatch function.
 * Can be accessed by actions throughout the whole app
 * @param {function} dispatch - The dispatch function provided by Redux.
 * @returns {Object} An object containing the bound action functions.
 */
export const bindProjectTypeActions = (dispatch) => {
    return {
        projectTypesFetch: () => dispatch(ProjectTypesFetch()),
        onProjectTypeAdd: (payload) => dispatch(ProjectTypesActions.addProjectType(payload)), 
        onProjectTypeUpdate: (payload) => dispatch(ProjectTypesActions.updateExistingProjectType(payload)),
        //onProjectTypeAddMutation: (payload) => dispatch(ProjectTypesActions.ProjectTypeAsyncAdd(payload)),
        //onProjectTypeUpdateMutation: (payload) => dispatch(ProjectTypesActions.ProjectTypeAsyncUpdate(payload)),
    };
};

/**
 * Binds medal type actions to the dispatch function.
 * Can be accessed by actions throughout the whole app
 * @param {function} dispatch - The dispatch function provided by Redux.
 * @returns {Object} An object containing the bound action functions.
 */
export const bindMedalTypeActions = (dispatch) => {
    return {
        medalTypesFetch: () => dispatch(MedalTypesFetch()),
        onMedalTypeAdd: (payload) => dispatch(MedalTypesActions.addMedalType(payload)), 
        onMedalTypeUpdate: (payload) => dispatch(MedalTypesActions.updateExistingMedalType(payload)),
        
        onMedalTypeAddMutation: (payload) => dispatch(MedalTypeAsyncAdd(payload)),
        onMedalTypeUpdateMutation: (payload) => dispatch(MedalTypeAsyncUpdate(payload)),
    };
};
