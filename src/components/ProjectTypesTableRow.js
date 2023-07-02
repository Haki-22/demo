import { TypesNameInput } from "./TypesNameInput";
import { RenameTypeButton } from "./RenameTypeButton";

/**
 * ProjectTypes table row component used in the RanksTable component.
 * 
 * @component
 * @param {Object} projectTypes - The projectTypes object to be displayed in the table row.
 * @param {Object} actions - Actions object for performing operations on project types.
 * @param {number} index - The index of the table row
 * @returns {JSX.Element} - The JSX element representing the table row.
 */
export const ProjectTypesTableRow = ({ projectType, actions, index }) => {
  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{projectType.id}</td>
        <td>
          <TypesNameInput type={projectType} name={projectType.name} action={actions.onProjectTypeUpdate}  />
        </td>
        <td>
          <TypesNameInput type={projectType} nameEn={projectType.nameEn} action={actions.onProjectTypeUpdate}  />
        </td>
        <td>
          <RenameTypeButton type={projectType} updateExistingAction={actions.onProjectTypeUpdate} />
        </td>
    </tr>
  );
};
