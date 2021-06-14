import styled from 'styled-components';
import formatTimer from '../../utils/formatTimer';
import { connect } from 'react-redux';
import { selectLastResult, selectResults } from '../../store/results/selectors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow-y: auto;
`;

const ListTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 0;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const ColumnTitle = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 4px;
  text-align: center;
  width: 100%;

  &:first-of-type {
    border-right: 1px solid #000;
    border-bottom: 2px solid #000;
  }

  &:last-of-type {
    border-left: 1px solid #000;
    border-bottom: 2px solid #000;
  }
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 450px;
  box-sizing: border-box;
`;

const Result = styled.li`
  display: flex;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  &:first-of-type {
    border-top: unset;
  }

  &:last-of-type {
    border-bottom: unset;
  }
`;

const ResultText = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 18px;
  text-align: center;
  color: ${props => props.current ? 'red' : '#000'};
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 0;
  width: calc((100% / 2) - 1px);

  &:first-of-type {
    border-right: 1px solid #000;
  }

  &:last-of-type {
    border-left: 1px solid #000;
  }
`;

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

export default connect(mapStateToProps)(Results);
