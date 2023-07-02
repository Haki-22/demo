import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { RoleTypesTable } from 'components/RoleTypesTable';
import { TextInput } from 'components/TextInput';

/**
 * Fetches and displays the list of role types.
 * Allows adding and editing role types.
 * 
 * @component
 * @returns {JSX.Element} - RoleTypesPage component.
 */
export const RoleTypesPage = () => {

    const roleTypes = useSelector(state => state.roleTypes || []);
    
     /**
     * useEffect hook to fetch roles on component mount.
     *
     * @effect
     */
    useEffect(() => {
        actions.roleTypesFetch();
    }, []);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy rolí / Role types</Card.Title>
                <Card.Body>
                    <RoleTypesTable roleTypes={roleTypes} actions={actions} />
                </Card.Body>
                <TextInput
                    placeholder="Debug"
                    id="a"
                    value={roleTypes.name}
                    onChange={(value) => console.log(roleTypes)}
                />
            </Card>
        </div>
    );
}
