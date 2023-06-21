import { useSelector } from "react-redux";
import { TextInput } from 'components/TextInput';
import { ProjectTypeAsyncUpdate } from "reducers/ProjectTypesAsyncActions";

/**
 * A custom table row component used in the RanksTable component.
 * @param {Object} projectTypes - The projectTypes object to be displayed in the table row.
 * 
 * @returns {JSX.Element} - Table row component
 */

export const ProjectTypesTableRow = ({ projectType, actions, index }) => {

  const onChangeName_en = (value) => {
    //console.log(projectType, value)
    if (actions.onProjectTypeUpdate) {
        /* console.log(projectType, value, "changeNameinARow") */
        const payload = {
            "id": projectType.id,
            "name":projectType.name,
            "nameEn":value,
        }
        console.log(payload)
        actions.onProjectTypeUpdate(payload)
        //actions.onProjectTypeUpdateMutation(payload)
       
    }
}

const onChangeName = (value) => {
    
    if (actions.onProjectTypeUpdate) {
        /* console.log(projectType, value, "changeNameinARow") */
        const payload = {
            "id": projectType.id,
            "name":value,
            "nameEn":projectType.nameEn,
        }
        console.log(payload)
        actions.onProjectTypeUpdate(payload)
        //actions.onProjectTypeUpdateMutation(payload)
    }
}



  return (
    <tr style={{verticalAlign: "middle"}}>
        <td>{index}</td>
        <td className="px-6 py-4 whitespace-nowrap w-full text-center">{projectType.id}</td>
        <td>
        <TextInput
            placeholder="Název"
            id={projectType.id}
            value={projectType.name}
            onChange={(value) => {onChangeName(value)}}
        />
        </td>
        <td>
            <TextInput placeholder={"jméno"} id={projectType.id} value={projectType.nameEn} onChange={onChangeName_en}
            />
        </td>
        {/*
        <td>
        <DeleteButton onClick={() => onClickDelete(projectType.id)}>
            <Trash /> Delete
        </DeleteButton>
        </td>
        */}
        <td> Revert? </td>

    </tr>
  );
};
