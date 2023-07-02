import { TypesNameInput } from "./TypesNameInput";
import { RenameTypeButton } from "./RenameTypeButton";

/**
 * EventTypes table row component used in the RanksTable component.
 * 
 * @component
 * @param {Object} eventTypes - The eventTypes object to be displayed in the table row.
 * @param {Object} actions - Actions object for performing operations on event types.
 * @param {number} index - The index of the table row
 * @returns {JSX.Element} - The JSX element representing the table row.
 */
export const EventTypesTableRow = ({ eventType, actions, index }) => {
  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{eventType.id}</td>
        <td>
          <TypesNameInput type={eventType} name={eventType.name} action={actions.onEventTypeUpdate}  />
        </td>
        <td>
          <TypesNameInput type={eventType} nameEn={eventType.nameEn} action={actions.onEventTypeUpdate}  />
        </td>
        <td>
          <RenameTypeButton type={eventType} updateExistingAction={actions.onEventTypeUpdate} />
        </td>
    </tr>
  );
};
