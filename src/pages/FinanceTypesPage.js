import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';
import { TextInput } from 'components/TextInput';

import { FinanceTypesTable } from 'components/FinanceTypesTable';
import { AddButton } from 'components/AddButton';

/**
 * Fetches and displays the list of group types.
 * Allows adding and editing group types
 * @returns {JSX.Element} - FinanceTypesPage component.
 */
export const FinanceTypesPage = () => {
    const dispatch = useDispatch();
    const financeTypes = useSelector(state => state.financeTypes || []);
    
    useEffect(() => {
        actions.financeTypesFetch();
    }, []);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy financí / Finance types</Card.Title>
                <Card.Body>
                    <FinanceTypesTable financeTypes={financeTypes} actions={actions} />
                </Card.Body>
           
                <TextInput
                    placeholder="Debug"
                    id="a"
                    value={financeTypes.name}
                    onChange={(value) => console.log(financeTypes)}
                />
            </Card>
        </div>
    );
};
