import { FinanceTypesTableRow } from './FinanceTypesTableRow';
import { AddTypeRow } from './AddTypeRow';

/**
 * Table component used to display a list of financeTypes
 * 
 * @component
 * @param {Object[]} financeTypes - An array of finance types.
 * @param {Object} actions - Actions object for performing operations on finance types.
 * @returns {JSX.Element} The rendered FinanceTypesTable component.
 */
export const FinanceTypesTable = ({ financeTypes, actions }) => {
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
                {financeTypes.length > 0 ? 
                ( <>
                    
                    {financeTypes.map((finance, index) => (
                        <FinanceTypesTableRow key={finance.id} financeType={finance} index={index + 1} actions={actions}/>
                    ))}
                    
                </> ) : 
                (
                    <tr>
                        <td colSpan={6}>No financeTypes found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
