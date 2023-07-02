import { GroupTypesTableRow } from './GroupTypesTableRow';
import { AddTypeRow } from './AddTypeRow';


/**
 * Table component used to display a list of groupTypes
 * 
 * @component
 * @param {Object[]} groupTypes - An array of group types.
 * @param {Object} actions - Actions object for performing operations on group types.
 * @returns {JSX.Element} The rendered GroupTypesTable component.
 */
export const GroupTypesTable = ({ groupTypes, actions }) => {
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Název</th>
                    <th>Název anglicky</th>
                    <th>Poslední změna</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
        
            <tbody className="bg-white divide-y divide-gray-200">
                {groupTypes.length > 0 ? 
                ( <>    

                    {groupTypes.map((groupType, index) => (
                    <GroupTypesTableRow key={groupType.id} groupType={groupType} actions={actions} index={index+1}/>
                    ))}

                    <AddTypeRow typeAddAction={actions.onGroupTypeAddMutation}/>

                </> ) : 
                (
                <tr>
                    <td colSpan={6}>No groupTypes found</td>
                </tr>
                )}
            </tbody>
        </table>
    );
};

