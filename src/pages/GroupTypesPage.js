import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { GroupTypesTable } from 'components/GroupTypesTable';
import { TextInput } from 'components/TextInput';

/**
 * Fetches and displays the list of group types.
 * Allows adding and editing group types.
 * 
 * @component
 * @returns {JSX.Element} - GroupTypesPage component.
 */
export const GroupTypesPage = () => {

    const groupTypes = useSelector(state => state.groupTypes || []);
    
     /**
     * useEffect hook to fetch groups on component mount.
     *
     * @effect
     */
    useEffect(() => {
        actions.groupTypesFetch();
    }, []);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy skupin / Group types</Card.Title>
                <Card.Body>
                    <GroupTypesTable groupTypes={groupTypes} actions={actions} />
                </Card.Body>
                <TextInput
                    placeholder="Debug"
                    id="a"
                    value={groupTypes.name}
                    onChange={(value) => console.log(groupTypes)}
                />
            </Card>
        </div>
    );
}
