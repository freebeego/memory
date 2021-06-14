import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { closePopups, openResults } from '../../store/popups/popupsSlice';
import { addNewResult } from '../../store/results/thunks';
import { selectFetchStatus } from '../../store/results/selectors';
import { errors } from '../../config/constants';
import { setDefaultFetchStatus } from '../../store/results/resultsSlice';
import { selectDelta } from '../../store/timer/selectors';
import { selectIsSaveResultOpened } from '../../store/popups/selectors';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 50%;
  padding: 50px 0 10px;
`;

const LabelName = styled.label`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
`;

const InputName = styled.input`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  padding: 0;
  margin-left: 10px;
  border: unset;
  border-bottom: 1px solid #000;
  outline: unset;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: #f0f8ff;
  }
`;

const Error = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  visibility: ${props => props.isShown ? 'visible' : 'hidden'};
`;

const SaveButton = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #f0f8ff;
  border-radius: 15px;
  border: 1px solid #000;
  width: 133px;
  height: 35px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`;

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
