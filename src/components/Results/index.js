import React from 'react';
import PropTypes from 'prop-types';
import formatTimer from '../../utils/formatTimer';
import { connect } from 'react-redux';
import { selectLastResult, selectResults } from '../../store/results/selectors';
import Container from './Container';
import ListTitle from './ListTitle';
import ColumnTitle from './ColumnTitle';
import ResultsList from './ResultsList';
import Result from './Result';
import ResultText from './ResultText';

function Results({ results, lastResult }) {
  return (
    <Container>
      <ListTitle>
        <ColumnTitle>Name</ColumnTitle>
        <ColumnTitle>Time</ColumnTitle>
      </ListTitle>
      <ResultsList>
        {results.map((result) =>
          <Result key={result._id}>
            <ResultText current={result === lastResult}>{result.name}</ResultText>
            <ResultText current={result === lastResult}>{formatTimer(result.time)}</ResultText>
          </Result>
        )}
      </ResultsList>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  results: selectResults(state),
  lastResult: selectLastResult(state)
});

const resultTypesTemplate = {
  name: PropTypes.string,
  time: PropTypes.number
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape(resultTypesTemplate)),
  lastResult: PropTypes.shape(resultTypesTemplate)
};

export default connect(mapStateToProps)(Results);
