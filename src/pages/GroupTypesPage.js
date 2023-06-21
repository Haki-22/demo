import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";

import { GroupTypesTable } from 'components/GroupTypesTable';
import { TextInput } from 'components/TextInput';

import { bindGroupTypeActions } from '../reducers/_main';
import { GroupTypseFetch } from 'reducers/GroupTypeAsyncActions';
import { actions } from './AppProvider';

/**
 * Fetches and displays the list of group types.
 * Allows adding and editing group types.
 *  @returns {JSX.Element} - GroupTypePage component.
 */
export const GroupTypesPage = () => {
    const dispatch = useDispatch();
    const groupTypes = useSelector(state => state.groupTypes || []);
    
    useEffect(() => {
       actions.groupTypeFetch();
    }, [dispatch]);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy skupin / Group types</Card.Title>
                <Card.Body>
                    <GroupTypesTable groupTypes={groupTypes} actions={actions}/>
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
