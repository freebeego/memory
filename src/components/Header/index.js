import Timer from '../Timer';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openResults } from '../../store/popups/popupsSlice';
import HeaderElement from './HeaderElement';
import Title from './Title';
import ResultsTableButton from './ResultsTableButton';

function Header({ openResults }) {
  return (
    <HeaderElement>
      <Title>
        Memory
      </Title>
      <Timer />
      <ResultsTableButton onClick={openResults}>
        Results
      </ResultsTableButton>
    </HeaderElement>
  );
}

const mapDispatchToProps = (dispatch) => ({
  openResults: () => dispatch(openResults())
});

Header.propTypes = {
  openResults: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Header);
