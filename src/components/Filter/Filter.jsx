import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find Contact By Name</label>
      <input name="filter" type="text" onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
