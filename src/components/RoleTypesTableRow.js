import { useSelector } from "react-redux";
import { TextInput } from 'components/TextInput';
import { RoleTypeAsyncUpdate } from "reducers/RoleTypesAsyncActions";

/**
 * A custom table row component used in the RanksTable component.
 * @param {Object} roleTypes - The roleTypes object to be displayed in the table row.
 * 
 * @returns {JSX.Element} - Table row component
 */

export const RoleTypesTableRow = ({ roleType, actions, index }) => {

  const onChangeName_en = (value) => {
    //console.log(roleType, value)
    if (actions.onRoleTypeUpdate) {
        /* console.log(roleType, value, "changeNameinARow") */
        const payload = {
            "id": roleType.id,
            "name":roleType.name,
            "nameEn":value,
            "lastchange":roleType.lastchange
        }
        console.log(payload)
        //RoleTypeAsyncUpdate(payload)
        actions.onRoleTypeUpdateMutation(payload)
       
    }
}

const onChangeName = (value) => {
    
    if (actions.onRoleTypeUpdate) {
        /* console.log(roleType, value, "changeNameinARow") */
        const payload = {
            "id": roleType.id,
            "name":value,
            "nameEn":roleType.nameEn,
            "lastchange":roleType.lastchange
        }
        console.log(payload)
        //actions.onRoleTypeUpdate(payload)
        actions.onRoleTypeUpdateMutation(payload)
    }
}



  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{roleType.id}</td>
        <td>
        <TextInput
            placeholder="Název"
            id={roleType.id}
            value={roleType.name}
            onChange={(value) => {onChangeName(value)}}
        />
        </td>
        <td>
            <TextInput placeholder={"jméno"} id={roleType.id} value={roleType.nameEn} onChange={onChangeName_en}
            />
            </td>
        <td className="px-6 py-4 whitespace-nowrap w-full">{roleType.lastchange} </td>

        {/*
        <td>
        <DeleteButton onClick={() => onClickDelete(roleType.id)}>
            <Trash /> Delete
        </DeleteButton>
        </td>
        */}
        <td> Revert? </td>

    </tr>
  );
};
