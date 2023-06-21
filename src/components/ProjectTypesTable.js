import { useState } from 'react';

import { TextInput } from 'components/TextInput';
import { AddButton } from './AddButton';

import { ProjectTypesTableRow } from './ProjectTypesTableRow';

import { generateUUID } from 'utils/CreateID';


/**
 * ProjectTypesTable component.
 *
 * @component
 * @param {Object[]} projectTypes - An array of role types.
 * @param {Object} actions - Actions object for performing operations on role types.
 * @returns {JSX.Element} The rendered ProjectTypesTable component.
 */
export const ProjectTypesTable = ({ projectTypes, actions }) => {

    const [id, setNewID] = useState(generateUUID)
    const [name, setNewName] = useState("")
    const [nameEn, setNewNameEn] = useState("")

    /**
   * Event handler for adding a new role type.
   *
   * @function
   */
    const ProjectTypeAdd = () =>{
        console.log(id, name, nameEn, 'New ProjectType')

        const payload ={
            "id":id,
            "name":name,
            "nameEn":nameEn,
        }
        if(name !== "" && nameEn !== ""){
            console.log(payload)
            actions.onProjectTypeAdd(payload);
            //actions.onProjectTypeAddMutation(payload)
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
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {projectTypes.length > 0 ? 
                (
                    projectTypes.map((role, index) => (
                        <ProjectTypesTableRow key={role.id} projectType={role} index={index + 1} actions={actions}/>
                    ))
                ) : 
                (
                    <tr>
                        <td colSpan={6}>No projectTypes found</td>
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
                    <td>
                    <AddButton onClick={ProjectTypeAdd} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

