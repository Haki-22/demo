import { Trash } from 'react-bootstrap-icons';
import { TextInput } from 'components/TextInput';
import { DeleteButton } from 'components/DeleteButton';
import { useState, useEffect  } from 'react';


/**
 * One member as a table row
 * @param {*} param0 
 * @returns 
 */
export const RanksTableChildren = ({rank, actions}) => {


    //remove button action
    const onClickDelete = () => {
        const payload = {rank: rank}
        actions.onRankRemove(payload)
        console.log('jdu smazat hodnost')
    }

    const NameChange = () => {
        const payload = {rank: rank}
        actions.onRankUpdate(payload)
        console.log('zmena jmena ', rank)
      };


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
    <tr>
      <td className="px-6 py-4 whitespace-nowrap w-full text-center"> 1 </td> {/* Update when loading more then one elemtn */}

      <td className="px-6 py-4 whitespace-nowrap w-full text-center">{rank.id}</td>
    
        <td>
        <TextInput
            placeholder="Název"
            id={rank.id}
            value={rank.name}
            onChange={(value) => NameChange(value, rank.name)}
        />
        </td>

        <td className="px-6 py-4 whitespace-nowrap w-full">{rank.nameEn} </td>

        <td className="px-6 py-4 whitespace-nowrap w-full">{rank.lastchange} </td>

        <td>
        <DeleteButton onClick={() => onClickDelete(rank.id)}>
            <Trash /> Delete
        </DeleteButton>
        </td>

      </tr>
        </tbody>
        </table>
    )
    }

