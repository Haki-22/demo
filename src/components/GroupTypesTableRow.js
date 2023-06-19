import { useSelector } from "react-redux";
import { TextInput } from 'components/TextInput';
import { useDispatch } from 'react-redux';


/**
 * A custom table row component used in the RanksTable component.
 * @param {Object} groups - The groups object to be displayed in the table row.
 * 
 * @returns {JSX.Element} - Table row component
 */

export const GroupTypesTableRow = ({ groupType, actions, index }) => {
  
  
  const onChangeName_en = (value) => {
    //console.log(groupType, value)
    if (actions.onGroupTypeUpdate) {
        /* console.log(groupType, value, "changeNameinARow") */
        const payload = {
            "id": groupType.id,
            "name":groupType.name,
            "nameEn":value
        }
        console.log(payload)
        actions.onGroupTypeUpdate(payload)
    }
}

const onChangeName = (value) => {
    
    if (actions.onGroupTypeUpdate) {
        /* console.log(groupType, value, "changeNameinARow") */
        const payload = {
            "id": groupType.id,
            "name":value,
            "nameEn":groupType.nameEn,
            "lastchange":groupType.lastchange
        }
        console.log(payload)
        actions.onGroupTypeUpdate(payload)
    }
}

  return (
    <tr style={{verticalAlign: "middle"}}>
      <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{groupType.id}</td>
        <td>
        <TextInput
            placeholder="Název"
            id={groupType.id}
            value={groupType.name}
            onChange={onChangeName}
        />
        </td>
        <td>
            <TextInput placeholder={"jméno anglicky"} id={groupType.id} value={groupType.nameEn} onChange={onChangeName_en}
            />
        </td>
        <td className="px-6 py-4 whitespace-nowrap w-full">{groupType.lastchange} </td>

        {/*
        <td>
        <DeleteButton onClick={() => onClickDelete(groupType.id)}>
            <Trash /> Delete
        </DeleteButton>
        </td>
        */}
        <td> vrátit změnu </td>

    </tr>
  );
};
