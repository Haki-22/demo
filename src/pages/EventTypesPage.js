import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { EventTypesTable } from 'components/EventTypesTable';
import { TextInput } from 'components/TextInput';

/**
 * Fetches and displays the list of event types.
 * Allows adding and editing event types.
 * 
 * @component
 * @returns {JSX.Element} - EventTypesPage component.
 */
export const EventTypesPage = () => {

    const eventTypes = useSelector(state => state.eventTypes || []);
    
     /**
     * useEffect hook to fetch events on component mount.
     *
     * @effect
     */
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
}
