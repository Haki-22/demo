import { MedalTypesTableRow } from './MedalTypesTableRow';
import { AddTypeRow } from './AddTypeRow';


/**
 * Table component used to display a list of medalTypes
 *
 * @component
 * @param {Object[]} medalTypes - An array of medal types.
 * @param {Object} actions - Actions object for performing operations on medal types.
 * @returns {JSX.Element} The rendered MedalTypesTable component.
 */
export const MedalTypesTable = ({ medalTypes, actions }) => {
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Název</th>
                    {/* <th>Název anglicky</th> */}
                    {/* <th>Poslední změna</th> */}
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {medalTypes.length > 0 ? 
                ( <>
                    
                    {medalTypes.map((medal, index) => (
                        <MedalTypesTableRow key={medal.id} medalType={medal} index={index + 1} actions={actions}/>
                    ))}

                    <AddTypeRow typeAddAction={actions.onMedalTypeAddMutation}/>
                    
                </> ) : 
                (
                    <tr>
                        <td colSpan={6}>No medalTypes found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
