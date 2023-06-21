import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GroupPage } from 'pages/GroupPage';
import { GroupPageProvider } from 'pages/GroupPageProvider';
import { AppProvider } from 'pages/AppProvider';
import { RanksPageProvider } from 'pages/RanksPageProvider';


import { RoleTypesPage } from 'pages/RoleTypesPage';
import { GroupTypesPage } from 'pages/GroupTypesPage';
import { FinanceTypesPage } from 'pages/FinanceTypesPage';
import { EventTypesPage } from 'pages/EventTypesPage';
import { ProjectTypesPage } from 'pages/ProjectTypesPage';


function App() {
  return (
    
    <div className="App">
      
      <AppProvider>
        <RoleTypesPage/>
        <GroupTypesPage/>
        <FinanceTypesPage/>
        <EventTypesPage/>
        <ProjectTypesPage/>
      </AppProvider>
    </div>


    /* <div className="App">
      
    <AppProvider>
      <RanksPageProvider id="05a3e0f5-f71e-4caa-8012-229d868aa8ca"/>
    </AppProvider>
  </div>*/

      /* <div className="App">
            
      <AppProvider>
        <GroupPageProvider id="2d9dcd22-a4a2-11ed-b9df-0242ac120003" />
      </AppProvider>
      </div> */
  );
}

export default App;