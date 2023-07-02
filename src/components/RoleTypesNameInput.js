import { useState, useMemo, useCallback } from 'react';
import { CreateDelayer } from 'utils/CreateDelayer';

/**
 * Editable Text for roleType name only
 * @param {string} value value of input
 * @param {string} placeholder value of help if the text is not displayed
 * @returns {JSX.Element}
 */
export const RoleTypesNameInput = ({ roleType, value, actions }) => {
  const [localValue, setLocalValue] = useState(value);


  const delayer = useMemo(() => CreateDelayer(), [roleType.id]); //Waits for whole text

  const onChangeName = useCallback(
    (newValue) => {
     // if (actions.onRoleTypeUpdate) {
        const payload = {
          id: roleType.id,
          name: newValue,
          nameEn: roleType.nameEn,
          lastchange: roleType.lastchange,
        };
        
        actions.onRoleTypeUpdate(payload);
        //actions.onRoleTypeUpdateMutation(payload); // Should be only store update
     //}
    },
    [roleType.id]
  );

  const localOnChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setLocalValue(newValue);
      delayer(() => onChangeName(newValue));
    },
    [delayer, onChangeName]
  );

  return (
    <input
      className="form-control"
      placeholder="Název"
      value={localValue}
      onChange={localOnChange}
    />
  );
};
