import { EventTypesTableRow } from './EventTypesTableRow';
import { AddTypeRow } from './AddTypeRow';

/**
 * Table component used to display a list of eventTypes
 * 
 * @component
 * @param {Object[]} eventTypes - An array of event types.
 * @param {Object} actions - Actions object for performing operations on event types.
 * @returns {JSX.Element} The rendered EventTypesTable component.
 */
export const EventTypesTable = ({ eventTypes, actions }) => {
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Název</th>
                    <th>Název anglicky</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {eventTypes.length > 0 ? 
                ( <>
                    
                    {eventTypes.map((event, index) => (
                        <EventTypesTableRow key={event.id} eventType={event} index={index + 1} actions={actions}/>
                    ))}
                    
                </> ) : 
                (
                    <tr>
                        <td colSpan={6}>No eventTypes found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
