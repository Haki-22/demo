import { Trash } from 'react-bootstrap-icons';
import { TextInput } from 'components/TextInput';
import { DeleteButton } from 'components/DeleteButton';

/**
 * One EventType as a table row
 * @param {*} param0 
 * @returns 
 */
export const EventTypeTableRow = ({eventType, actions, index}) => {
    

    const onChangeName_en = (value) => {
        //console.log(eventType, value)
        if (actions.onEventTypeUpdate) {
            /* console.log(eventType, value, "changeNameinARow") */
            const payload = {
                "id": eventType.id,
                "name":eventType.name,
                "nameEn":value
            }
            console.log(payload)
            actions.onEventTypeUpdate(payload)
        }
    }

    const onChangeName = (value) => {
        
        if (actions.onEventTypeUpdate) {
            /* console.log(eventType, value, "changeNameinARow") */
            const payload = {
                "id": eventType.id,
                "name":value,
                "nameEn":eventType.nameEn
            }
            console.log(payload)
            actions.onEventTypeUpdate(payload)
        }
    }

    return (
        <tr style={{verticalAlign: "middle"}}>
            <td  >{index}</td>
            <td>{eventType.id}</td>
            <td>
                <TextInput placeholder={"jméno"} id={eventType.id} value={eventType.name} onChange={(value) => {onChangeName(value)}}
                />
            </td>
            <td>
                <TextInput placeholder={"jméno anglicky"} id={eventType.id} value={eventType.nameEn} onChange={onChangeName_en}
                />
            </td>
            <td>
                Revert?
            </td>
        </tr>
    )
}