import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from 'pages/AppProvider';

import { RoleTypesPage } from 'pages/RoleTypesPage';
import { GroupTypesPage } from 'pages/GroupTypesPage';
import { FinanceTypesPage } from 'pages/FinanceTypesPage';
import { EventTypesPage } from 'pages/EventTypesPage';
import { ProjectTypesPage } from 'pages/ProjectTypesPage';
import { MedalTypesPage } from 'pages/MedalTypesPage';

/**
 * The main component of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered JSX element.
 */
function App() {
  return (
    
    <div className="App">
      <AppProvider>
        <RoleTypesPage/>
        <GroupTypesPage/>
        <FinanceTypesPage/>
        <EventTypesPage/>
        <ProjectTypesPage/>
        <MedalTypesPage/>
      </AppProvider>
    </div>
  );
}

export default App;