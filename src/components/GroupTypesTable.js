import { Trash } from 'react-bootstrap-icons';
import { DeleteButton } from 'components/DeleteButton';

import { TextInput } from 'components/TextInput';

import { GroupTypesTableRow } from './GroupTypesTableRow';

import { CardText } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

import { generateUUID } from 'utils/CreateID';
import { useState } from 'react';
import { AddButton } from './AddButton';
import { generateTimestamp } from './TimeStamp';

/**
 * Table component used to display a list of groups
 * @param {*} param0 
 * @returns 
 */
export const GroupTypesTable = ({ groupTypes, actions }) => {

    const [id, setNewID] = useState(generateUUID)
    const [name, setNewName] = useState("")
    const [nameEn, setNewNameEn] = useState("")
    const [lastChange, setLastChange] = useState(generateTimestamp);

    const GroupTypeAdd = () =>{
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
            actions.onGroupTypeAdd(payload);
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
                {groupTypes.length > 0 ? 
                (
                    groupTypes.map((groupType, index) => (
                        <GroupTypesTableRow key={groupType.id} groupType={groupType} actions={actions} index={index+1}/>
                    ))
                ) : 
                (
                    <tr>
                        <td>No groupTypes found</td>
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
                    <AddButton onClick={GroupTypeAdd} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

