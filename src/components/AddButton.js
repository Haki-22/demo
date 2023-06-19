export const AddButton = ({ onClick, type }) => {
  return (
    <button className='btn btn-sm btn-success' onClick={onClick}>
      Add new {type}
    </button>
  );
};
