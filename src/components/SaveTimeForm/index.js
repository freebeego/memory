import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopups, openResults } from '../../store/popups/popupsSlice';
import { addNewResult } from '../../store/results/thunks';
import { selectFetchStatus } from '../../store/results/selectors';
import { errors } from '../../config/constants';
import { setDefaultFetchStatus } from '../../store/results/resultsSlice';
import { selectDelta } from '../../store/timer/selectors';
import { selectIsSaveResultOpened } from '../../store/popups/selectors';
import Form from './Form';
import LabelName from './LabelName';
import InputName from './InputName';
import Error from './Error';
import SaveButton from './SaveButton';

function SaveTimeForm({
                        isSaveResultOpened,
                        delta,
                        fetchStatus,
                        closePopups,
                        setDefaultFetchStatus,
                        openResults,
                        addNewResult
}) {
  const inputRef = React.useRef(null);

  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(
    () => {
      if (isSaveResultOpened) {
        inputRef.current.focus();
      } else {
        setName('');
        setError(false);
      }

    },
    [isSaveResultOpened]
  );

  React.useEffect(
    () => {
      if (fetchStatus === 'failed') {
        setError(true);
      } else if (fetchStatus === 'succeeded') {
        closePopups();
        setDefaultFetchStatus();
        setName('');
        openResults();
      }
    },
    [fetchStatus, closePopups, setDefaultFetchStatus, openResults]
  );

  function onChange(e) {
    setName(e.target.value);
    if (error && e.target.value) {
      setError(false);
    }
  }

  function onSave(e) {
    e.preventDefault();
    if (!name) {
      setError(true);
      inputRef.current.focus();
    } else {
      addNewResult({ name, time: delta });
    }
  }

  return (
    <Form onSubmit={onSave} noValidate>
      <LabelName>
        Enter your name:
        <InputName
          autoFocus
          type="text"
          maxLength={50}
          ref={inputRef}
          value={name}
          onChange={onChange}
          required
        />
      </LabelName>
      <Error isShown={error}>
        {fetchStatus === 'failed' ? errors.saveResultFetchIsFailed : errors.nameIsEmpty }
      </Error>
      <SaveButton type='submit' disabled={fetchStatus === 'loading'}>
        {fetchStatus === 'loading' ? 'Saving...' : 'Save'}
      </SaveButton>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  isSaveResultOpened: selectIsSaveResultOpened(state),
  delta: selectDelta(state),
  fetchStatus: selectFetchStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  closePopups: () => dispatch(closePopups()),
  setDefaultFetchStatus: () => dispatch(setDefaultFetchStatus()),
  openResults: () => dispatch(openResults()),
  addNewResult: (result) => dispatch(addNewResult(result))
});

SaveTimeForm.propTypes = {
  isSaveResultOpened: PropTypes.bool.isRequired,
  delta: PropTypes.number.isRequired,
  fetchStatus: PropTypes.string.isRequired,
  closePopups: PropTypes.func.isRequired,
  setDefaultFetchStatus: PropTypes.func.isRequired,
  openResults: PropTypes.func.isRequired,
  addNewResult: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveTimeForm);
