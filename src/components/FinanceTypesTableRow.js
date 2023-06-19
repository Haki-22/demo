import { Trash } from 'react-bootstrap-icons';
import { TextInput } from 'components/TextInput';
import { DeleteButton } from 'components/DeleteButton';

/**
 * One FinanceType as a table row
 * @param {*} param0 
 * @returns 
 */
export const FinanceTypeTableRow = ({index, financeType, actions}) => {

    const onChangeName_en = (value) => {
        //console.log(financeType, value)
        if (actions.onFinanceTypeUpdate) {
            /* console.log(financeType, value, "changeNameinARow") */
            const payload = {
                "id": financeType.id,
                "name":financeType.name,
                "nameEn":value
            }
            console.log(payload)
            actions.onFinanceTypeUpdate(payload)
        }
    }

    const onChangeName = (value) => {
        
        if (actions.onFinanceTypeUpdate) {
            /* console.log(financeType, value, "changeNameinARow") */
            const payload = {
                "id": financeType.id,
                "name":value,
                "nameEn":financeType.nameEn
            }
            console.log(payload)
            actions.onFinanceTypeUpdate(payload)
        }
    }

    return (
        <tr style={{verticalAlign: "middle"}}>
            <td>{index}</td>
            <td>{financeType.id}</td>
            <td>
                <TextInput placeholder={"jméno"} id={financeType.id} value={financeType.name} onChange={onChangeName}/>
            </td>
            <td>
                <TextInput placeholder={"jméno anglicky"} id={financeType.id} value={financeType.nameEn} onChange={onChangeName_en}/>
            </td>
            <td>
                Revert?
            </td>
        </tr>
    )
}