import { RoleTypesTableRow } from './RoleTypesTableRow';
import { AddTypeRow } from './AddTypeRow';

/**
 * Table component used to display a list of roleTypes
 * 
 * @function
 * @param {Object[]} roleTypes - An array of role types.
 * @param {Object} actions - Actions object for performing operations on role types.
 * @returns {JSX.Element} The rendered RoleTypesTable component.
 */
export const RoleTypesTable = ({ roleTypes, actions }) => {
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
                {roleTypes.length > 0 ? 
                ( <>
                    
                    {roleTypes.map((role, index) => (
                        <RoleTypesTableRow key={role.id} roleType={role} index={index + 1} actions={actions}/>
                    ))}

                    <AddTypeRow typeAddAction={actions.onRoleTypeAddMutation}/>
                    
                </> ) : 
                (
                    <tr>
                        <td colSpan={6}>No roleTypes found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
