import Timer from '../Timer/Timer';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { openResults } from '../../store/popups/popupsSlice';

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
`;

const Title = styled.h1`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 900;
  font-size: 32px;
  margin: 0;
`;

const ResultsTableButton = styled.button`
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

export default connect(null, mapDispatchToProps)(Header);
