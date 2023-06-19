import { EventTypeTableRow } from "./EventTypeTableRow";
import { generateUUID } from "utils/CreateID"
import { TextInput } from "./TextInput"
import { useState } from "react"
import { AddButton } from "./AddButton";



/**
 * Table component used to display a list of EventTypes
 * @param {*} param0 
 * @returns 
 */
export const EventTypesTable = ({ eventTypes, actions }) => {


  /*   const [newft, setNewft] = useState({
        id: generateUUID(),
        name: '',
        nameEn: '',
      });

    const handleNameChange = (type, value) => {
        newft({
        id:type.id,
        name:value,
        nameEn:type.nameEn
    });
    }; */

    const [id, setNewID] = useState(generateUUID)
    const [name, setNewName] = useState("")
    const [nameEn, setNewNameEn] = useState("")

    const EventTypeAdd = () =>{
        console.log(id, name, nameEn, 'New EventType')
        const payload ={
            "id":id,
            "name":name,
            "nameEn":nameEn
        }
        if(name !== "" && nameEn !== ""){
            console.log(payload)
            actions.onEventTypeAdd(payload);
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
                {eventTypes.length > 0 ? 
                (
                    eventTypes.map((eventType, index) => (
                        <EventTypeTableRow key={eventType.id} eventType={eventType} actions={actions} index={index+1} />
                    ))
                ) : 
                (
                    <tr>
                        <td colSpan={5}>No eventTypes found</td>
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
                    <AddButton onClick={EventTypeAdd} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
