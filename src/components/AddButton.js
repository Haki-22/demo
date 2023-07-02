/**
 * Button component for adding a new type.
 * 
 * @component
 * @param {Function} onClick - Function performed after clicking.
 * @returns {JSX.Element} The rendered button element.
 */
export const AddButton = ({ onClick }) => {
  return (
    <button className='btn btn-sm btn-success' onClick={onClick}>
      Přidat nový typ
    </button>
  );
};