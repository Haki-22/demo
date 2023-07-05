import { TypesNameInput } from "./TypesNameInput";
import { RenameTypeButton } from "./RenameTypeButton";

/**
 * RoleTypes table row component used in the RanksTable component.
 * 
 * @function
 * @param {Object} roleTypes - The roleTypes object to be displayed in the table row.
 * @param {Object} actions - Actions object for performing operations on role types.
 * @param {number} index - The index of the table row
 * @returns {JSX.Element} - The JSX element representing the table row.
 */
export const RoleTypesTableRow = ({ roleType, actions, index }) => {
  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{roleType.id}</td>
        <td>
          <TypesNameInput type={roleType} name={roleType.name} action={actions.onRoleTypeUpdate}  />
        </td>
        <td>
          <TypesNameInput type={roleType} nameEn={roleType.nameEn} action={actions.onRoleTypeUpdate}  />
        </td>
        <td className="px-6 py-4 whitespace-nowrap w-full">{roleType.lastchange} </td>
        <td>
          <RenameTypeButton type={roleType} updateExistingAction={actions.onRoleTypeUpdateMutation} />
        </td>
    </tr>
  );
};
