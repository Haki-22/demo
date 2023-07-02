import { TypesNameInput } from "./TypesNameInput";
import { RenameTypeButton } from "./RenameTypeButton";

/**
 * FinanceTypes table row component used in the RanksTable component.
 * 
 * @component
 * @param {Object} financeTypes - The financeTypes object to be displayed in the table row.
 * @param {Object} actions - Actions object for performing operations on finance types.
 * @param {number} index - The index of the table row
 * @returns {JSX.Element} - The JSX element representing the table row.
 */
export const FinanceTypesTableRow = ({ financeType, actions, index }) => {
  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{financeType.id}</td>
        <td>
          <TypesNameInput type={financeType} name={financeType.name} action={actions.onFinanceTypeUpdate}  />
        </td>
        <td>
          <TypesNameInput type={financeType} nameEn={financeType.nameEn} action={actions.onFinanceTypeUpdate}  />
        </td>
        <td>
          <RenameTypeButton type={financeType} updateExistingAction={actions.onFinanceTypeUpdate} />
        </td>
    </tr>
  );
};
