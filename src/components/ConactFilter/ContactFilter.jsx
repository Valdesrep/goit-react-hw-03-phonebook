import propTypes from 'prop-types';
import s from './ContactFilter.module.css';

const ContactFilter = ({ value, onChange }) => {
  return (
    <div className={s.form}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

ContactFilter.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default ContactFilter;
