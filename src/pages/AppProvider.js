import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

//import { bindGroupActions, bindRoleActions, bindGFinanceTypeActions } from 'reducers/_main';
//import { GroupReducer } from 'reducers/groupreducers'; 

import { RoleTypesActions, RoleTypesReducer } from 'reducers/RoleTypesReducers';
import { GroupTypesActions, GroupTypesReducer } from 'reducers/GroupTypesReducers';
import { FinanceTypesReducer } from 'reducers/FinanceTypeReducers';
import { EventTypesReducer } from 'reducers/EventTypeReducers'
import { ProjectTypesReducer } from 'reducers/ProjectTypesReducers';
import { MedalTypesReducer } from 'reducers/MedalTypesReducers';

import { bindFinanceTypeActions, bindProjectTypeActions, bindRoleTypeActions, bindEventTypeActions, bindGroupTypeActions, bindMedalTypeActions } from 'reducers/_main';

/**
 * Redux store configuration.
 * This is the main store for the entire application.
 * It includes the necessary reducers and preloaded state.
 * @type {Store}
 */
export const store = configureStore({
  reducer: {
    roleTypes: RoleTypesReducer,
    groupTypes: GroupTypesReducer,
    financeTypes: FinanceTypesReducer,
    eventTypes: EventTypesReducer,
    projectTypes: ProjectTypesReducer,
    medalTypes: MedalTypesReducer,
    
  },
  preloadedState: {
    roleTypes: [],
    groupTypes: [],
    financeTypes: [],
    eventTypes: [],
    projectTypes:[],
    medalTypes: [],
  },
});

const dispatch = store.dispatch;

/**
 * All actions/callbacks for the entire application.
 * They can be imported and used anywhere.
 * However, it is recommended to pass these actions down as props to "lower-level" components.
 * This ensures their "purity" (not relying on global parameters).
 */
export const actions = {
  //...bindGroupActions(dispatch),
  ...bindFinanceTypeActions(dispatch),
  ...bindEventTypeActions(dispatch),
  ...bindRoleTypeActions(dispatch),
  ...bindGroupTypeActions(dispatch),
  ...bindProjectTypeActions(dispatch),
  ...bindMedalTypeActions(dispatch),

};

/**
 * Encapsulates nested components and allows them to access the store - central data.
 */
export const AppProvider = (props) => {
  return (
  <Provider store={store}>
    {props.children}
  </Provider>
  )
};
