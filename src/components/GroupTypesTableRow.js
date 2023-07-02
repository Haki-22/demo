import { TypesNameInput } from "./TypesNameInput";
import { RenameTypeButton } from "./RenameTypeButton";

/**
 * GroupTypes table row component used in the RanksTable component.
 * 
 * @component
 * @param {Object} groupTypes - The groupTypes object to be displayed in the table row.
 * @param {Object} actions - Actions object for performing operations on group types.
 * @param {number} index - The index of the table row
 * @returns {JSX.Element} - The JSX element representing the table row.
 */
export const GroupTypesTableRow = ({ groupType, actions, index }) => {
  return (
    <tr style={{verticalAlign: "middle"}}>
      <td>{index}</td>
      <td className="px-6 py-4 whitespace-nowrap w-full text-center">{groupType.id}</td>
        <td>
          <TypesNameInput type={groupType} name={groupType.name} action={actions.onGroupTypeUpdate}  />
        </td>
        <td>
          <TypesNameInput type={groupType} nameEn={groupType.nameEn} action={actions.onGroupTypeUpdate}  />
        </td>
        <td className="px-6 py-4 whitespace-nowrap w-full">{groupType.lastchange} </td>
        <td>
          <RenameTypeButton type={groupType} updateExistingAction={actions.onGroupTypeUpdateMutation} />
        </td>
    </tr>
  );
};