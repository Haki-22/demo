import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

//import { bindGroupActions, bindRoleActions, bindGFinanceTypeActions } from 'reducers/_main';
//import { GroupReducer } from 'reducers/groupreducers'; 

//import { RanksReducer } from 'reducers/RanksReducers';
//import { bindRanksActions } from 'reducers/_main';

import { RoleTypesActions, RoleTypesReducer } from 'reducers/RoleTypesReducers';
import { GroupTypesActions, GroupTypesReducer } from 'reducers/GroupTypeReducers';
import { FinanceTypesReducer } from 'reducers/FinanceTypeReducers';
import { EventTypesReducer } from 'reducers/EventTypeReducers'
import { ProjectTypesReducer } from 'reducers/ProjectTypesReducers';

import { bindFinanceTypeActions, bindProjectTypeActions, bindRoleTypeActions, bindEventTypeActions, bindGroupTypeActions } from 'reducers/_main';

/**
 * This is the main store for the entire application.
 * It includes the necessary reducers and preloaded state.
 */
export const store = configureStore({
  reducer: {
    roleTypes: RoleTypesReducer,
    groupTypes: GroupTypesReducer,
    financeTypes: FinanceTypesReducer,
    eventTypes: EventTypesReducer,
    projectTypes: ProjectTypesReducer,
    
  },
  preloadedState: {
    roleTypes: [],
    groupTypes: [],
    financeTypes: [],
    eventTypes: [],
    projectTypes:[],
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
  //...bindRanksActions(dispatch),
  ...bindFinanceTypeActions(dispatch),
  ...bindEventTypeActions(dispatch),
  ...bindRoleTypeActions(dispatch),
  ...bindGroupTypeActions(dispatch),
  ...bindProjectTypeActions(dispatch),

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
