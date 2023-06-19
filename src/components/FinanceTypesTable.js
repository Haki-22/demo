import { AddButton } from "./AddButton"
import { FinanceTypeTableRow } from "./FinanceTypesTableRow"
import { generateUUID } from "utils/CreateID"
import { TextInput } from "./TextInput"
import { useState } from "react"

/**
 * List of members as a table
 * @param {*} param0 
 * @returns 
 */

/*
export const FinanceTypesTable = ({financeTypes, actions}) => {
    //console.log(group.memberships)
    const newft = {
        id: generateUUID(),
        name: "",
        nameEn: "",
    };
    
    const FinanceTypeADD = (newft) => {
        console.log(newft, "ahoj")
    }

    const onChangeName_en = (value, financeType) => {
        //console.log("onChangeEmail")
        //console.log(financeType, value)
        
        if (actions.onFinanceTypeUpdate) {
            const payload = {financeType: {id: financeType.id}, financeType: {...financeType, nameEn: value}}
            actions.onFinanceTypeAdd(payload)
        }
    }

    const onChangeName = (value, financeType) => {
        //console.log("onChangeEmail")
        
        if (actions.onFinanceTypeUpdate) {
            console.log(financeType, value)
            const payload = {financeType: {id: financeType.id}, financeType: {...financeType, name: value}}
            actions.onFinanceTypeAdd(payload)
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
            <tbody>
                {financeTypes.length > 0 ? 
                (
                financeTypes.map((ft, index) => ( 
                    <FinanceTypeTableRow key={ft.id} financeType={ft} index={index + 1} actions={actions} ftid={ft.id}/>
                ))
                ):
                (
                    <tr>
                    <td colSpan={5}>No FinanceTypes found</td>
                     </tr>
                )
                }
            <tr>
                <td>
                    NEW
                </td>
                <td>{newft.id}</td>
                <td>
                    <TextInput
                        placeholder="Jméno"
                        id={newft.id}
                        value={newft.name}
                        onChange={(value) => onChangeName(value, newft)}
                    />
                </td>
                <td>
                    <TextInput
                        placeholder="Jméno anglicky"
                        id={newft.id}
                        value={newft.nameEn}
                        onChange={(value) => onChangeName_en(value, newft)}
                />
                </td>
                    <td>
                    <AddButton onClick={() => FinanceTypeADD(newft)} />
                </td>
            </tr>
            </tbody>
        </table>
    )
}
*/

export const FinanceTypesTable = ({ financeTypes, actions }) => {
   /*  const [newft, setNewft] = useState({
      id: generateUUID(),
      name: '',
      nameEn: '',
    });
    
    console.log(financeTypes, "allfinanceTypes"); */

    
    const [id, setNewID] = useState(generateUUID)
    const [name, setNewName] = useState("")
    const [nameEn, setNewNameEn] = useState("")

    const FinanceTypeAdd = () =>{
        console.log(id, name, nameEn, 'New EventType')
        const payload ={
            "id":id,
            "name":name,
            "nameEn":nameEn
        }
        if(name !== "" && nameEn !== ""){
            console.log(payload)
            actions.onFinanceTypeAdd(payload);
            setNewID(generateUUID);
            setNewName("");
            setNewNameEn("");
        }
        
    }

/* 
    const FinanceTypeADD = () => {
      console.log(newft, 'newft');
      // Add the new finance type to the store or perform any other actions
      actions.onFinanceTypeAdd(newft);
      setNewft({
        id: generateUUID(),
        name: '',
        nameEn: '',
      });
    }; */
  
  /*   const onChangeName_en = (value, financeType) => {
      if (actions.onFinanceTypeUpdate) {
        const payload = {
          financeType: { 
            id: financeType.id, 
            name:financeType.name ,
            nameEn: value }
        };
        console.log(payload, "ChangeNameEn")
        actions.onFinanceTypeUpdate(payload, "payload");
      }
    };
  
    const onChangeName = (value, financeType) => {
      if (actions.onFinanceTypeUpdate) {
        const payload = {
          financeType: { id: financeType.id, name: value , nameEn: financeType.nameEn},
        };
        console.log(payload, "ChangeName")
        actions.onFinanceTypeUpdate(payload);
      }
    }; */
  
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
        <tbody>
          {financeTypes.length > 0 ? (
            financeTypes.map((ft, index) => (
              <FinanceTypeTableRow
                key={ft.id}
                financeType={ft}
                index={index + 1}
                actions={actions}
                ftid={ft.id}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5}>No FinanceTypes found</td>
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
          <AddButton onClick={FinanceTypeAdd} />
          </td>
          </tr>
        </tbody>
      </table>
    );
  };