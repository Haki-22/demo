import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";

import { GroupTypesTable } from 'components/GroupTypesTable';

import { bindGroupTypeActions } from '../reducers/_main';
import { GroupTypseFetch } from 'reducers/GroupTypeAsyncActions';
import { actions } from './AppProvider';

import { TextInput } from 'components/TextInput';



export const GroupTypesPage = () => {
    const dispatch = useDispatch();
    const groupTypes = useSelector(state => state.groupTypes || []);
    
    useEffect(() => {
       actions.groupTypeFetch()
    }, [dispatch]);

    return (
        <div className='container my-2'>
        <Card>
            <Card.Title className='p-3 text-center text-white bg-dark'>Typy skupin / Group Types</Card.Title>
            <Card.Body>
                <GroupTypesTable groupTypes={groupTypes} actions={actions}/>
            </Card.Body>
            <TextInput
                placeholder="Debug"
                id="a"
                value={groupTypes.name}
                onChange={(value) => console.log(groupTypes)}
        />
        </Card>
        </div>
    );

}

/*  const { groupTypeFetch } = bindGroupTypeActions(dispatch);
        groupTypeFetch(); */