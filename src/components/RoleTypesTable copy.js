import { useState, useEffect } from 'react';

import { TextInput } from 'components/TextInput';
import { AddButton, AddButtonComponent } from './AddButton';

import { RoleTypesTableRow } from './RoleTypesTableRow';

import { generateUUID } from 'utils/CreateID';
import { generateTimestamp } from './TimeStamp';


/**
 * RoleTypesTable component.
 *
 * @component
 * @param {Object[]} roleTypes - An array of role types.
 * @param {Object} actions - Actions object for performing operations on role types.
 * @returns {JSX.Element} The rendered RoleTypesTable component.
 */
export const RoleTypesTableCopy = ({ roleTypes, actions }) => {

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
                {roleTypes.length > 0 ? // > 1 if you add new roletype to store immideatly
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
                <AddButtonComponent addToStore={actions.onRoleTypeAdd} //addMutation={actions.onRoleTypeAdd} 
                />
            </tbody>
        </table>
    );
};

