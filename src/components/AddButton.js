//Koho kam passnout sem,
import { generateTimestamp } from "./TimeStamp";
import { generateUUID } from 'utils/CreateID';
import { TextInput } from "./TextInput";
import React, { useEffect } from 'react';


export const AddButton = ({ onClick }) => {
  return (
    <button className='btn btn-sm btn-success' onClick={onClick}>
      Přidat nový typ
    </button>
  );
};

let newType = {
  id: generateUUID(),
  name: '',
  nameEn: '',
  lastChange: generateTimestamp(),
};

let cislo = 0;


export const AddButtonComponent = ({ type, addToStore, updateStore, addMutation, updateMutation }) => {
  //const lastchange = generateTimestamp()
 
  useEffect(() => { //executes twice 
    console.log("addButtonComp", newType.id, cislo)
    cislo +=1;
    addToStore(newType);
  }, []);


  if (newType.name != ''){
   
  }
  return (
    <tr style={{verticalAlign: "middle"}}>
      <td style={{ background: "green", color: "white"}}>+</td>
      <td>{newType.id}</td>
      <td>
      <TextInput
          placeholder="Jméno"
          id={newType.id}
          value={newType.name}
          onChange={(value) => updateStore(newType)}
      />
      </td>
      <td>
      <TextInput
          placeholder="Jméno anglicky"
          id={newType.id}
          value={newType.nameEn}
          onChange={(value) => updateStore(newType)}
      />
      </td>
      <td>{newType.lastChange}</td>
      <td>
          <AddButton onClick={addMutation(newType)}/>
      </td>
  </tr>

  );
};


/*
const RoleTypeAdd = () =>{
  setLastChange(generateTimestamp)
  //console.log(id, name, nameEn, lastChange, 'New RoleType')

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
*/