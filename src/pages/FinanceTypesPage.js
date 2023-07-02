import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { FinanceTypesTable } from 'components/FinanceTypesTable';
import { TextInput } from 'components/TextInput';

/**
 * Fetches and displays the list of finance types.
 * Allows adding and editing finance types.
 * 
 * @component
 * @returns {JSX.Element} - FinanceTypesPage component.
 */
export const FinanceTypesPage = () => {

    const financeTypes = useSelector(state => state.financeTypes || []);
    
     /**
     * useEffect hook to fetch finances on component mount.
     *
     * @effect
     */
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
}
