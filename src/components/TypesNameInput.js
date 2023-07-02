import { useState, useMemo, useCallback } from 'react';
import { CreateDelayer } from 'utils/CreateDelayer';

/**
 * @TypesNameInput
 * 
 * @module components
 */

/**
 * Component for a types name or nameEn input field depending on the provided prop. (Works with store)
 * @param {Object} type - The type object.
 * @param {string} name - The initial name of the input.
 * @param {string} nameEn - The initial name in english of the input.
 * @param {Function} action - The action function to be called on name change.
 * @example 
 * 
 * <TypesNameInput type={roleType} name={roleType.name} action={actions.onRoleTypeUpdate}/>
 * 
 * @example
 * 
 * <TypesNameInput type={roleType} nameEn={roleType.nameEn} action={actions.onRoleTypeUpdate}/>
 * 
 * @returns {JSX.Element} - The JSX element representing the types name input field.
 */
export const TypesNameInput = ({ type, name, nameEn, action }) => {

   // State management for local value either name or nameEn based on provided prop
  const [localValue, setLocalValue] = useState(name || nameEn);

  // Memoized delayer creation
  const delayer = useMemo(() => CreateDelayer(), [type.id]); //Waits for whole text

  /**
   * Handles the change of the name value.
   * @param {string} newValue - The new value of the name.
   */
  const onChangeName = useCallback((newValue) => {
    if (action) {
      let payload = {
        "id": type.id,
      };
      if (name) {
        payload.name = newValue.trim();
      }
      if (nameEn) {
        payload.nameEn = newValue.trim();
      }
      action(payload);
    }
  }, [type.id]);
  

  /**
   * Handles the change event of the input field.
   * @param {Object} e - The event object.
   */
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


/* const onChangeName = useCallback(
  (newValue) => {
    if (action) {
      let payload = type
      
      if(name){
        payload = {...payload, "name": newValue}
        //console.log("name payload:", payload)
      }
      if(nameEn){
        payload = {...payload, "nameEn": newValue}
        //console.log("nameEn payload:", payload)
      }
      action(payload)
   }
  },
  [type.id]
); */
