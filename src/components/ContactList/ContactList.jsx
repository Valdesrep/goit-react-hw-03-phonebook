import ContactItem from 'components/ContactItem';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  onDelete: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
