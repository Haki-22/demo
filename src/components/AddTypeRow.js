import { useState } from 'react';

import { AddButton } from './AddButton';
import { TextInput } from './TextInput';

import { generateUUID } from 'utils/CreateID';
import { generateTimestamp } from '../utils/TimeStamp';
/**
 * AddTypeRow component for adding a new type.
 *
 * @component
 * @param {Function} props.typeAddAction - The action to add a new type.
 * @example
 * 
 * <AddTypeRow typeAddAction={actions.onRoleTypeAddMutation}/>
 * 
 * @returns {JSX.Element} - The rendered component.
 */
export const AddTypeRow = ({typeAddAction}) => {
    const [id, setNewID] = useState(generateUUID)
    const [name, setNewName] = useState("")
    const [nameEn, setNewNameEn] = useState("")
    const [lastChange, setLastChange] = useState(generateTimestamp);

   /**
   * Event handler for adding a new type.
   *
   * @function
   */
    const typeAdd = () =>{
        setLastChange(generateTimestamp)
        console.log(id, name, nameEn, lastChange, 'New GroupType')

        const payload ={
            "id":id,
            "name":name,
            "nameEn":nameEn,
            "lastchange":lastChange,
        }
        if(name !== "" && nameEn !== ""){
            console.log(payload)
            typeAddAction(payload);
            setNewID(generateUUID);
            setNewName("");
            setNewNameEn("");
        }
    }
    return (
        <tr style={{verticalAlign: "middle"}}>
            <td style={{ background: "green", color: "white"}}>+</td>
            <td>{id}</td>
            <td>
                <TextInput
                    placeholder="Název"
                    id={id}
                    value={name}
                    onChange={(value) => setNewName(value)}
                />
            </td>
            <td>
                <TextInput
                    placeholder="Název anglicky"
                    id={id}
                    value={nameEn}
                    onChange={(value) => setNewNameEn(value)}
                />
            </td>
            <td>{lastChange}</td>
            <td>
                <AddButton onClick={typeAdd} />
            </td>
        </tr>
    );
}

 /*    const [type, setNewType] = useState({
        id: generateUUID(),
        name: "",
        nameEn: "",
        lastChange: generateTimestamp()
      });
      
      setNewType((prevType) => ({
        ...prevType,
        name: name ? name : prevType.name,
        nameEn: nameEn ? nameEn : prevType.nameEn
      })); */