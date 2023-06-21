import { useState } from 'react';

import { TextInput } from 'components/TextInput';
import { AddButton } from './AddButton';

import { RoleTypesTableRow } from './RoleTypesTableRow';

import { generateUUID } from 'utils/CreateID';
import { generateTimestamp } from './TimeStamp';


/**
 * Table component used to display a list of roleTypes
 *
 * @component
 * @param {Object[]} roleTypes - An array of role types.
 * @param {Object} actions - Actions object for performing operations on role types.
 * @returns {JSX.Element} The rendered RoleTypesTable component.
 */
export const RoleTypesTable = ({ roleTypes, actions }) => {
    
    const [id, setNewID] = useState(generateUUID)
    const [name, setNewName] = useState("")
    const [nameEn, setNewNameEn] = useState("")
    const [lastChange, setLastChange] = useState(generateTimestamp);

    /**
   * Event handler for adding a new role type.
   *
   * @function
   */
    const RoleTypeAdd = () =>{
        setLastChange(generateTimestamp)
        console.log(id, name, nameEn, lastChange, 'New RoleType')

        const payload ={
            "id":id,
            "name":name,
            "nameEn":nameEn,
            "lastchange":lastChange,
        }
        if(name !== "" && nameEn !== ""){
            console.log(payload)
            //actions.onRoleTypeAdd(payload);
            actions.onRoleTypeAddMutation(payload)
            setNewID(generateUUID);
            setNewName("");
            setNewNameEn("");
        }      
    }

    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Název</th>
                    <th>Název anglicky</th>
                    <th>Poslední změna</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {roleTypes.length > 0 ? 
                (
                    roleTypes.map((role, index) => (
                        <RoleTypesTableRow key={role.id} roleType={role} index={index + 1} actions={actions}/>
                    ))
                ) : 
                (
                    <tr>
                        <td colSpan={6}>No roleTypes found</td>
                    </tr>
                )}
                 <tr style={{verticalAlign: "middle"}}>
                    <td style={{ background: "green", color: "white"}}>+</td>
                    <td>{id}</td>
                    <td>
                    <TextInput
                        placeholder="Jméno"
                        id={id}
                        value={name}
                        onChange={(value) => setNewName(value)}
                    />
                    </td>
                    <td>
                    <TextInput
                        placeholder="Jméno anglicky"
                        id={id}
                        value={nameEn}
                        onChange={(value) => setNewNameEn(value)}
                    />
                    </td>
                    <td>{lastChange}</td>
                    <td>
                    <AddButton onClick={RoleTypeAdd} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
