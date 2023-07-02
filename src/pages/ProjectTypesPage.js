import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { ProjectTypesTable } from 'components/ProjectTypesTable';
import { TextInput } from 'components/TextInput';

/**
 * Fetches and displays the list of project types.
 * Allows adding and editing project types.
 * 
 * @component
 * @returns {JSX.Element} - ProjectTypesPage component.
 */
export const ProjectTypesPage = () => {

    const projectTypes = useSelector(state => state.projectTypes || []);
    
     /**
     * useEffect hook to fetch projects on component mount.
     *
     * @effect
     */
    useEffect(() => {
        actions.projectTypesFetch();
    }, []);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy projektů / Project types</Card.Title>
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
}
