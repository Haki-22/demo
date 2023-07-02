export const RenameRoleTypeButton = ({ roleType, actions }) => {
    const update = () => {
      actions.onRoleTypeUpdateMutation(roleType);
    }
    return (
      <button className='btn btn-sm btn-success' onClick={update}>
        Přejmenovat
      </button>
    );
  };