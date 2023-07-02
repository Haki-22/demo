export const RenameTypeButton = ({ type, updateExistingAction }) => {
    const update = () => {
        updateExistingAction(type);
    }
    return (
      <button className='btn btn-sm btn-success' onClick={update}>
        Přejmenovat
      </button>
    );
  };