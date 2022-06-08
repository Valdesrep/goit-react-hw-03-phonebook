import propTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <span>
        {name}: {number}
      </span>
      <button className={s.delete} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onDelete: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
export default ContactItem;
