import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { actions } from './AppProvider';

import { RoleTypesTable } from 'components/RoleTypesTable';

import { bindRoleActions } from '../reducers/_main';
import { TextInput } from 'components/TextInput';

import { AddButton } from 'components/AddButton';


export const RoleTypesPage = () => {
    const dispatch = useDispatch();
    const roleTypes = useSelector(state => state.roleTypes || {});
    
    useEffect(() => {
        actions.roleFetch()
    }, []);

    return (
        <div className='container my-2'>
        <Card>
            <Card.Title className='p-3 text-center text-white bg-dark' >Typy rolí / Role Types</Card.Title>
            <Card.Body>
                <RoleTypesTable roleTypes={roleTypes} actions={actions}/>
            </Card.Body>
            <TextInput
                placeholder="Debug"
                id="a"
                value={roleTypes.name}
                onChange={(value) => console.log(roleTypes)}
        />
        </Card>
        
        </div>
    );

}

/* const { roleFetch } = bindRoleActions(dispatch);
        roleFetch(); */