import { TypesNameInput } from "./TypesNameInput";
import { RenameTypeButton } from "./RenameTypeButton";

/**
 * MedalTypes table row component used in the MedalTable component.
 * 
 * @component
 * @param {Object} medalTypes - The medalTypes object to be displayed in the table row.
 * @param {Object} actions - Actions object for performing operations on medal types.
 * @param {number} index - The index of the table row
 * @returns {JSX.Element} - The JSX element representing the table row.
 */
export const MedalTypesTableRow = ({ medalType, actions, index }) => {
  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{medalType.id}</td>
        <td>
          <TypesNameInput type={medalType} name={medalType.name} action={actions.onMedalTypeUpdate}  />
        </td>
        {/* <td>
          <TypesNameInput type={medalType} nameEn={medalType.nameEn} action={actions.onMedalTypeUpdate}  />
        </td> */}
        {/* <td className="px-6 py-4 whitespace-nowrap w-full">{medalType.lastchange} </td> */}
        <td>
          <RenameTypeButton type={medalType} updateExistingAction={actions.onMedalTypeUpdateMutation} />
        </td>
    </tr>
  );
};
