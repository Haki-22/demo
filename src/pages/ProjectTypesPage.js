import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";

import { actions } from './AppProvider';
import { TextInput } from 'components/TextInput';

import { ProjectTypesTable } from 'components/ProjectTypesTable';


/**
 * ProjectTypesPage component.
 *
 * @component
 * @returns {JSX.Element} The rendered ProjectTypesPage component.
 */
export const ProjectTypesPage = () => {
    //const dispatch = useDispatch();
    const projectTypes = useSelector((state) => state.projectTypes || []);
  
    /**
     * useEffect hook to fetch roles on component mount.
     *
     * @effect
     */
    useEffect(() => {
      actions.projectTypesFetch();
    }, []);
  
    return (
      <div className="container my-2">
        <Card>
          <Card.Title className="p-3 text-center text-white bg-dark">
            Typy projektů / Project types
          </Card.Title>
          <Card.Body>
            <ProjectTypesTable projectTypes={projectTypes} actions={actions} />
          </Card.Body>
          <TextInput
            placeholder="Debug"
            id="a"
            value={projectTypes.name}
            onChange={(value) => console.log(projectTypes)}
          />
        </Card>
      </div>
    );
  };
  