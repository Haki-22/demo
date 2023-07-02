import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { MedalTypesTable } from 'components/MedalTypesTable';
import { TextInput } from 'components/TextInput';



/**
 * Fetches and displays the list of medal types.
 * Allows adding and editing medal types.
 * 
 * @component
 * @returns {JSX.Element} - MedalTypesPage component.
 */
export const MedalTypesPage = () => {

    const medalTypes = useSelector(state => state.medalTypes || {});
    
     /**
     * useEffect hook to fetch medals on component mount.
     *
     * @effect
     */
    useEffect(() => {
        actions.medalTypesFetch();
    }, []);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy medailí / Medal types</Card.Title>
                <Card.Body>
                    <MedalTypesTable medalTypes={medalTypes} actions={actions} />
                </Card.Body>
                <TextInput
                    placeholder="Debug"
                    id="a"
                    value={medalTypes.name}
                    onChange={(value) => console.log(medalTypes)}
                />
            </Card>
        </div>
    );
}
