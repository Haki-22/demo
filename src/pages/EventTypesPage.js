import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';
import { TextInput } from 'components/TextInput';

import { EventTypesTable } from 'components/EventTypesTable';
import { AddButton } from 'components/AddButton';

/**
 * Component for the event types page.
 * @returns {JSX.Element} - EventTypesPage component.
 */
export const EventTypesPage = () => {
    const dispatch = useDispatch();
    const eventTypes = useSelector(state => state.eventTypes || {});
    
    useEffect(() => {
        actions.eventTypesFetch();
    }, []);

    return (
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-center text-white bg-dark'>Typy událostí / Event types</Card.Title>
                <Card.Body>
                    <EventTypesTable eventTypes={eventTypes} actions={actions} />
                </Card.Body>
           
                <TextInput
                    placeholder="Debug"
                    id="a"
                    value={eventTypes.name}
                    onChange={(value) => console.log(eventTypes)}
                />
            </Card>
        </div>
    );
};
